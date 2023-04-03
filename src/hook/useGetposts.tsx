import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useGetPostsDetails<T>(user_id: number | string) {
  const [usuario, setUsuario] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);

  async function getUsersDetails() {
    const response = await api.get(`/show/${user_id}`);
    setUsuario(response.data);
    return setLoading(false);
  }

  useEffect(() => {
    getUsersDetails();
  }, []);

  return {
    usuario,
    loading,
  };
}
