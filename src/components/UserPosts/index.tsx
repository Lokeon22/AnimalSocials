import { useQuery } from "@tanstack/react-query";
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

  async function getUserPosts() {
    const response = await api.get<PostType[]>(`/post/${user?.user.id}`);
    return response.data;
  }

  const { data, isFetching } = useQuery(["getUserPosts"], getUserPosts);

  return (
    <section className="w-full h-full px-2 py-2 animate-changeOpDire">
      <Title text="Suas Publicações" size="large" />
      <main className="flex flex-wrap justify-center items-center gap-4">
        {isFetching && (
          <Title text="Carregando posts..." color="#b4b4b4" weight="semibold" />
        )}
        {!isFetching &&
          data &&
          data.map((post) => {
            return (
              <UserPostsCard
                key={post.id}
                id={post.id}
                image={post.image}
                user_id={post.user_id}
              />
            );
          })}
        {!isFetching && data && data.length <= 0 && (
          <Title
            text="Nenhum post encontrado"
            color="#b4b4b4"
            weight="semibold"
          />
        )}
      </main>
    </section>
  );
}
