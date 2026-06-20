/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import TopNav from './components/TopNav';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ServiceAreas from './components/ServiceAreas';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden pb-20 md:pb-0">
      <TopNav />
      <Hero />
      <TrustStrip />
      <Services />
      <BeforeAfter />
      <Portfolio />
      <Testimonials />
      <ServiceAreas />
      <CallToAction />
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
