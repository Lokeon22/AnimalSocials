interface PostNameProps {
  username: string;
}

export function UserPostName({ username }: PostNameProps) {
  return <p className="text-lg text-gray-400 mb-2">@{username}</p>;
}
