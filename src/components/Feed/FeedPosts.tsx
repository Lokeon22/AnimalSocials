import { api } from "../../services/api";
import { PostsProps } from "../../models/@types";
import { useQuery } from "@tanstack/react-query";
import { LoadingModal } from "../Helper/LoadingModal";
import { Card } from "../Card";

interface FeedPostsProps {
  page: Number;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  mutate: (id: number) => void;
  getUsername: (user_id: number) => void;
  setInfinite: React.Dispatch<React.SetStateAction<boolean>>;
}

export function FeedPosts({
  page,
  modal,
  setModal,
  mutate,
  getUsername,
  setInfinite,
}: FeedPostsProps) {
  async function getPosts() {
    const total = 6;
    const response = await api.get<PostsProps[]>(
      `/posts?limit=${total}&page=${page}`
    );
    if (response && response.statusText && response.data.length < total) {
      setInfinite(false);
    }
    return response.data;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["posts", page, setInfinite],
    queryFn: getPosts,
  });

  return (
    <>
      {isLoading && <LoadingModal />}
      {data &&
        data.map((post) => {
          return (
            <Card
              key={post.id}
              id={post.id}
              user_id={post.user_id}
              image={post.image}
              modal={modal}
              setModal={setModal}
              mutate={mutate}
              getUsername={getUsername}
            />
          );
        })}
    </>
  );
}
