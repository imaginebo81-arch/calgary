export default function TrustStrip() {
  return (
    <div className="bg-primary-container text-on-primary py-6 border-t-2 border-secondary-container border-b-2 border-primary-container">
      <div className="px-margin-mobile md:px-margin-desktop flex flex-wrap justify-center gap-6 md:gap-12 font-body-lg text-body-lg font-bold uppercase tracking-wider text-center">
        <span>100+ Projects Completed</span>
        <span className="hidden md:inline text-secondary-container">·</span>
        <span>Fully Insured</span>
        <span className="hidden md:inline text-secondary-container">·</span>
        <span>Free Estimates</span>
        <span className="hidden md:inline text-secondary-container">·</span>
        <span className="text-secondary-fixed flex items-center gap-1 justify-center">
          <span className="material-symbols-outlined text-secondary-fixed text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="material-symbols-outlined text-secondary-fixed text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="material-symbols-outlined text-secondary-fixed text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="material-symbols-outlined text-secondary-fixed text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="material-symbols-outlined text-secondary-fixed text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          Google Rating
        </span>
      </div>
    </div>
  );
}
