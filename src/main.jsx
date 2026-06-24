import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./context/DataContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "react-scroll-to-top";
import { ChevronUp } from "lucide-react";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <DataProvider>
      <CartProvider>
        <App />

        <ScrollToTop
          smooth
          component={<ChevronUp size={28} strokeWidth={3} color="white" />}
          style={{
            backgroundColor: "#facc15",
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            bottom: "30px",
            right: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          }}
        />

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </CartProvider>
    </DataProvider>
  </ThemeProvider>,
);
