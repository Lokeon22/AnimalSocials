import { AiOutlineUser, AiOutlineMail, AiFillLock } from "react-icons/ai";
import lion from "../../assets/images/lion.jpg";

import { UserAvatar } from "../UserAvatar";
import { InputIcon } from "../InputIcon";
import { Button } from "../Button";

export function UserProfile() {
  return (
    <section className="w-full h-full px-2 py-2">
      <h2 className="text-3xl font-medium mb-4 sm:mb-0">Perfil</h2>
      <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-4 mb-4">
        <UserAvatar avatar={lion} />
        <ul className="flex flex-col justify-center gap-2">
          <li>
            <span className="text-base font-semibold">Gabriel Felipe</span>
          </li>
          <li>
            <span className="text-sm font-medium text-gray-500">
              gabriel@gmail.com
            </span>
          </li>
        </ul>
      </div>
      <form className="flex flex-col items-center gap-4">
        <InputIcon
          name="username"
          place="Username"
          type="text"
          icon={
            <AiOutlineUser className="absolute top-[15px] left-2 w-5 h-5" />
          }
        />
        <InputIcon
          name="email"
          place="Email"
          type="email"
          icon={
            <AiOutlineMail className="absolute top-[15px] left-2 w-5 h-5" />
          }
        />
        <InputIcon
          name="old_password"
          place="Senha"
          type="password"
          icon={<AiFillLock className="absolute top-[15px] left-2 w-5 h-5" />}
        />
        <InputIcon
          name="password"
          place="Nova Senha"
          type="password"
          icon={<AiFillLock className="absolute top-[15px] left-2 w-5 h-5" />}
        />
        <Button text="Salvar" />
      </form>
    </section>
  );
}
