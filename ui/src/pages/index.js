import About from "@/components/AboutPage";
import NavBar from "@/components/NavBar";
import HomePage from "@/components/HomePage";
import ShortenWrapper from "@/components/ShortenWrapper";
import { UserProvider, useUser } from "@/context/UserContext";
import { useEffect } from "react";
import Price from "./price";


function Home() {
  return (
    <>
      <NavBar />
      <HomePage />
      <ShortenWrapper />
    </>

  )
}

export default Home;