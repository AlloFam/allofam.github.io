import Menu from "../elements/Menu";
import Logo from "../elements/Logo";

const Header = () => (
  <header className="flex justify-between items-center w-full p-5">
    <Logo />
    <Menu />
  </header>
);

export default Header;
