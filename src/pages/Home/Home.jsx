import Hero from "../../components/Hero";
import StoryTellingSection from "../../components/storyTelling";
import ImageStory from "../../components/ImageStory";

import About from "./About";
import Vision from "./Vision";
import Activites from "./Activites";
// import Events from "./Events";
export default function Home() {
  return (
    <>
      <Hero />

      <StoryTellingSection />

      <ImageStory />

      

      <About />

      <Vision />

      <Activites />

      {/* <Events /> */}


    </>
  );
}