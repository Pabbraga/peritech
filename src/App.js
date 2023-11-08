import { Outlet } from "react-router-dom";

import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
        <Outlet />
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
