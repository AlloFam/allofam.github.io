import { socialLinks } from "@/store/footerLinks";
// logos
import logoFooterE from "../assets/logo_footer_e.png";
import logoFooter from "../assets/logo_footer_l.png";
// Components
import { Link } from "react-router";

interface socialProps {
  alt: string;
  src: string;
  link: string;
}

const Footer = () => {
  return (
    <footer className="bg-b100 w-full px-5 lg:px-10 py-10 text-white">
      <div className="flex justify-between items-start flex-col lg:flex-row">
        <img
          src={logoFooter}
          alt="Allofam logo"
          className="w-[169px] hidden lg:block"
        />
        <section className="text-teal">
          <div className="flex gap-5 justify-center mb-10">
            {socialLinks.map(({ alt, src, link }: socialProps) => (
              <a href={link} target="_blank" rel="noreferrer">
                <img src={src} alt={alt} className="w-[32px]" />
              </a>
            ))}
          </div>
          <nav className="flex gap-2 flex-wrap items-center justify-center m-5">
            <Link to="our-services" className="col-span-1">
              Our Services
            </Link>
            <span>•</span>
            <Link to="resources" className="col-span-1">
              Resouces
            </Link>
            <span>•</span>
            <Link to="about-us" className="col-span-1">
              About Us
            </Link>
          </nav>
          <nav className="flex gap-2 flex-wrap items-center justify-center m-5">
            <Link to="our-services" className="col-span-1">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="our-services" className="col-span-1">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="our-services" className="col-span-1">
              Cooklie Policy
            </Link>
          </nav>
        </section>
        <img
          src={logoFooterE}
          alt="Allofam logo"
          className="w-[169px] hidden lg:block"
        />
      </div>
      <p className="text-center text-b500 mt-10">
        © {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
