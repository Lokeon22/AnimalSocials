import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function LoadingModal() {
  return (
    <section className="bg-black bg-opacity-40 w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="w-full h-full flex justify-center items-center text-slate-200 gap-4">
        <AiOutlineLoading3Quarters className="w-20 h-20 animate-spin" />
        <h2 className="text-2xl sm:text-xl">Carregando...</h2>
      </div>
    </section>
  );
}
