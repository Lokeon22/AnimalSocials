import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface ButtonDeleteProps {
  postID: number;
  setModal?: React.Dispatch<React.SetStateAction<boolean>>;
  refetch?: () => void;
}

export function ButtonDeletePost({
  postID,
  setModal,
  refetch,
}: ButtonDeleteProps) {
  const navigate = useNavigate();

  async function userDeletePost(postID: number) {
    const confirmar = confirm("Deletar post?");

    if (confirmar) {
      await api
        .delete(`/remove/${postID}`)
        .then((res) => console.log(res.data.message))
        .catch((error: any) => alert(error.status.message));

      if (setModal && refetch) {
        setModal(false);
        refetch();
      } else {
        navigate("/");
      }
    } else {
      return;
    }
  }

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
