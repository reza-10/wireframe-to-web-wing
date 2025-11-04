import { ArrowUpRight, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto z-10">
      <div className="flex justify-between items-center h-12 px-6">
        <div className="flex gap-4">
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-black-light hover:text-primary transition-colors flex items-center gap-1"
          >
            Dribble <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/reza1010/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-black-light hover:text-primary transition-colors flex items-center gap-1"
          >
            LinkedIn <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <p className="text-xs text-black-light">
          © {new Date().getFullYear()}. All Rights Reserved to Reza.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
