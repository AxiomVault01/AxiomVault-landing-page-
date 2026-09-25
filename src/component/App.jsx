import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Capabilities from "./components/Capabilities";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTASection from "./components/CTASection";
import WaitlistForm from "./components/WaitlistForm";
import Footer from "./components/Footer";
import GoogleFormCTASection from "./components/GoogleFormCTASection";

function App() {
  return (
    <>
      <main className="relative">
        <Navbar />
        <Hero />
        <Stats />
        <Capabilities />
        <HowItWorks />
        <WhyChooseUs />
        <Industries />
        <Testimonials />
        <Pricing />
        <CTASection />
        {/* <WaitlistForm /> */}
        <GoogleFormCTASection />
        <Footer />
      </main>
    </>
  );
}

export default App;
