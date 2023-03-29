import { Dispatch, SetStateAction } from "react";
import { api } from "../../services/api";

interface CardType {
  id: number;
  image: string;
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export function Card({ id, image, modal, setModal }: CardType) {
  function handleOpenModal() {
    setModal(!modal);
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
