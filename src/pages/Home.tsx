import { useState } from "react";
import { api } from "../services/api";
import { useQuery, useMutation } from "@tanstack/react-query";

import { PostsProps } from "../models/@types";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";
import { Loading } from "../components/Loading";
import { LoadingModal } from "../components/Helper/LoadingModal";

export function Home() {
  const [modal, setModal] = useState(false);
  const [onePost, setOnepost] = useState<PostsProps[]>([]);
  const [username, setUsername] = useState<string>("");

  async function getPosts() {
    const response = await api.get<PostsProps[]>("/posts");
    return response.data;
  }

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const { mutate, isLoading: loadingModal } = useMutation(
    ["getPostModal"],
    async (id: number) => {
      const response = await api.get<PostsProps[]>(`/post/modal/${id}`);
      return setOnepost(response.data);
    }
  );

  function getPostUserName(user_id: number) {
    api.get(`/show/${user_id}`).then((res) => setUsername(res.data.name));
  }

  return (
    <>
      {isLoading && <Loading />}
      <main className="max-w-[1000px] min-h-screen h-full mx-auto my-0 flex-grow">
        <section className="w-full h-full md:mt-10 mt-8 grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 mb-20 px-2 py-2 lg:px-0 lg:py-0">
          {loadingModal && <LoadingModal />}
          {modal && !loadingModal && (
            <Modal
              refetch={refetch}
              onePost={onePost}
              setModal={setModal}
              username={username}
              setOnepost={setOnepost}
            />
          )}
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
                  getPostUserName={getPostUserName}
                />
              );
            })}
        </section>
      </main>
    </>
  );
}
