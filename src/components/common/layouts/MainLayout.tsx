import { Outlet } from "react-router-dom";

import Footer from "@/components/common/layouts/Footer";
import Header from "@/components/common/layouts/Header";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
