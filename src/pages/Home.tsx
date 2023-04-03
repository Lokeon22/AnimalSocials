import { useState, useEffect } from "react";
import { api } from "../services/api";
import { useQuery } from "@tanstack/react-query";

import { PostsProps } from "../models/@types";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";
import { Loading } from "../components/Loading";

export function Home() {
  const [modal, setModal] = useState(false);
  const [onePost, setOnepost] = useState<PostsProps[]>([]);
  const [refreshKey, setRefreshKey] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  async function getPosts() {
    const response = await api.get<PostsProps[]>("/posts");
    return response.data;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  function getPostModal(id: number) {
    api
      .get(`/post/modal/${id}`)
      .then((res) => setOnepost(res.data))
      .catch((error: any) => console.log(error.status.response));
  }

  useEffect(() => {
    // renderiza quando abrir o modal, o valor refreshKey atualiza quando o usuario faz um comentario,
    // então ele atualiza o post aberto a os comentarios, renderizando eles novamente
    onePost.length > 0 && getPostModal(onePost[0].id);
    return;
  }, [refreshKey]);

  function getPostUserName(user_id: number) {
    api.get(`/show/${user_id}`).then((res) => setUsername(res.data.name));
  }

  return (
    <>
      {isLoading && <Loading />}
      <main className="max-w-[1000px] min-h-screen h-full mx-auto my-0 flex-grow">
        <section className="w-full h-full md:mt-10 mt-8 grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 mb-20 px-2 py-2 lg:px-0 lg:py-0">
          {modal && (
            <Modal
              onePost={onePost}
              setModal={setModal}
              username={username}
              setRefreshKey={setRefreshKey}
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
                  getPostModal={getPostModal}
                  getPostUserName={getPostUserName}
                />
              );
            })}
        </section>
      </main>
    </>
  );
}
