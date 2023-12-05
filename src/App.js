import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return;
}

function App() {
  return (
    <ShoppingCartProvider>
      <ScrollToTop/>
      <Header />
        <Outlet />
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
