import logoSVG from "../../assets/logo.svg";
import { Link } from "react-router";

const Logo = () => (
  <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    <img
      src={logoSVG}
      alt="Logo"
      className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] lg:p-2"
    />
  </Link>
);

export default Logo;
