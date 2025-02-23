//  Icons
import { Instagram, Linkedin } from "lucide-react";
// logos
import logoFooterE from "../assets/logo_footer_e.png";
import logoFooter from "../assets/logo_footer_l.png";

const Footer = () => {
  return (
    <footer className="bg-gray w-full p-5 text-white flex justify-between items-center">
      <img src={logoFooter} alt="Allofam logo" className="w-20" />
      <div className="flex gap-5">
        <Instagram className="w-10 h-10" />
        <Linkedin className="w-10 h-10" />
      </div>
      <img src={logoFooterE} alt="Allofam logo" className="w-20" />
    </footer>
  );
};

export default Footer;
