import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "../components/Helper/ProtectedRoute";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { SinglePost } from "../pages/SinglePost";
import { NotFound } from "../components/Helper/NotFound";
import { UserProfilePost } from "../pages/UserProfilePost";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/*" element={<Login />} />
      <Route
        path="/profile/*"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/singlepost/:id/:user_id" element={<SinglePost />} />
      <Route path="/userperfil/:id" element={<UserProfilePost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
