import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useUser } from "../../context/auth";

import { UserPostsCard } from "../UserPostsCard";
import { Title } from "../Title";

export interface PostType {
  id: number;
  comments?: [];
  title?: string;
  image: string;
  user_id: number;
}

export function UserPosts() {
  const { user } = useUser();
  const [userPosts, setUsersPosts] = useState<PostType[]>([]);

  async function getUserPosts() {
    await api
      .get(`/post/${user?.user.id}`)
      .then((res) => setUsersPosts(res.data));
  }

  useEffect(() => {
    if (userPosts.length < 1) {
      getUserPosts();
    }
    return;
  }, [userPosts]);

  return (
    <section className="w-full h-full px-2 py-2">
      <Title text="Suas Publicações" />
      <main className="flex flex-wrap justify-center items-center gap-4">
        {userPosts.length > 0 ? (
          userPosts.map((post) => {
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
      </main>
    </section>
  );
}
