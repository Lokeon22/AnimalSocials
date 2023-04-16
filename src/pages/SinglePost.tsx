import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { useUser } from "../context/auth";
import { useQuery } from "@tanstack/react-query";

import { AdminDelete } from "../components/ButtonDeletePost/adminDelete";

import { PostsProps, UserDetails } from "../models/@types";
import { UserComments } from "../components/UserComments";
import { CommentForm } from "../components/CommentForm";
import { UserPostName } from "../components/UserPostName";
import { ButtonDeletePost } from "../components/ButtonDeletePost";
import { Loading } from "../components/Loading";

export function SinglePost() {
  const { user } = useUser();
  const [singlepost, setSinglepost] = useState<PostsProps[]>([]);
  const [comment, setComment] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { id, user_id } = useParams(); //id = post_id

  async function getSinglePost() {
    await api
      .get<PostsProps[]>(`/post/modal/${id}`)
      .then((res) => setSinglepost(res.data));
    return singlepost;
  }

  useQuery(["getSinglePost"], getSinglePost);

  async function getUsername() {
    const response = await api.get<UserDetails>(`/show/${user_id}`);
    return response.data.name;
  }

  const { data: username } = useQuery(["getUsername"], getUsername);

  return (
    <>
      <section className="w-full min-h-screen h-full flex-grow px-2 py-2">
        {singlepost.length === 0 && <Loading />}
        {singlepost &&
          singlepost.map((post) => {
            return (
              <div
                key={post.id}
                className="max-w-[1000px] h-min mx-auto my-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 animate-changeOpDire"
              >
                <img
                  className="w-full h-full md:w-full md:h-[700px] object-cover rounded-md"
                  src={`${api.defaults.baseURL}/files/${post.image}`}
                />
                <section className="w-full h-full grid py-1 sm:py-4">
                  <div className="flex flex-col gap-2 row-span-1">
                    {user?.user.id !== post.user_id ? (
                      <UserPostName username={username} id={post.user_id} />
                    ) : (
                      <div>
                        <ButtonDeletePost postID={post.id} />
                      </div>
                    )}
                    {!!user?.user.is_admin && <AdminDelete post_id={id} />}
                    <h2 className="text-3xl sm:text-4xl font-bold mb-1">
                      {post.title}
                    </h2>
                    <p className="text-lg text-gray-700 mb-1">
                      {post.description}
                    </p>
                  </div>
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
                  <CommentForm
                    id={id}
                    user_id={user_id}
                    comment={comment}
                    textareaRef={textareaRef}
                    setComment={setComment}
                    setOnepost={setSinglepost}
                  />
                </section>
              </div>
            );
          })}
      </section>
    </>
  );
}
