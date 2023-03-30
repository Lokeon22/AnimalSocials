import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface UserCommentsProps {
  comment: string;
  user_id: number;
}

interface UserDetailsProps {
  name: string;
  avatar: string;
}

export function UserComments({ comment, user_id }: UserCommentsProps) {
  //const { userdetails } = useGetpost<UserDetailsProps>(user_id);
  const [userdetails, setUserdetails] = useState<UserDetailsProps>();

  useEffect(() => {
    api.get(`/show/${user_id}`).then((res) => setUserdetails(res.data));
  }, []);

  return (
    <label className="flex items-center gap-1">
      {userdetails && (
        <>
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            src={`${api.defaults.baseURL}/files/${userdetails?.avatar}`}
            alt="user photo"
          />
          <span className="text-sm font-bold">{userdetails?.name}:</span>
          <span className="text-sm">{comment}</span>
        </>
      )}
    </label>
  );
}
