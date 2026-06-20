import { useState, useEffect } from 'react';

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="main-nav" 
      className={`fixed top-0 w-full z-50 transition-all duration-300 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent border-b-2 border-transparent'
      }`}
    >
      <div className="font-headline-md text-headline-md text-on-primary tracking-tight">
        CALGARY PROJECTS INC.
      </div>
      <div className="hidden md:flex gap-6 items-center">
        <a className="text-on-primary hover:text-secondary-container transition-colors font-label-bold text-label-bold uppercase" href="#services">SERVICES</a>
        <a className="text-on-primary hover:text-secondary-container transition-colors font-label-bold text-label-bold uppercase" href="#work">WORK</a>
        <a className="text-on-primary hover:text-secondary-container transition-colors font-label-bold text-label-bold uppercase" href="#testimonials">REVIEWS</a>
        <a className="text-on-primary hover:text-secondary-container transition-colors font-label-bold text-label-bold uppercase" href="#contact">CONTACT</a>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <button className="bg-secondary-container text-on-secondary font-label-bold text-label-bold uppercase px-6 py-3 border-2 border-secondary-container hover:bg-transparent hover:text-secondary-container transition-all duration-200 scale-95 active:scale-90 flex items-center gap-2">
          GET A FREE QUOTE
        </button>
      </div>
    </nav>
  );
}
