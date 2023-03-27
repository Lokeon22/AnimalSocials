import { AiOutlineCamera } from "react-icons/ai";

interface UserProps {
  avatar: string;
}

export function UserAvatar({ avatar }: UserProps) {
  return (
    <>
      <img className="w-40 rounded-full" src={avatar} />
      <label className="relative flex flex-col" htmlFor="avatar">
        <AiOutlineCamera className="absolute -left-14 top-8 w-10 h-10 bg-blue-700 rounded-full text-slate-200 cursor-pointer px-1 py-1" />
        <input className="hidden" type="file" id="avatar" />
      </label>
    </>
  );
}
