import { getNowPlaying, getRecentlyPlayed } from '@/lib/spotify';

let lastTrackCache = null;
let lastCacheTime = 0;
const CACHE_TTL = 1000 * 60 * 5;

export async function GET() {
  try {
    let response = await getNowPlaying();
    if (response.status === 204 || response.status > 400) {
      const recentRes = await getRecentlyPlayed();
      const recentData = await recentRes.json();
      if (recentData?.items?.length > 0) {
        const song = recentData.items[0].track;
        const track = {
          artist: song.artists.map(a => a.name).join(", "),
          title: song.name,
          album: song.album.name,
          albumImageUrl: song.album.images[0].url,
          songUrl: song.external_urls.spotify,
          isPlaying: false,
          status: "Last Played"
        };
        lastTrackCache = track;
        lastCacheTime = Date.now();
        return Response.json(track, { status: 200 });
      }
      if (lastTrackCache && Date.now() - lastCacheTime < CACHE_TTL) {
        return Response.json(lastTrackCache, { status: 200 });
      }
      return Response.json(null, { status: 200 });
    }

    const nowData = await response.json();
    if (nowData?.item) {
      const track = {
        artist: nowData.item.artists.map(a => a.name).join(', '),
        title: nowData.item.name,
        album: nowData.item.album.name,
        albumImageUrl: nowData.item.album.images[0].url,
        songUrl: nowData.item.external_urls.spotify,
        isPlaying: nowData.is_playing,
        status: "Currently Playing"
      };
      lastTrackCache = track;
      lastCacheTime = Date.now();
      return Response.json(track, { status: 200 });
    }
    if (lastTrackCache && Date.now() - lastCacheTime < CACHE_TTL) {
      return Response.json(lastTrackCache, { status: 200 });
    }
    return Response.json(null, { status: 200 });
  } catch (err) {
    console.error(err);
    if (lastTrackCache && Date.now() - lastCacheTime < CACHE_TTL) {
      return Response.json(lastTrackCache, { status: 200 });
    }
    return Response.json(null, { status: 500 });
  }
}