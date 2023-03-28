import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../Input";
import { Button } from "../Button";
import backarrow from "../../assets/icons/back-arrow.svg";

export function LoginCreate() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    api
      .post("/register", { name, email, password })
      .then((res) => {
        alert(res.data.message);
        navigate("/login");
      })
      .catch((error) => {
        if (error.response.status === 500) {
          return alert("Email já existe");
        }
      });
  }

  return (
    <>
      <form className="w-max flex flex-col gap-4" onSubmit={handleCreate}>
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
        <Input
          type="text"
          placeholder="Usuario"
          name="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Cadastrar" />
      </form>
    </>
  );
}
