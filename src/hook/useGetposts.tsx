import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useGetPostsDetails<T>(user_id: number | string) {
  const [usuario, setUsuario] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api.get(`/show/${user_id}`).then((res) => setUsuario(res.data));
    setLoading(false);
  }, []);

  return {
    usuario,
    loading,
  };
}
