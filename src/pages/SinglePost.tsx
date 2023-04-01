import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { useUser } from "../context/auth";

import { PostsProps } from "../models/@types";
import { UserComments } from "../components/UserComments";
import { CommentForm } from "../components/CommentForm";
import { UserPostName } from "../components/UserPostName";
import { ButtonDeletePost } from "../components/ButtonDeletePost";
import { Loading } from "../components/Loading";

export function SinglePost() {
  const { user } = useUser();
  const [singlepost, setSinglepost] = useState<PostsProps[]>([]);
  const [username, setUsername] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [refreshKey, setRefreshKey] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { id, user_id } = useParams(); //id = post_id

  useEffect(() => {
    api.get(`/post/modal/${id}`).then((res) => setSinglepost(res.data));

    api.get(`/show/${user_id}`).then((res) => setUsername(res.data.name));
    setLoading(false);
  }, [refreshKey]);

  return (
    <>
      <section className="w-full min-h-screen h-full flex-grow px-2 py-2">
        {loading && <Loading />}
        {singlepost.length > 0 &&
          singlepost.map((post) => {
            return (
              <div
                key={post.id}
                className="max-w-[1000px] h-min mx-auto my-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-5"
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
                    setRefreshKey={setRefreshKey}
                  />
                </section>
              </div>
            );
          })}
      </section>
    </>
  );
}
