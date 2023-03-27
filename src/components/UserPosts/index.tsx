import { useEffect, useState } from "react";

import { UserPostsCard } from "../UserPostsCard";
import { postsImage } from "../../data";

interface PostType {
  id: number;
  url: string;
}

export function UserPosts() {
  const [userPosts, setUsersPosts] = useState<PostType[]>([]);

  useEffect(() => {
    setUsersPosts(postsImage);
  }, []);

  return (
    <section className="w-full h-full px-2 py-2">
      <h2 className="text-3xl mb-10">Suas publicações</h2>
      <main className="flex flex-wrap justify-center items-center gap-4">
        {userPosts.length > 0 ? (
          userPosts.map((post) => {
            return <UserPostsCard key={post.id} id={post.id} url={post.url} />;
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
