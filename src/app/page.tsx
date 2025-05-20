import AboutMe from "@/components/ui/aboutme";
import ContactForm from "@/components/ui/contactme";
import Hero from "@/components/ui/hero";
import ProjectsSection from "@/components/ui/projectsection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <ProjectsSection />
      <ContactForm />
    </>
  );
}
