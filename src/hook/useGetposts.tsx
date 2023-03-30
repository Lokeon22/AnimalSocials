import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useGetPostsDetails<T>(user_id: number) {
  const [usuario, setUsuario] = useState<T>();

  useEffect(() => {
    api.get(`/show/${user_id}`).then((res) => setUsuario(res.data));
  }, []);

  return {
    usuario,
  };
}
