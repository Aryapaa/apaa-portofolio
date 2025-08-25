import { getNowPlaying, getRecentlyPlayed } from '@/lib/spotify';

export async function GET() {
  let response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    response = await getRecentlyPlayed();
    const recent = await response.json();

    if (!recent.items || recent.items.length === 0) {
      return Response.json(null, { status: 200 });
    }

    const song = recent.items[0].track;

    const track = {
      artist: song.artists.map((a) => a.name).join(", "),
      title: song.name,
      album: song.album.name,
      albumImageUrl: song.album.images[0].url,
      songUrl: song.external_urls.spotify,
      isPlaying: false,
      status: "Last Played",
    };

    return Response.json(track, { status: 200 });
  }

  const song = await response.json();

  if (!song?.item) {
    return Response.json(null, { status: 200 });
  }

  const track = {
    artist: song.item.artists.map((artist) => artist.name).join(', '),
    title: song.item.name,
    album: song.item.album.name,
    albumImageUrl: song.item.album.images[0].url,
    songUrl: song.item.external_urls.spotify,
    isPlaying: song.is_playing,
    status: "Currently Playing",
  };

  return Response.json(track, { status: 200 });
}
