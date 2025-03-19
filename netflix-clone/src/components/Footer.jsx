import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-400 mb-8">Questions? Contact us.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col space-y-3">
            <Link to="/faq" className="text-gray-400 hover:underline text-sm">FAQs</Link>
            <Link to="/investor-relations" className="text-gray-400 hover:underline text-sm">Investor Relations</Link>
            <Link to="/ways-to-watch" className="text-gray-400 hover:underline text-sm">Ways to Watch</Link>
            <Link to="/corporate-information" className="text-gray-400 hover:underline text-sm">Corporate Information</Link>
            <Link to="/netflix-originals" className="text-gray-400 hover:underline text-sm">Netflix Originals</Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-3">
            <Link to="/help" className="text-gray-400 hover:underline text-sm">Help Centre</Link>
            <Link to="/jobs" className="text-gray-400 hover:underline text-sm">Jobs</Link>
            <Link to="/terms" className="text-gray-400 hover:underline text-sm">Terms of Use</Link>
            <Link to="/contact" className="text-gray-400 hover:underline text-sm">Contact Us</Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-3">
            <Link to="/account" className="text-gray-400 hover:underline text-sm">Account</Link>
            <Link to="/redeem" className="text-gray-400 hover:underline text-sm">Redeem gift cards</Link>
            <Link to="/privacy" className="text-gray-400 hover:underline text-sm">Privacy</Link>
            <Link to="/speed-test" className="text-gray-400 hover:underline text-sm">Speed Test</Link>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col space-y-3">
            <Link to="/media-centre" className="text-gray-400 hover:underline text-sm">Media Centre</Link>
            <Link to="/gift-cards" className="text-gray-400 hover:underline text-sm">Buy gift cards</Link>
            <Link to="/cookie-preferences" className="text-gray-400 hover:underline text-sm">Cookie Preferences</Link>
            <Link to="/legal-notices" className="text-gray-400 hover:underline text-sm">Legal Notices</Link>
          </div>
        </div>

        <p className="text-gray-400 mt-8 text-sm">Netflix United Kingdom</p>
      </div>
    </footer>
  );
};

export default Footer;
