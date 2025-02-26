import { Outlet } from "react-router";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

/**
 *
 * @returns
 */
function App() {
  return (
    <div className="flex flex-col h-screen w-full lg:w-7xl mx-auto items-center relativ">
      <Header />
      <main className="w-full mt-30">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
