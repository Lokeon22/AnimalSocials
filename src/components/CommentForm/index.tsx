import { api } from "../../services/api";
import { ButtonComment } from "../ButtonComment";

interface CommentFormProps {
  id?: string | number;
  user_id?: string | number;
  comment: string;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  setRefreshKey: React.Dispatch<React.SetStateAction<string>>;
}

export function CommentForm({
  id,
  user_id,
  comment,
  textareaRef,
  setComment,
  setRefreshKey,
}: CommentFormProps) {
  function handleCreateComment() {
    api
      .post(`/comment/${id}`, { comment, post_id: id, user_id })
      .then((res) => setRefreshKey(res.data));
    if (textareaRef.current) {
      textareaRef.current.value = "";
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreateComment();
      }}
      className="flex mb-1 self-end items-center gap-2 row-span-1"
    >
      <textarea
        className="w-3/4 h-14 px-2 py-2 resize-none rounded-md focus:bg-transparent outline-violet-700 hover:border hover:border-violet-700 bg-gray-200 hover:bg-transparent  placeholder:text-black"
        placeholder="Comente..."
        onChange={(e) => setComment(e.target.value)}
        required
        ref={textareaRef}
      />
      <ButtonComment />
    </form>
  );
}
