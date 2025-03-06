import { useEffect } from "react";
import { useLocation } from "react-router";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { pathname, hash } = location;

  useEffect(() => {
    console.log(location);
    if (hash) {
      const [, anchor] = hash.split("#");
      const element = document.getElementById(anchor);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return <main className="w-full mt-[60px] lg:mt-[116px]">{children}</main>;
};

export default PageWrapper;
