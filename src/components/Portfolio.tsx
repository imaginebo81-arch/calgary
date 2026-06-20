export default function Portfolio() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary border-b-4 border-secondary-container pb-2">
            OUR WORK SPEAKS FIRST.
          </h2>
          <div className="flex flex-wrap gap-2">
            <button className="bg-secondary-container text-on-secondary font-label-bold text-label-bold px-4 py-2 border-2 border-secondary-container uppercase hover:bg-secondary transition-colors">All</button>
            <button className="bg-surface text-primary font-label-bold text-label-bold px-4 py-2 border-2 border-outline uppercase hover:border-primary-container hover:text-primary-container transition-colors">Renovations</button>
            <button className="bg-surface text-primary font-label-bold text-label-bold px-4 py-2 border-2 border-outline uppercase hover:border-primary-container hover:text-primary-container transition-colors">Exteriors</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group overflow-hidden border border-outline rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.08)] aspect-[4/3]">
            <img alt="Project Overview" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/AP1WRLtpLY7-w4a2DYt93ccWMQs-iuNIwV4cvFi-WMu0JGfsVHYknyXf1MxyLVPjNX45B9MGV9HEY09Zic3pnEEum4O3SaZpqnXwHirdfvijJI0pl0AyZ5XQpnV9CfkZocMwFsPIR0HeyGQONBFH9bvNAH6s1xE8b9rB5jz8aFeMZqm2RecIQMgXdn3D_87gXxAv8fWJZtx-o5kp2oQ5O5Qd9zOI_MjLjM3St4W77mIPYM7DUOlsBAa6HSx8YQ" />
            <div className="absolute inset-0 bg-primary-container/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col p-6 text-center">
              <span className="bg-secondary-container text-on-secondary px-3 py-1 font-label-bold text-label-bold uppercase mb-2">PORTFOLIO OVERVIEW</span>
              <h3 className="font-headline-md text-headline-md text-on-primary mb-2">Craftsmanship in Every Detail</h3>
              <p className="font-body-md text-on-primary max-w-sm">From flooring and painting to structural framing, our team delivers consistent quality across all trades.</p>
            </div>
          </div>

          <div className="relative group overflow-hidden border border-outline rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.08)] aspect-[4/3]">
            <img alt="Modern home interior renovation" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/AP1WRLvtgakcqJ_M8c9ivxAuaKiNWqM_M9Pc6lX-Lr15DSl29Err1s5TtafmnGwm4_VXnVgg9ObLswvykLODd6JMM1UInmlsOgTz9Hy7m13HEncbHbgB8PfzW1DGPLAUXfVbxvIGyPHFNc15bg68MZREftZEgD2pXvIsgOpSY-wQah47o8Eo149rrRFnL0NL9mzxmcW06xSSBtupuXX6sBbsRKQ-whu5M9uBJbPyJzDUA2kUgkQ11XXJrxULsfM" />
            <div className="absolute inset-0 bg-primary-container/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col p-6 text-center">
              <span className="bg-secondary-container text-on-secondary px-3 py-1 font-label-bold text-label-bold uppercase mb-2">RENOVATION</span>
              <h3 className="font-headline-md text-headline-md text-on-primary mb-2">Main Floor Update – NW Calgary</h3>
              <p className="font-body-md text-on-primary max-w-sm">3 Weeks | High-end hardwood installation, drywall finishing, and trim modernization.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
