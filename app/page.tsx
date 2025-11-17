import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import PersonalProject from "@/components/sections/PersonalProject";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <PersonalProject />
      <Process />
      <Testimonials />
      <Footer />
    </>
  );
}
