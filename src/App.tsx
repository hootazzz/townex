import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import ContactPage from './pages/ContactPage';

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

  if (route.startsWith('property')) return <PropertyDetailPage />;
  if (route === 'contact') return <ContactPage />;
  return <HomePage />;
}
