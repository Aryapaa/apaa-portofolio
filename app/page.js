import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Project/>
      <Contact/>
    </>
  );
}
