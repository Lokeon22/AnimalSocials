import { api } from "../../services/api";
import { useMutation } from "@tanstack/react-query";
import { useUser } from "../../context/auth";
import { ButtonComment } from "../ButtonComment";

interface CommentFormProps {
  id?: string | number;
  user_id?: string | number;
  comment: string;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  setRefreshKey: React.Dispatch<React.SetStateAction<string>>;
}

interface CreateCommentProps {
  id?: number | string;
  comment: string;
  user_id?: number | string;
}

export function CommentForm({
  id,
  user_id,
  comment,
  textareaRef,
  setComment,
  setRefreshKey,
}: CommentFormProps) {
  const { user } = useUser();

  const mutation = useMutation({
    mutationFn: ({ id, comment, user_id }: CreateCommentProps) => {
      return api
        .post<CreateCommentProps>(`/comment/${id}`, {
          comment,
          post_id: id,
          user_id,
        })
        .then((res) => res.data);
    },
    onSuccess: (data) => {
      if (textareaRef.current) {
        textareaRef.current.value = "";
      }
      setRefreshKey(data.comment);
    },
  });

  return (
    <>
      {user && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutation.mutate({ id, comment, user_id });
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
