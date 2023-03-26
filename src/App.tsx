import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/app.routes";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};
