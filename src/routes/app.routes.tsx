import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { SinglePost } from "../pages/SinglePost";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/*" element={<Login />} />
      <Route path="/profile/*" element={<Profile />} />
      <Route path="/singlepost/:id/:user_id" element={<SinglePost />} />
    </Routes>
  );
}
