import { api } from "../../services/api";

interface UserCardProps {
  id: number;
  comments?: [];
  title?: string;
  image: string;
  user_id: number;
}

export function UserPostsCard({ image }: UserCardProps) {
  return (
    <div className="relative hover:cursor-pointer">
      <img
        className="max-w-[155px] max-h-[155px] sm:max-w-[250px] sm:max-h-[250px] object-contain"
        src={`${api.defaults.baseURL}/files/${image}`}
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40"></div>
    </div>
  );
}
