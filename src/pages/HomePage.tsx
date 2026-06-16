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
      <div className="relative">
        <Hero />
        <Navbar />
        <FeaturesRow />
      </div>
      <div className="relative px-5 pb-10 md:-mt-12 md:px-10">
        <StatsCard />
      </div>
      <LatestProperties />
      <CompanyExpertise />
      <Services />
      <CtaBanner />
    </div>
  );
}
