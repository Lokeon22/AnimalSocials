import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Button } from "../Button";

export function LoginForm() {
  return (
    <>
      <form className="flex flex-col gap-4">
        <h2 className="text-5xl font-medium mb-4">Login</h2>
        <Input type="text" place="Email ou Usuario" name="email" />
        <Input type="password" place="Senha" name="password" />
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
