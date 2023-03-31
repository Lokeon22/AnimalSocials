import { useEffect, useState } from "react";
import { api } from "../services/api";
import { useParams } from "react-router-dom";
import { useGetPostsDetails } from "../hook/useGetposts";

import { UserDetails } from "../models/@types";
import { PostType } from "../components/UserPosts";
import { UserPostsCard } from "../components/UserPostsCard";

export function UserProfilePost() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const { id } = useParams();
  const { usuario } = useGetPostsDetails<UserDetails>(id!);

  let date_db = usuario?.created_at.slice(0, 10);
  let date_brl = date_db?.split("-").reverse().join("/");

  useEffect(() => {
    api.get(`/post/${id}`).then((res) => setPosts(res.data));
  }, []);

  return (
    <section className="max-w-[1000px] min-h-screen mx-auto my-0 flex-grow px-2 py-2">
      {usuario && (
        <>
          <main className="w-full h-full flex flex-wrap items-center gap-4 mt-8">
            <img
              src={`${api.defaults.baseURL}/files/${usuario.avatar}`}
              className="w-28 h-28 sm:w-40 sm:h-40 rounded-full"
              alt="Imagem do usuario"
            />
            <div className="flex flex-col gap-1">
              <p className="text-lg sm:text-2xl text-gray-500">
                @{usuario.name}
              </p>
              <span className="text-sm sm:text-base">
                Entrou em: {date_brl}
              </span>
            </div>
          </main>
          <div className="flex flex-wrap justify-start items-center gap-4 mt-5">
            {posts.length > 0 ? (
              posts.map((post) => {
                return (
                  <UserPostsCard
                    key={post.id}
                    id={post.id}
                    image={post.image}
                    user_id={post.user_id}
                  />
                );
              })
            ) : (
              <h2 className="text-2xl font-medium text-gray-400">
                Nenhum post encontrado
              </h2>
            )}
          </div>
        </>
      )}
    </section>
  );
}
