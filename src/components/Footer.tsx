import { Facebook, Linkedin, TwitterIcon, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#101828] text-slate-400 py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16 ">
          <div className="">
            <div className="mb-4">
              <img
                src="/logo.svg"
                loading="lazy"
                alt="axiomvault logo"
                className="w-70"
              />
            </div>
            <p className="text-sm max-w-xs text-center md:text-left">
              AI-powered fraud detection for government and financial
              institutions.
            </p>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-3 gap-12 md:gap-24">
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                Quick Links
              </h4>
              <a
                href="#"
                className="hover:text-white transition-colors text-sm"
              >
                Product
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors text-sm"
              >
                How It Works
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors text-sm"
              >
                pricing
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors text-sm"
              >
                Testimonial
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                Company
              </h4>
              <a
                href="#"
                className="hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors text-sm"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors text-sm"
              >
                Contact
              </a>
            </div>
            <div className=" flex flex-col gap-3">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                Legal
              </h4>
              <a
                href="#"
                className="hover:text-white transition-colors text-sm"
              >
                Features
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors text-sm"
              >
                Solutions
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors text-sm"
              >
                Pricing
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs">© 2026 AxiomVault. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest bg-[#1E2939] p-2 rounded-md"
            >
              {" "}
              <TwitterIcon size={18} />{" "}
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest bg-[#1E2939] p-2 rounded-md"
            >
              {" "}
              <Linkedin size={18} />{" "}
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest bg-[#1E2939] p-2 rounded-md"
            >
              {" "}
              <Facebook size={18} />{" "}
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest bg-[#1E2939] p-2 rounded-md"
            >
              {" "}
              <Instagram size={18} />{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

