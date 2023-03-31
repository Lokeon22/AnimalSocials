import { useState } from "react";

import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Button } from "../Button";
import { useUser } from "../../context/auth";

export function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { handleLogin } = useUser();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(email, password);
        }}
        className="flex flex-col gap-4"
      >
        <h2 className="text-5xl font-medium mb-4">Login</h2>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Entrar" />
      </form>
      <div className="w-max sm:w-full flex flex-col mt-10">
        <h2 className="max-w-[180px] px-2 py-1 text-3xl text-gray-800 font-medium mb-4 -skew-y-3 bg-blue-200 -inset-1 block">
          Cadastre-se
        </h2>
        <span className="md:text-base text-sm mb-2">
          Ainda não possui uma conta? Cadastre-se no site.
        </span>
        <Link
          className="bg-blue-500 w-24 py-2 text-slate-200 text-center rounded-md hover:bg-blue-600 hover:text-white ease-in duration-200"
          to="/login/create"
        >
          Criar
        </Link>
      </div>
    </>
  );
}
