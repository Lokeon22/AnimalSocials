import { useState, useEffect } from "react";
import { api } from "../services/api";

import { PostsProps } from "../models/@types";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";

export function Home() {
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState<PostsProps[]>([]);
  const [onePost, setOnepost] = useState<PostsProps[]>([]);
  const [refreshKey, setRefreshKey] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    api
      .get("/posts")
      .then((res) => setPosts(res.data))
      .catch((error: any) => console.log(error.status.response));
  }, []);

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
        {posts.length > 0 ? (
          posts.map((post) => {
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
          })
        ) : (
          <h2>Procurando posts...</h2>
        )}
      </section>
    </main>
  );
}
