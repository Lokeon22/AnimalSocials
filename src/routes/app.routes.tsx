import { Routes, Route } from "react-router-dom";
import { useUser } from "../context/auth";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { SinglePost } from "../pages/SinglePost";
import { NotFound } from "../components/Helper/NotFound";
import { UserProfilePost } from "../pages/UserProfilePost";

export function AppRoutes() {
  const { user } = useUser();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/*" element={<Login />} />
      {user && <Route path="/profile/*" element={<Profile />} />}
      <Route path="/singlepost/:id/:user_id" element={<SinglePost />} />
      <Route path="/userperfil/:id" element={<UserProfilePost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
