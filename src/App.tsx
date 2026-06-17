import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import PropertiesPage from './pages/PropertiesPage';
import AboutPage from './pages/AboutPage';

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
  if (route === 'services') return <ServicesPage />;
  if (route === 'offers') return <PropertiesPage />;
  if (route === 'about') return <AboutPage />;
  return <HomePage />;
}
