import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <>
      <div>
        <header className="w-[97%] mx-auto py-3">
          <Navbar></Navbar>
        </header>
        <main className="min-h-[calc(100vh-295px)] md:mx-auto mb-10">
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
};

export default AuthLayout;
