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
import useScrollTo from "@/hooks/useScrollTo";
// import { Link } from "react-router";
// Store
// import { aboutUsMenu } from "@/store/aboutUsMenu";

const Menu = () => {
  const scrollTo = useScrollTo();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* <NavigationMenuItem>
        <NavigationMenuTrigger className="text-teal font-bold">
          About Us
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <div className="mb-2 mt-4 text-lg font-medium">AlloFam</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Allofam makes it simple to source the best healthcare
                    provider for your young child.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <ListItem href="/our-mission" title="Our Mission">
              Learn more about AlloFam, what we believe and who we serve.
            </ListItem>
            <ListItem href="/latest-posts" title="Latest Posts">
              Stay up-to-date with our latest news and blog posts.
            </ListItem>
            <ListItem href="/faq" title="FAQ">
              Frequently asked questions about AlloFam.
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-teal font-bold">
          Services
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {aboutUsMenu.map(({ title, href, description }) => (
              <ListItem key={`${title}-about-menu`} title={title} href={href}>
                {description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/docs">
          <NavigationMenuLink className="bg-teal font-bold text-white px-8 rounded-full ml-5">
            Sign Up
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/docs">
          <NavigationMenuLink className="text-teal font-bold px-8 rounded-full border-teal border-2 ml-5 hover:bg-teal hover:text-white">
            Log In
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="bg-teal font-bold text-white px-8 rounded-full ml-5 hover:bg-teal-s500 hover:text-white transition-all hover:cursor-pointer"
          >
            <a onClick={() => scrollTo("join")}>Join the Waitlist</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
