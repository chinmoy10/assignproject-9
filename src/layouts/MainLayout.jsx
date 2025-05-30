import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <div>
        <header className="w-[97%] mx-auto py-3">
            <Navbar></Navbar>
        </header>
        <main className="min-h-[calc(100vh-295px)] md:mx-auto">
          <Outlet></Outlet>
        </main>
        <footer className="mt-14">
            <Footer></Footer>
        </footer>
      </div>
    </>
  );
};

export default MainLayout;
