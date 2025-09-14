import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname, children]);

  return (
    <div 
      className={`
        transition-all duration-300 ease-out
        ${isTransitioning 
          ? 'opacity-0 transform scale-95 translate-y-4' 
          : 'opacity-100 transform scale-100 translate-y-0 slide-up'
        }
      `}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;