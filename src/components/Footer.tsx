import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#F37100] flex items-center justify-center shadow-[0_0_10px_rgba(243,113,0,0.3)]">
              <span className="text-white font-display text-sm tracking-wider">K</span>
            </div>
            <span className="font-display text-lg tracking-wider heading-cream">KEYSHA DESMAYANTI</span>
          </div>

          <p className="text-cream-dim text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-[#F37100] fill-[#F37100]" /> by Keysha
          </p>

          <p className="text-cream-dim text-sm">
            © 2024 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
