import { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiFillLock } from "react-icons/ai";
import { useUser } from "../../context/auth";
import { api } from "../../services/api";

import userAvatarDefault from "../../assets/icons/avatardefault.png";

import { UserAvatar } from "../UserAvatar";
import { Title } from "../Title";
import { InputIcon } from "../InputIcon";
import { Button } from "../Button";

export function UserProfile() {
  const { user, handleUpdateProfile } = useUser();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [oldpassword, setOldpassword] = useState<string>("");
  const [newPassword, setNewpassword] = useState<string>("");

  const avatarURL = user?.user.avatar
    ? `${api.defaults.baseURL}/files/${user.user.avatar}`
    : userAvatarDefault;

  const [avatar, setAvatar] = useState<string>(avatarURL);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  function handleChangeAvatar(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const file = (target.files as FileList)[0];

    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  async function handleProfile() {
    await handleUpdateProfile(
      name,
      email,
      newPassword,
      oldpassword,
      avatarFile
    );
  }

  return (
    <section className="w-full h-full px-2 py-2">
      <Title text="Perfil" />
      <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-4 mb-4">
        <UserAvatar avatar={avatar} handleChangeAvatar={handleChangeAvatar} />
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
          handleProfile();
        }}
        className="flex flex-col items-center gap-4"
      >
        <InputIcon
          name="username"
          placeholder="Username"
          type="text"
          value={name}
          required
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
