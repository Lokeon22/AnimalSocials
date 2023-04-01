import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GiBananaBunch } from "react-icons/gi";
import monkeywalk from "../../assets/icons/monkeywalk.gif";

export function Loading() {
  return (
    <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-0 justify-center items-center">
        <img
          src={monkeywalk}
          className="w-full h-full lg:block hidden col-span-2"
          alt="Loading"
        />
        <GiBananaBunch className="text-yellow-400 w-16 h-16 animate-bounce lg:block hidden" />
        <AiOutlineLoading3Quarters className="w-20 h-20 animate-spin lg:hidden block" />
        <span className="block lg:hidden">Carregando...</span>
      </div>
    </section>
  );
}
