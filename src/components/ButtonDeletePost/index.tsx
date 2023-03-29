interface ButtonDeleteProps {
  postID: number;
  userDeletePost: (postID: number) => void;
}

export function ButtonDeletePost({
  userDeletePost,
  postID,
}: ButtonDeleteProps) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        userDeletePost(postID);
      }}
      className="px-3 bg-gray-200 text-sm rounded-md py-[2px] text-gray-400  hover:text-gray-600 hover:bg-gray-100 duration-100 mb-2"
    >
      Deletar
    </button>
  );
}
