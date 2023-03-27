import { useState } from "react";

import { Card } from "../components/Card";
import { Modal } from "../components/Modal";
import { postsImage } from "../data";

export function Home() {
  const [modal, setModal] = useState(false);

  return (
    <main className="max-w-[1000px] min-h-screen h-full mx-auto my-0 flex-grow">
      <section className="w-full h-full md:mt-10 mt-8 grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 mb-20 px-2 py-2 lg:px-0 lg:py-0">
        {modal && <Modal setModal={setModal} />}
        {postsImage &&
          postsImage.map((post) => {
            return (
              <Card
                key={post.id}
                id={post.id}
                url={post.url}
                modal={modal}
                setModal={setModal}
              />
            );
          })}
      </section>
    </main>
  );
}
