import FeaturedWork from "@/components/home/FeaturedWork";
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";

function Home() {
  return (
    <>
      <main className="pt-24">
        <Hero />
        <FeaturedWork />
        <Skills />
      </main>
    </>
  );
}

export default Home;
