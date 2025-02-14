import { Outlet } from "react-router";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="flex flex-col h-screen w-7xl mx-auto items-center">
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
