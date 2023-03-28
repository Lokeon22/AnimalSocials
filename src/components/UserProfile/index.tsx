import { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiFillLock } from "react-icons/ai";
import { useUser } from "../../context/auth";
import { api } from "../../services/api";
import lion from "../../assets/images/lion.jpg";

import { UserAvatar } from "../UserAvatar";
import { InputIcon } from "../InputIcon";
import { Button } from "../Button";

export function UserProfile() {
  const { user } = useUser();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [oldpassword, setOldpassword] = useState<string | undefined>(
    user?.user.password
  );
  const [newPassword, setNewpassword] = useState<string>("");

  return (
    <section className="w-full h-full px-2 py-2">
      <h2 className="text-3xl font-medium mb-4 sm:mb-0">Perfil</h2>
      <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-4 mb-4">
        <UserAvatar avatar={lion} />
        <ul className="flex flex-col justify-center gap-2">
          <li>
            <span className="text-base font-semibold">{user?.user.name}</span>
          </li>
          <li>
            <span className="text-sm font-medium text-gray-500">
              {user?.user.email}
            </span>
          </li>
        </ul>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col items-center gap-4"
      >
        <InputIcon
          name="username"
          placeholder="Username"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={
            <AiOutlineUser className="absolute top-[15px] left-2 w-5 h-5" />
          }
        />
        <InputIcon
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          icon={
            <AiOutlineMail className="absolute top-[15px] left-2 w-5 h-5" />
          }
        />
        <InputIcon
          name="old_password"
          placeholder="Senha"
          type="password"
          required
          onChange={(e) => setOldpassword(e.target.value)}
          icon={<AiFillLock className="absolute top-[15px] left-2 w-5 h-5" />}
        />
        <InputIcon
          name="password"
          placeholder="Nova Senha"
          type="password"
          required
          onChange={(e) => setNewpassword(e.target.value)}
          icon={<AiFillLock className="absolute top-[15px] left-2 w-5 h-5" />}
        />
        <Button text="Salvar" />
      </form>
    </section>
  );
}