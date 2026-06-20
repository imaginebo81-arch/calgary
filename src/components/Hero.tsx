export default function Hero() {
  return (
    <header className="relative min-h-[90vh] w-full flex flex-col justify-end">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida/AP1WRLvLRANxlWKi75TYU2lC8s1rW2CFeeU1GKNWaUONzHTxesCLj049_j9TQp_iRrroKWNq923_w1GSrzcYK6UBtlUjF7Kmb-pgYo0h81bNcqPTOkmq372AQb8XaAKLYX7KG3ZrybCkt7Ap8LhijFn_uan2apY1GGWQJ_8kuuKP1mSl8S-Hl8WBIOv43n9PntpJ6dDk01XDaXxyuulRoEgMWgfxn2gNYQzdxgGugV1TQLn0slychApO2--K0WQ')" }}></div>
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="relative z-10 px-margin-mobile md:px-margin-desktop pb-16 w-full max-w-7xl mx-auto flex flex-col gap-6">
        <p className="font-label-bold text-label-bold text-secondary-container uppercase tracking-widest border-l-4 border-secondary-container pl-4 drop-shadow-md">
          Calgary's Trusted Renovation & Handyman Team
        </p>
        <h1 className="font-headline-display text-[64px] leading-[64px] md:text-headline-display text-on-primary tracking-tight max-w-4xl drop-shadow-lg">
          BUILT RIGHT. <br/>CALGARY PROUD.
        </h1>
        <p className="font-body-lg text-body-lg text-inverse-primary max-w-2xl border-l-2 border-primary-fixed pl-4 drop-shadow-md">
          Flooring, painting, framing, drywall and full handyman work — done clean, done on time, across Calgary.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a className="bg-primary-container text-on-primary border-2 border-primary-container px-8 py-4 font-label-bold text-label-bold uppercase flex items-center justify-center gap-2 hover:bg-tertiary-container transition-colors shadow-lg" href="#services">
            Our Services <span className="material-symbols-outlined">arrow_downward</span>
          </a>
          <a className="bg-secondary-container text-on-secondary font-label-bold text-label-bold px-8 py-4 uppercase border-2 border-secondary-container flex items-center justify-center gap-2 hover:bg-secondary transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.08)]" href="#contact">
            Get Free Estimate
          </a>
        </div>
      </div>
    </header>
  );
}
