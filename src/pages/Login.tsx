import { Routes, Route } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { LoginCreate } from "../components/LoginCreate";

import monkey_wallpaper from "../assets/icons/monkey_wallpaper.jpg";

export function Login() {
  return (
    <main className="w-full h-full min-h-screen mx-auto my-0 flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
      <img
        className="w-full h-full object-cover md:block order-last md:order-none"
        src={monkey_wallpaper}
        alt="monkey wallpaper"
      />
      <section className="w-full h-full flex flex-col justify-center md:px-0 md:py-0 px-2 py-2">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
        </Routes>
      </section>
    </main>
  );
}
