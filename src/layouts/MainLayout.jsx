import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <div>
        <header className="w-[97%] mx-auto py-3">
            <Navbar></Navbar>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
