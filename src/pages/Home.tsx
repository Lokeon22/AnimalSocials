import { useState, useEffect } from "react";
import { api } from "../services/api";
import { useMutation } from "@tanstack/react-query";

import { PostsProps } from "../models/@types";
import { Modal } from "../components/Modal";
import { LoadingModal } from "../components/Helper/LoadingModal";
import { FeedPosts } from "../components/Feed/FeedPosts";

export function Home() {
  const [modal, setModal] = useState(false);
  const [onePost, setOnepost] = useState<PostsProps[]>([]);
  const [username, setUsername] = useState<string>("");

  const [pages, setPages] = useState<Number[]>([1]);
  const [infinite, setInfinite] = useState<boolean>(true);

  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

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
      <main className="max-w-[1000px] min-h-screen h-full mx-auto my-0 flex-grow">
        <section className="w-full h-full md:mt-10 mt-8 grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 mb-20 px-2 py-2 lg:px-0 lg:py-0">
          {loadingModal && <LoadingModal />}
          {modal && !loadingModal && (
            <Modal
              onePost={onePost}
              setModal={setModal}
              username={username}
              setOnepost={setOnepost}
            />
          )}
          {pages.map((page, index) => {
            return (
              <FeedPosts
                key={index}
                page={page}
                modal={modal}
                setModal={setModal}
                mutate={mutate}
                getPostUserName={getPostUserName}
                setInfinite={setInfinite}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}
