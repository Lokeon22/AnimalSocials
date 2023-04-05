import React, { Dispatch, SetStateAction, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useUser } from "../../context/auth";

import { IoMdReturnRight } from "react-icons/io";

import { PostsProps } from "../../models/@types";
import { UserPostName } from "../UserPostName";
import { ButtonDeletePost } from "../ButtonDeletePost";
import { UserComments } from "../UserComments";
import { CommentForm } from "../CommentForm";

interface ModalType {
  username: string;
  onePost: PostsProps[];
  setModal: Dispatch<SetStateAction<boolean>>;
  setOnepost: React.Dispatch<React.SetStateAction<PostsProps[]>>;
}

export function Modal({ onePost, setModal, username, setOnepost }: ModalType) {
  const [comment, setComment] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { user } = useUser();

  function handleOutsideClick(event: React.MouseEvent<HTMLElement>) {
    if (event.target === event.currentTarget) {
      return setModal(false);
    }
  }

  return (
    <>
      {onePost &&
        onePost.map((post) => {
          return (
            <div
              key={post.id}
              className="fixed w-screen h-screen top-0 left-0 z-50 bg-gray-500 bg-opacity-50 sm:py-8 sm:px-16 px-8 py-8 flex"
              onClick={handleOutsideClick}
            >
              <div className="w-full md:w-3/5 grid grid-cols-1 grid-rows-[auto_1fr_auto] lg:grid-cols-2 mx-auto my-auto max-h-full h-auto overflow-y-auto lg:h-[600px] rounded-lg overflow-hidden">
                <img
                  src={`${api.defaults.baseURL}/files/${post.image}`}
                  className="w-full h-full object-cover lg:col-span-1 row-[1/4]"
                />
                <div className="flex flex-col bg-white px-5 py-5 lg:col-span-1 row-span-4">
                  <div className="flex justify-between items-center gap-4">
                    {user?.user.id !== post.user_id ? (
                      <UserPostName username={username} id={post.user_id} />
                    ) : (
                      <ButtonDeletePost postID={post.id} setModal={setModal} />
                    )}
                    <Link to={`/singlepost/${post.id}/${post.user_id}`}>
                      <IoMdReturnRight className="w-6 h-6" />
                    </Link>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-semibold mb-1 sm:mb-4">
                    {post.title}
                  </h2>
                  <p className="text-bold text-base">{post.description}</p>

                  <div className="flex flex-col w-full h-36 md:h-96 gap-4 my-5 overflow-y-auto scrollbar-hide sm:scrollbar-default scroll-smooth scrollbar-thin scrollbar-thumb-[#5f6177] scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    {post.comments.map((userComment) => {
                      return (
                        <UserComments
                          key={userComment.id}
                          comment={userComment.comment}
                          user_id={userComment.user_id}
                        />
                      );
                    })}
                  </div>
                  <div>
                    <CommentForm
                      comment={comment}
                      textareaRef={textareaRef}
                      user_id={user?.user.id}
                      id={post.id}
                      setComment={setComment}
                      setOnepost={setOnepost}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
