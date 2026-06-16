import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import FeaturesRow from '../sections/FeaturesRow';
import StatsCard from '../sections/StatsCard';
import LatestProperties from '../sections/LatestProperties';
import CompanyExpertise from '../sections/CompanyExpertise';
import Services from '../sections/Services';
import CtaBanner from '../sections/CtaBanner';

export default function HomePage() {
  return (
    <div dir="rtl" className="relative min-h-screen w-full overflow-x-hidden bg-cream font-cairo">
      <section id="home" className="relative">
        <Hero />
        <Navbar />
        <FeaturesRow />
      </section>

      <div className="relative px-5 pb-10 lg:-mt-12 lg:px-10">
        <StatsCard />
      </div>

      <section id="offers">
        <LatestProperties />
      </section>

      <section id="about">
        <CompanyExpertise />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <CtaBanner />
      </section>
    </div>
  );
}
