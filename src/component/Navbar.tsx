import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Shield } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Product', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 ${
        isScrolled ? 'top-6' : 'top-4'
      }`}
    >
      <div className={`mx-auto rounded-2xl border border-white/10 bg-white backdrop-blur-md px-6 py-3 flex items-center justify-between transition-all ${
        isScrolled ? 'drop-shadow-lg shadow-black/5' : ''
      }`}>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/Logo1.png" alt="company logo" className='w-50'/>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-brand hover:text-brand-red transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-brand cursor-pointer ">
            Sign Up
          </button>
          <a href="#waitlist" className="bg-[#102a43] hover:bg-blue-900 text-white text-sm cursor-pointer font-semibold px-5 py-2.5 rounded-xl transition-all border border-white/5 text-center">
            Join the Waitlist
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 bg-[#ffffff] border border-white/10 rounded-2xl p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-brand"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10" />
              <div className="flex flex-col gap-4">
                <button className="text-brand font-medium cursor-pointer">Sign Up</button>
                <a href='#waitlist'
                onClick={() => setIsMobileMenuOpen(false)}
                 className="bg-brand text-white font-semibold py-3 rounded-xl cursor-pointer text-center">
                  Join the Waitlist
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
