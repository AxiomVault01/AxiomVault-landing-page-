import { Facebook, Linkedin, TwitterIcon, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-slate-400 py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="flex flex-col items-center md:items-start gap-4">
             <div className="">
              <img src="/Logo1.png" alt="axiomvault logo" className='w-70'/>
            </div>
            <p className="text-sm max-w-xs text-center md:text-left">
              Advanced AI-powered fraud detection for the modern financial landscape.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Company</h4>
              <a href="#" className="hover:text-white transition-colors text-sm">About Us</a>
              <a href="#" className="hover:text-white transition-colors text-sm">Careers</a>
              <a href="#" className="hover:text-white transition-colors text-sm">Contact</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Legal</h4>
              <a href="#" className="hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
            <div className="hidden lg:flex flex-col gap-4">
               <h4 className="text-white font-bold text-sm uppercase tracking-widest">Product</h4>
              <a href="#" className="hover:text-white transition-colors text-sm">Features</a>
              <a href="#" className="hover:text-white transition-colors text-sm">Solutions</a>
              <a href="#" className="hover:text-white transition-colors text-sm">Pricing</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs">
            © 2026 AxiomVault. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest"> <TwitterIcon size={18}/> </a>
            <a href="#" className="hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest"> <Linkedin size={18}/> </a>
            <a href="#" className="hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest"> <Facebook size={18}/> </a>
            <a href="#" className="hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest"> <Instagram size={18}/> </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

