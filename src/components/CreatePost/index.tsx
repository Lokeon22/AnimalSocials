import { useState } from "react";
import { api } from "../../services/api";

import { Input } from "../Input";
import { Button } from "../Button";

export function CreatePost() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  async function handleCreatePost() {
    try {
      if (image) {
        const postForm = new FormData();
        postForm.append("title", title);
        postForm.append("description", description);
        postForm.append("image", image, image?.name);
        await api
          .patch("/newpost", postForm)
          .then((res) => alert(res.data.message));
      }
    } catch (error: any) {
      if (error.response.status === 500) {
        return alert("Não foi possível postar");
      }
    }
  }

  return (
    <section className="w-full h-full px-2 py-2">
      <h2 className="text-3xl mb-10">Criar postagem</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreatePost();
        }}
        className="flex flex-col gap-4"
      >
        <Input
          name="titulo"
          placeholder="Titulo"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          name="descrição"
          placeholder="Descrição"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          required
          onChange={(e) => {
            e.target.files && setImage(e.target.files[0]);
          }}
        />
        <Button text="Enviar" />
      </form>
    </section>
  );
}
