import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Input } from "../Input";
import { Title } from "../Title";
import { Button } from "../Button";

export function CreatePost() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    if (image) {
      const imagePreview = URL.createObjectURL(image);
      return setAvatarPreview(imagePreview);
    }
  }, [image]);

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
      navigate("/profile/userposts");
    } catch (error: any) {
      if (error.response.status === 500) {
        return alert("Não foi possível postar");
      }
    }
  }

  return (
    <section className="w-full h-full flex flex-col sm:flex-row gap-5 items-center px-2 py-2 animate-changeOpDire">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreatePost();
        }}
        className="flex flex-col gap-4"
      >
        <Title text="Criar Postagem" size="large" />
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
      {avatarPreview && (
        <img
          className="w-full sm:w-2/5 h-full sm:h-[370px] object-cover rounded-xl"
          src={avatarPreview}
        />
      )}
    </section>
  );
}
