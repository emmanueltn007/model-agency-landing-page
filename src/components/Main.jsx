import ServicesAndWhyWorkWithUs from "./ApproachAndServices";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";

function Main () {
  return (
    <main className="text-white">
      <Hero />
      <ServicesAndWhyWorkWithUs />
      <Portfolio />
      <Testimonials />
    </main>
  );
}

export default Main