import { useState, useEffect } from 'react';

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('');

  useEffect(() => {
    const updateBreakpoint = () => {
      if (window.matchMedia('(min-width: 1280px)').matches) {
        setBreakpoint('xl');
      } else if (window.matchMedia('(min-width: 1024px)').matches) {
        setBreakpoint('lg');
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        setBreakpoint('md');
      } else if (window.matchMedia('(min-width: 640px)').matches) {
        setBreakpoint('sm');
      } else {
        setBreakpoint('sm');
      }
    };

    // Llama a la función de actualización al cargar la página
    updateBreakpoint();

    // Suscribe la función de actualización al evento de redimensionamiento
    const mediaQueryList = window.matchMedia('(min-width: 1280px), (min-width: 1024px), (min-width: 768px), (min-width: 640px)');
    mediaQueryList.addListener(updateBreakpoint);

    // Retira el evento de redimensionamiento cuando el componente se desmonta
    return () => {
      mediaQueryList.removeListener(updateBreakpoint);
    };
  }, []);

  return breakpoint;
};

export default useBreakpoint;