import Menu from "../components/elements/Menu";
import Logo from "../components/elements/Logo";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white flex justify-between items-center p-5">
    <div className="flex justify-between items-center w-7xl mx-auto lg:py-5 relative">
      <Logo />
      <Menu />
    </div>
  </header>
);

export default Header;
