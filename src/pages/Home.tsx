import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";

import { postsImage } from "../data";

export function Home() {
  return (
    <section className="flex flex-col min-h-screen">
      <main className="max-w-[1000px] h-full mx-auto my-0 flex-grow">
        <Header />
        <section className="w-full h-full md:mt-10 mt-8 grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 mb-20 px-2 py-2 lg:px-0 lg:py-0">
          {postsImage &&
            postsImage.map((post) => {
              return <Card key={post.id} id={post.id} url={post.url} />;
            })}
        </section>
      </main>
      <Footer />
    </section>
  );
}
