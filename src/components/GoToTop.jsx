import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoToTop = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return null;
};

export default GoToTop;
