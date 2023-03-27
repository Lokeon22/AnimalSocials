import { Input } from "../Input";
import { Button } from "../Button";

export function CreatePost() {
  return (
    <section className="w-full h-full px-2 py-2">
      <h2 className="text-3xl mb-10">Criar postagem</h2>
      <form className="flex flex-col gap-4">
        <Input name="titulo" place="Titulo" type="text" />
        <Input name="descrição" place="Descrição" type="text" />
        <input type="file" required />
        <Button text="Enviar" />
      </form>
    </section>
  );
}
