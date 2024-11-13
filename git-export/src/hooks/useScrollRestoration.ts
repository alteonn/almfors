import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    // Only scroll to top if it's a new navigation (not back/forward)
    if (window.history.state?.type !== 'back_forward') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
};