import { AiOutlineCamera } from "react-icons/ai";

interface UserProps {
  avatar: string | undefined;
  handleChangeAvatar: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function UserAvatar({ avatar, handleChangeAvatar }: UserProps) {
  return (
    <>
      <img className="w-40 h-40 rounded-full" src={avatar} />
      <label className="relative flex flex-col" htmlFor="avatar">
        <AiOutlineCamera className="absolute -left-14 top-8 w-10 h-10 bg-blue-700 rounded-full text-slate-200 cursor-pointer px-1 py-1" />
        <input
          className="hidden"
          type="file"
          id="avatar"
          onChange={handleChangeAvatar}
        />
      </label>
    </>
  );
}
