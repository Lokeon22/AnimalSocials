import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="max-w-[1000px] h-screen flex flex-col mx-auto my-0 px-2 py-2 mt-10 flex-grow-1 gap-2">
      <h2 className="text-4xl font-bold">Erro 404</h2>
      <p className="text-lg">Página não encontrada</p>
      <Link className="w-max text-blue-500 border-b-4" to={"/"}>
        Voltar para Postagens
      </Link>
    </div>
  );
}
