export default function CallToAction() {
  return (
    <div className="bg-secondary-container text-on-secondary py-16 px-margin-mobile md:px-margin-desktop text-center border-t-4 border-primary-container border-b-4 border-primary-container" id="contact">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <h2 className="font-headline-display text-4xl md:text-[64px] leading-tight tracking-tight">READY TO GET STARTED?</h2>
        <p className="font-body-lg text-body-lg max-w-2xl">Let's build something great together. Contact us today for a free quote on your next project.</p>
        <button className="bg-primary-container text-on-primary font-label-bold text-label-bold uppercase px-8 py-4 mt-4 border-2 border-primary-container hover:bg-transparent hover:text-primary-container transition-all shadow-[6px_6px_0px_0px_#111111]">
          GET A FREE QUOTE
        </button>
      </div>
    </div>
  );
}
