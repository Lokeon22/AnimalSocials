import { api } from "../../services/api";
import { useGetPostsDetails } from "../../hook/useGetposts";

interface UserCommentsProps {
  comment: string;
  user_id: number;
}

interface UserDetailsProps {
  name: string;
  avatar: string;
}

export function UserComments({ comment, user_id }: UserCommentsProps) {
  const { usuario } = useGetPostsDetails<UserDetailsProps>(user_id);

  return (
    <label className="flex flex-wrap items-center gap-1">
      {usuario && (
        <>
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            src={`${api.defaults.baseURL}/files/${usuario.avatar}`}
            alt="user photo"
          />
          <span className="text-sm font-bold">{usuario.name}:</span>
          <span className="text-sm">{comment}</span>
        </>
      )}
    </label>
  );
}
