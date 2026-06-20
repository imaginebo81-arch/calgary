export default function Testimonials() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary text-center mb-16 border-b-4 border-secondary-container pb-2 inline-block mx-auto flex justify-center w-max">
          WHAT OUR CLIENTS SAY
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface p-8 border border-outline shadow-md flex flex-col">
            <div className="flex text-secondary-container mb-4">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant italic mb-6 flex-grow">
              "Calgary Projects Inc transformed our unfinished basement into a beautiful living space. The crew was professional, cleaned up every day, and finished on time and on budget. Highly recommended!"
            </p>
            <div className="border-t border-outline-variant pt-4">
              <p className="font-label-bold text-label-bold text-primary">John M.</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">SW Calgary</p>
            </div>
          </div>

          <div className="bg-surface p-8 border border-outline shadow-md flex flex-col">
            <div className="flex text-secondary-container mb-4">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant italic mb-6 flex-grow">
              "I needed some framing and drywall done for a home office addition. They quoted fairly, showed up when they said they would, and the finish is flawless. Great local crew."
            </p>
            <div className="border-t border-outline-variant pt-4">
              <p className="font-label-bold text-label-bold text-primary">Sarah T.</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">NW Calgary</p>
            </div>
          </div>

          <div className="bg-surface p-8 border border-outline shadow-md flex flex-col">
            <div className="flex text-secondary-container mb-4">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant italic mb-6 flex-grow">
              "We hired them to replace our entire main floor with LVP and paint the whole house. The attention to detail was fantastic. Hardworking and reliable."
            </p>
            <div className="border-t border-outline-variant pt-4">
              <p className="font-label-bold text-label-bold text-primary">Mark & Lisa R.</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Airdrie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
