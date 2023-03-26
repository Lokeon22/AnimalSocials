import { Dispatch, SetStateAction } from "react";
import lion from "../../assets/images/lion.jpg";

interface ModalType {
  setModal: Dispatch<SetStateAction<boolean>>;
}

export function Modal({ setModal }: ModalType) {
  function handleOutsideClick(event: any) {
    if (event.target === event.currentTarget) {
      return setModal(false);
    }
  }

  return (
    <div
      className="fixed w-screen h-screen top-0 left-0 z-50 bg-gray-500 bg-opacity-50 sm:py-8 sm:px-16 px-8 py-8 flex"
      onClick={handleOutsideClick}
    >
      <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] lg:grid-cols-5 mx-auto my-auto max-h-screen h-auto overflow-y-auto lg:h-[600px] rounded-lg overflow-hidden">
        <img
          src={lion}
          className="w-full h-full object-cover lg:col-span-3 row-[1/4]"
        />
        <div className="flex flex-col bg-white px-5 py-5 lg:col-span-2 row-span-4">
          <span className="text-lg text-gray-400 mb-2">@lion</span>
          <h2 className="text-4xl font-medium mb-4">Leao King</h2>
          <p className="text-base">Apenas uma foto sobre o leao</p>
        </div>
      </div>
    </div>
  );
}
