import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/app.routes";
import { UserProvider } from "./context/auth";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <Header />
            <AppRoutes />
            <Footer />
          </UserProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
};
