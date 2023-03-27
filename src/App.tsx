import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/app.routes";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
};
