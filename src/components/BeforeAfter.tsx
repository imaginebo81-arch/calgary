import { useState } from 'react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant" id="before-after">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary text-center mb-4 border-b-4 border-secondary-container pb-2 inline-block">
          DRAG. SEE THE DIFFERENCE.
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant text-center mb-12 max-w-2xl">
          Real transformations. From unfinished basements to functional living spaces, we handle it all with precision and care.
        </p>

        <div className="relative w-full max-w-5xl aspect-video overflow-hidden border border-outline rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.08)] group mb-6">
          {/* After Image (Background) */}
          <img 
            alt="After Renovation" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
            src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781933079/ChatGPT_Image_Jun_20_2026_10_51_21_AM_cys2o8.webp" 
          />
          <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary px-4 py-2 font-label-bold text-label-bold uppercase shadow-md pointer-events-none">
            AFTER
          </div>
          
          {/* Before Image (Foreground, clipped) */}
          <div 
            className="absolute inset-0 pointer-events-none border-r border-outline"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              alt="Before Renovation" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781933080/ChatGPT_Image_Jun_20_2026_10_51_18_AM_xvy6xd.webp" 
            />
            <div className="absolute top-4 left-4 bg-primary-container text-on-primary px-4 py-2 font-label-bold text-label-bold uppercase shadow-md pointer-events-none">
              BEFORE
            </div>
          </div>
          
          {/* Visual Slider Handle */}
          <div 
            className="absolute inset-y-0 bg-secondary-container flex items-center justify-center pointer-events-none z-10"
            style={{ 
                left: `${sliderPosition}%`, 
                width: '4px',
                transform: 'translateX(-50%)'
            }}
          >
            <div className="w-12 h-12 bg-secondary-container border-4 border-surface rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-on-secondary text-2xl">sync_alt</span>
            </div>
          </div>

          {/* Robust Range Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 appearance-none m-0 p-0"
          />
        </div>

        <div className="bg-surface p-6 border border-outline w-full max-w-5xl text-center shadow-sm">
          <h4 className="font-headline-md text-headline-md text-primary mb-2">Basement Development - SE Calgary</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">
            <strong>Scope:</strong> Complete build-out including framing, insulation, drywall, premium LVP flooring, and recessed lighting installation. <strong>Timeline:</strong> 4 Weeks.
          </p>
        </div>
      </div>
    </section>
  );
}
