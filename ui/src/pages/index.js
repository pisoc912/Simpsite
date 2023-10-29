import About from "@/components/AboutPage";
import AppAppBar from "@/components/Appbar";
import HomePage from "@/components/HomePage";
import ShortenWrapper from "@/components/ShortenWrapper";
import { UserProvider } from "@/context/UserContext";


function Home() {
  return (

    <>
      <AppAppBar />
      <HomePage />
      <ShortenWrapper />
    </>

  )
}

export default Home;