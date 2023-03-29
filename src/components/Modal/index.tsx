import React, { Dispatch, SetStateAction } from "react";
import { api } from "../../services/api";
import { PostsProps } from "../../models/@types";

interface ModalType {
  onePost: PostsProps[];
  setModal: Dispatch<SetStateAction<boolean>>;
}

export function Modal({ onePost, setModal }: ModalType) {
  function handleOutsideClick(event: React.MouseEvent<HTMLElement>) {
    if (event.target === event.currentTarget) {
      return setModal(false);
    }
  }

  return (
    <>
      {onePost.length > 0 &&
        onePost.map((post) => {
          return (
            <div
              key={post.id}
              className="fixed w-screen h-screen top-0 left-0 z-50 bg-gray-500 bg-opacity-50 sm:py-8 sm:px-16 px-8 py-8 flex"
              onClick={handleOutsideClick}
            >
              <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] lg:grid-cols-5 mx-auto my-auto max-h-screen h-auto overflow-y-auto lg:h-[600px] rounded-lg overflow-hidden">
                <img
                  src={`${api.defaults.baseURL}/files/${post.image}`}
                  className="w-full h-full object-cover lg:col-span-3 row-[1/4]"
                />
                <div className="flex flex-col bg-white px-5 py-5 lg:col-span-2 row-span-4">
                  <span className="text-lg text-gray-400 mb-2">@lion</span>
                  <h2 className="text-4xl font-medium mb-4">{post.title}</h2>
                  <p className="text-base">{post.description}</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
