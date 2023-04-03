import { api } from "../../services/api";
import { useUser } from "../../context/auth";
import { ButtonComment } from "../ButtonComment";
import { useMutation } from "@tanstack/react-query";
import { PostsProps } from "../../models/@types";

interface CommentFormProps {
  id?: string | number;
  user_id?: string | number;
  comment: string;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  setOnepost: React.Dispatch<React.SetStateAction<PostsProps[]>>;
}

export function CommentForm({
  id,
  user_id,
  comment,
  textareaRef,
  setComment,
  setOnepost,
}: CommentFormProps) {
  const { user } = useUser();

  const { mutate } = useMutation(
    () => api.post(`/comment/${id}`, { comment, post_id: id, user_id }),
    {
      onSuccess: () => {
        if (textareaRef.current) {
          textareaRef.current.value = "";
        }
        api.get(`/post/modal/${id}`).then((res) => setOnepost(res.data));
      },
    }
  );

  return (
    <>
      {user && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutate();
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
      )}
    </>
  );
}
