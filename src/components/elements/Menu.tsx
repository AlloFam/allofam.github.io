// import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "react";

// import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
// Store
// import { aboutUsMenu } from "@/store/aboutUsMenu";
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-teal"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute top-[60px] left-0 right-0 bg-white shadow-lg z-50 transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/about-us"
              className="text-teal font-bold hover:text-teal-s500"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/resources"
              className="text-teal font-bold hover:text-teal-s500"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <a
              href="#join"
              onClick={() => {
                setIsOpen(false);
              }}
              className="bg-teal text-white px-6 py-2 rounded-full font-bold hover:bg-teal-s500 transition-all"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="text-teal font-bold hover:text-teal-s500"
            >
              <Link to="/about-us">About Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="text-teal font-bold hover:text-teal-s500"
            >
              <Link to="/resources">Resources</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="bg-teal font-bold text-white px-8 rounded-full ml-5 hover:bg-teal-s500 hover:text-white transition-all hover:cursor-pointer"
            >
              <Link to="/#join">Join the Waitlist</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

// const ListItem = forwardRef<ElementRef<"a">, ComponentPropsWithoutRef<"a">>(
//   ({ className, title, children, ...props }, ref) => (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// );

export default Menu;
