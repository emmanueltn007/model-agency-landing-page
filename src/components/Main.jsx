import ServicesAndWhyWorkWithUs from "./ServicesAndWhyWorkWithUs";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import CTA from "./CTA";

function Main () {
  return (
    <main className="text-white flex flex-col gap-16">
      <Hero />
      <ServicesAndWhyWorkWithUs />
      <Portfolio />
      <Testimonials />
      <CTA />
    </main>
  );
}

export default Main