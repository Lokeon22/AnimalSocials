import { Dispatch, SetStateAction, useState } from "react";
import { api } from "../../services/api";

interface CardType {
  id: number;
  user_id: number;
  image: string;
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  mutate: (id: number) => void;
  getUsername: (user_id: number) => void;
}

export function Card({
  id,
  user_id,
  image,
  modal,
  setModal,
  mutate,
  getUsername,
}: CardType) {
  const [skeleton, setSkeleton] = useState(true);

  function handleOpenModal() {
    setModal(!modal);
    mutate(id);
    getUsername(user_id);
  }

  function handleSkeleton() {
    setSkeleton(false);
  }

  return (
    <div
      className="relative w-full h-full flex hover:cursor-pointer"
      onClick={handleOpenModal}
    >
      {skeleton && (
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-gray-300 bg-fixed opacity-80 animate-pulse"></div>
      )}
      <img
        className="w-full h-full md:max-h-[400px] object-cover"
        src={`${api.defaults.baseURL}/files/${image}`}
        onLoad={handleSkeleton}
        alt="animals"
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40"></div>
    </div>
  );
}
