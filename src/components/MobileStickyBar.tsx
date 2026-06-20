export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-primary-container border-t-2 border-secondary-container shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex justify-between items-center px-4 py-3 gap-2">
      <a className="flex-1 bg-surface-variant text-on-surface font-label-bold text-[11px] uppercase py-3 rounded-sm flex flex-col items-center justify-center gap-1 hover:bg-surface-dim transition-colors" href="tel:4035550123">
        <span className="material-symbols-outlined text-lg leading-none">phone</span>
        CALL NOW
      </a>
      <a className="flex-1 bg-[#25D366] text-white font-label-bold text-[11px] uppercase py-3 rounded-sm flex flex-col items-center justify-center gap-1 hover:bg-[#128C7E] transition-colors" href="#">
        <span className="material-symbols-outlined text-lg leading-none">chat</span>
        WHATSAPP
      </a>
      <a className="flex-[1.5] bg-secondary-container text-on-secondary font-label-bold text-[12px] uppercase py-3 rounded-sm flex flex-col items-center justify-center gap-1 shadow-md hover:bg-secondary transition-colors border border-secondary-container" href="#contact">
        <span className="material-symbols-outlined text-lg leading-none">edit_document</span>
        GET QUOTE
      </a>
    </div>
  );
}
