import { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import { api } from "../../services/api";

interface CardType {
  id: number;
  user_id: number;
  image: string;
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  getPostModal: (id: number) => void;
  getPostUserName: (id: number) => void;
}

export function Card({
  id,
  user_id,
  image,
  modal,
  setModal,
  getPostModal,
  getPostUserName,
}: CardType) {
  function handleOpenModal() {
    setModal(!modal);
    getPostModal(id);
    getPostUserName(user_id);
  }

  return (
    <div
      className="relative w-full h-full flex hover:cursor-pointer"
      onClick={handleOpenModal}
    >
      <img
        className="w-full h-full md:max-h-[400px] object-cover"
        src={`${api.defaults.baseURL}/files/${image}`}
        alt="animals"
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40"></div>
    </div>
  );
}
