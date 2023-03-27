import { Link } from "react-router-dom";

import { Input } from "../Input";
import { Button } from "../Button";
import backarrow from "../../assets/icons/back-arrow.svg";

export function LoginCreate() {
  return (
    <>
      <form className="w-max flex flex-col gap-4">
        <span>
          <Link
            className="hover:text-blue-800 hover:ease-in hover:duration-200"
            to="/login"
          >
            <img
              className="max-w-[30px] max-h-8 inline-block"
              src={backarrow}
              alt="voltar"
            />
          </Link>
        </span>
        <h2 className="text-5xl font-medium mb-4">Cadastre-se</h2>
        <Input type="text" place="Usuario" name="username" />
        <Input type="text" place="Email" name="email" />
        <Input type="password" place="Senha" name="password" />
        <Button text="Cadastrar" />
      </form>
    </>
  );
}
