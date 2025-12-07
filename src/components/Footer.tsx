import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center box-glow-red">
              <span className="text-primary-foreground font-bold">K</span>
            </div>
            <span className="font-semibold text-foreground">Keysha Desmayanti</span>
          </div>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Keysha
          </p>

          <p className="text-muted-foreground text-sm">
            © 2024 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
