import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface AdminDeleteProps {
  post_id?: string;
}

export function AdminDelete({ post_id }: AdminDeleteProps) {
  const navigate = useNavigate();

  async function adminDeletePost() {
    const confirmar = confirm("Deseja deletar post do usuário?");

    if (confirmar) {
      await api
        .delete(`/adminremove/${post_id}`)
        .then((res) => console.log(res.data.message))
        .catch((error) => {
          if (error.response.status === 500) {
            alert("Usuário não possui permissão para excluir");
          }
        });
      navigate("/");
    } else {
      return;
    }
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        adminDeletePost();
      }}
      className="w-max px-3 bg-gray-200 text-sm rounded-md py-[2px] text-gray-400  hover:text-gray-600 hover:bg-gray-100 duration-100 mb-2"
    >
      Deletar
    </button>
  );
}
