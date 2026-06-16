import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import PropertyDetailPage from './pages/PropertyDetailPage';

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
  return <HomePage />;
}
