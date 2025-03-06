import { Outlet } from "react-router";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageWrapper from "./layout/PageWrapper";
/**
 *
 * @returns
 */
function App() {
  return (
    <div className="flex flex-col h-screen w-full lg:w-7xl mx-auto items-center relativ">
      <Header />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
      <Footer />
    </div>
  );
}

export default App;
