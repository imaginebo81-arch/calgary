export default function Footer() {
  return (
    <footer className="bg-primary-container block w-full pt-section-gap pb-8 px-margin-mobile md:px-margin-desktop text-on-primary">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-b-2 border-surface-tint pb-16">
          
          <div className="flex flex-col gap-6 max-w-sm">
            <img alt="Calgary Projects Inc Logo" className="w-48 h-auto object-contain" src="https://lh3.googleusercontent.com/aida/AP1WRLvUXByH43qWT9XxhXpB4fO8wZEcaXppmoC7LdF6VNRoqnR_RATLCh3EHCV2ljqd4WGz3eylUoye8dw14_VSq0kOECNgD_OAaglbYikInOfgLP9rbFr6VPNp9mFsaXqoI-JHc22zhL5tXNGpaikib-_be1_vUqxLku22g8cOB4aml28G8s-srR1NiL_mqwDpE2_AcDes8mrNQdFAeJYBdLUabrdLmb6vqXfB9SX4kLvYaKZ4EiGQJ_efIg" />
            <p className="font-body-md text-body-md text-inverse-primary border-l-2 border-secondary-container pl-4">
              Rugged reliability. Professional craftsmanship. Calgary's trusted crew for renovations and builds. Fully Licensed & Insured.
            </p>
            <div className="flex gap-4 mt-2">
              <a className="text-surface-tint hover:text-secondary-container transition-colors" href="#">
                <span className="material-symbols-outlined text-3xl">face_nod</span>
              </a>
              <a className="text-surface-tint hover:text-secondary-container transition-colors" href="#">
                <span className="material-symbols-outlined text-3xl">photo_camera</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 w-full lg:w-auto flex-grow">
            <div className="flex flex-col gap-4">
              <h4 className="font-label-bold text-label-bold uppercase text-secondary-container border-b border-surface-tint pb-2">SERVICES</h4>
              <a className="font-label-bold text-label-bold uppercase text-inverse-primary hover:text-secondary-container transition-colors" href="#">BASEMENTS</a>
              <a className="font-label-bold text-label-bold uppercase text-inverse-primary hover:text-secondary-container transition-colors" href="#">FLOORING</a>
              <a className="font-label-bold text-label-bold uppercase text-inverse-primary hover:text-secondary-container transition-colors" href="#">PAINTING</a>
              <a className="font-label-bold text-label-bold uppercase text-inverse-primary hover:text-secondary-container transition-colors" href="#">FRAMING</a>
              <a className="font-label-bold text-label-bold uppercase text-inverse-primary hover:text-secondary-container transition-colors" href="#">DECKING</a>
              <a className="font-label-bold text-label-bold uppercase text-inverse-primary hover:text-secondary-container transition-colors" href="#">HANDYMAN</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-label-bold text-label-bold uppercase text-secondary-container border-b border-surface-tint pb-2">SERVICE AREAS</h4>
              <a className="font-label-bold text-label-bold uppercase text-inverse-primary hover:text-secondary-container transition-colors" href="#">NW CALGARY</a>
              <a className="font-label-bold text-label-bold uppercase text-inverse-primary hover:text-secondary-container transition-colors" href="#">SW CALGARY</a>
              <a className="font-label-bold text-label-bold uppercase text-inverse-primary hover:text-secondary-container transition-colors" href="#">SE CALGARY</a>
              <a className="font-label-bold text-label-bold uppercase text-inverse-primary hover:text-secondary-container transition-colors" href="#">NE CALGARY</a>
              <a className="font-label-bold text-label-bold uppercase text-inverse-primary hover:text-secondary-container transition-colors" href="#">AIRDRIE</a>
            </div>

            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <h4 className="font-label-bold text-label-bold uppercase text-secondary-container border-b border-surface-tint pb-2">CONTACT</h4>
              <p className="font-label-bold text-label-bold uppercase text-inverse-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container">phone</span> (403) 555-0123
              </p>
              <p className="font-label-bold text-label-bold uppercase text-inverse-primary flex items-center gap-2 break-all">
                <span className="material-symbols-outlined text-secondary-container">mail</span> HI@CALGARYPROJECTS.CA
              </p>
              <p className="font-label-bold text-label-bold uppercase text-inverse-primary flex items-center gap-2 mt-2">
                <span className="material-symbols-outlined text-secondary-container">location_on</span> CALGARY, AB
              </p>
            </div>

            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <h4 className="font-label-bold text-label-bold uppercase text-secondary-container border-b border-surface-tint pb-2">BUSINESS HOURS</h4>
              <p className="font-label-bold text-label-bold uppercase text-inverse-primary">MON - FRI: 8AM - 6PM</p>
              <p className="font-label-bold text-label-bold uppercase text-inverse-primary">SATURDAY: 9AM - 4PM</p>
              <p className="font-label-bold text-label-bold uppercase text-inverse-primary">SUNDAY: CLOSED</p>
              <p className="font-label-sm text-label-sm text-surface-tint mt-4 uppercase">WCB Covered • Fully Insured</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <p className="font-label-bold text-label-bold uppercase text-surface-tint">
            © 2024 CALGARY PROJECTS INC. ALL RIGHTS RESERVED. LICENSED & INSURED.
          </p>
        </div>
      </div>
    </footer>
  );
}
