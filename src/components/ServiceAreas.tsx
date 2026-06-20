export default function ServiceAreas() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        <div className="w-full md:w-1/2">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary border-b-4 border-secondary-container pb-2 mb-8 inline-block">
            AREAS WE SERVE
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            We are proudly based in Calgary and serve homeowners and businesses across the entire metropolitan area and surrounding communities.
          </p>
          <ul className="grid grid-cols-2 gap-4 font-label-bold text-label-bold text-primary">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary-container">check_circle</span> NW Calgary</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary-container">check_circle</span> SW Calgary</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary-container">check_circle</span> SE Calgary</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary-container">check_circle</span> NE Calgary</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary-container">check_circle</span> Airdrie</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary-container">check_circle</span> Okotoks</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary-container">check_circle</span> Cochrane</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary-container">check_circle</span> Chestermere</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary border-b-4 border-secondary-container pb-2 mb-8 inline-block">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="flex flex-col gap-6">
            <div className="border-l-4 border-secondary-container pl-4">
              <h4 className="font-label-bold text-label-bold text-primary mb-2">Are you fully licensed and insured?</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Yes, Calgary Projects Inc carries comprehensive liability insurance and all necessary local licensing for residential and commercial work.</p>
            </div>
            <div className="border-l-4 border-secondary-container pl-4">
              <h4 className="font-label-bold text-label-bold text-primary mb-2">Do you provide free estimates?</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Absolutely. We provide transparent, detailed, and no-obligation quotes before any work begins.</p>
            </div>
            <div className="border-l-4 border-secondary-container pl-4">
              <h4 className="font-label-bold text-label-bold text-primary mb-2">How long do projects typically take?</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Timelines vary by scope. Small handyman tasks take a day, while full basement developments can take 3-6 weeks. We guarantee clear communication throughout.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
