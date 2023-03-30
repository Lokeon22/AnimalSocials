import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useUser } from "../../context/auth";

import { PostsProps } from "../../models/@types";
import { UserPostName } from "../UserPostName";
import { ButtonDeletePost } from "../ButtonDeletePost";
import { IoMdReturnRight } from "react-icons/io";

interface ModalType {
  username: string;
  onePost: PostsProps[];
  setModal: Dispatch<SetStateAction<boolean>>;
}

export function Modal({ onePost, setModal, username }: ModalType) {
  const { user } = useUser();

  function handleOutsideClick(event: React.MouseEvent<HTMLElement>) {
    if (event.target === event.currentTarget) {
      return setModal(false);
    }
  }

  async function userDeletePost(postID: number) {
    const confirmar = confirm("Deletar post?");

    if (confirmar) {
      await api
        .delete(`/remove/${postID}`)
        .then((res) => console.log(res.data.message))
        .catch((error: any) => alert(error.status.message));
      window.location.reload();
    } else {
      return;
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
                  <div className="flex justify-between items-center gap-4">
                    {user?.user.id !== post.user_id && (
                      <UserPostName username={username} />
                    )}
                    {user?.user.id === post.user_id && (
                      <ButtonDeletePost
                        postID={post.id}
                        userDeletePost={userDeletePost}
                      />
                    )}
                    <Link to={`/singlepost/${post.id}/${post.user_id}`}>
                      <IoMdReturnRight className="w-6 h-6" />
                    </Link>
                  </div>
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
