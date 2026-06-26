import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PropertiesPage from './pages/PropertiesPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';

function getRoute() {
  return window.location.hash.replace(/^#/, '');
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (route.startsWith('property/')) return <PropertyDetailPage />;
  if (route === 'contact') return <ContactPage />;
  if (route.startsWith('services/')) return <ServiceDetailPage />;
  if (route === 'services') return <ServicesPage />;
  if (route === 'offers') return <PropertiesPage />;
  if (route === 'about') return <AboutPage />;
  if (route === 'careers' || route === '/careers') return <CareersPage />;
  return <HomePage />;
}
