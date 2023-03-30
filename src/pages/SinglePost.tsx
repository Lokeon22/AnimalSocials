import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

import { PostsProps } from "../models/@types";
import { ButtonComment } from "../components/ButtonComment";
import { UserComments } from "../components/UserComments";

export function SinglePost() {
  const [singlepost, setSinglepost] = useState<PostsProps[]>([]);
  const [username, setUsername] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [refreshKey, setRefreshKey] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { id, user_id } = useParams(); //id = post_id

  useEffect(() => {
    api.get(`/post/modal/${id}`).then((res) => setSinglepost(res.data));

    api.get(`/show/${user_id}`).then((res) => setUsername(res.data.name));
  }, [refreshKey]);

  function handleCreateComment() {
    api
      .post(`/comment/${id}`, { comment, post_id: id, user_id })
      .then((res) => setRefreshKey(res.data));
    if (textareaRef.current) {
      textareaRef.current.value = "";
    }
  }

  return (
    <>
      {singlepost.length > 0 &&
        singlepost.map((post) => {
          return (
            <section
              key={post.id}
              className="w-full min-h-screen h-full flex-grow px-2 py-2"
            >
              <div className="max-w-[1000px] h-min mx-auto my-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                <img
                  className="w-full h-full md:w-full md:h-[700px] object-cover rounded-md"
                  src={`${api.defaults.baseURL}/files/${post.image}`}
                />
                <section className="w-full h-full grid py-1 sm:py-4">
                  <div className="flex flex-col gap-2 row-span-1">
                    <span className="text-lg">@{username}</span>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-1">
                      {post.title}
                    </h2>
                    <p className="text-lg text-gray-700 mb-1">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex flex-col w-full h-36 md:h-96 gap-4 overflow-y-auto my-5">
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
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleCreateComment();
                    }}
                    className="flex mb-1 self-end items-center gap-2 row-span-1"
                  >
                    <textarea
                      className="w-3/4 h-14 px-2 py-2 resize-none rounded-md focus:bg-transparent outline-violet-700 hover:border hover:border-violet-700 bg-gray-200 hover:bg-transparent  placeholder:text-black"
                      placeholder="Comente..."
                      onChange={(e) => setComment(e.target.value)}
                      required
                      ref={textareaRef}
                    />
                    <ButtonComment />
                  </form>
                </section>
              </div>
            </section>
          );
        })}
    </>
  );
}
