import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Projects from "./components/Projects";
import StudioTeaser from "./components/StudioTeaser";
import PhilosophyTeaser from "./components/PhilosophyTeaser";
import ProcessTeaser from "./components/ProcessTeaser";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Projects featured />
      <StudioTeaser />
      <PhilosophyTeaser />
      <ProcessTeaser />
      <Blog limit={3} />
    </>
  );
}
