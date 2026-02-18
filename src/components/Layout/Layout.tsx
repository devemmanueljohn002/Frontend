import { Outlet } from "react-router-dom";
import Header from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen px-6 py-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
