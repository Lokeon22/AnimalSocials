import { useEffect, useState } from "react";
import { api } from "../services/api";
import { PostsProps } from "../models/@types";
/*
export function useGetpost<T>({ user_id }: any) {
  const [userdetails, setUserdetails] = useState<T>();

  useEffect(() => {
    api.get(`/show/${user_id}`).then((res) => setUserdetails(res.data));
  }, []);

  return {
    userdetails,
  };
}*/
