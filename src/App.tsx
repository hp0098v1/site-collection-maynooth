import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Home from "@/pages/Home";
import Product from "@/pages/Product";
import Category from "@/pages/Category";
import MainLayout from "@/components/common/layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "category/:category", element: <Category /> },
      { path: "product/:productId", element: <Product /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
