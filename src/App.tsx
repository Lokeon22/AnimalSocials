import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/app.routes";
import { UserProvider } from "./context/auth";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Header />
          <AppRoutes />
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </>
  );
};
