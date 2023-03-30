import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface UserCommentsProps {
  comment: string;
  user_id: number;
}

export function UserComments({ comment, user_id }: UserCommentsProps) {
  const [u, setU] = useState<string>("");

  useEffect(() => {
    api.get(`/show/${user_id}`).then((res) => setU(res.data.name));
  }, []);

  return (
    <label className="flex items-center gap-1">
      <span className="text-sm font-bold">{u}:</span>
      <span className="text-sm">{comment}</span>
    </label>
  );
}
