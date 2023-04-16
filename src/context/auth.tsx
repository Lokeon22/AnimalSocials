import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { UserProps } from "../models/@types";

interface UserContextProps {
  user: UserProps | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserProps | undefined>>;
  handleLogin: (email: string, password: string) => void;
  handleLogout: () => void;
  handleUpdateProfile: (
    email: string,
    newpassword: string,
    old_password: string,
    avatarFile: File | null
  ) => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

export const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<UserProps>();
  const navigate = useNavigate();

  function handleLogin(email: string, password: string) {
    api
      .post("/sessions", { email, password })
      .then((res) => {
        setUser(res.data);
        navigate("/profile");
      })
      .catch((error) => {
        if (error.response.status === 500) {
          return alert("Email e/ou senha incorretos");
        }
      });
  }

  if (user) {
    localStorage.setItem("@animals:user", JSON.stringify(user.user));
    localStorage.setItem("@animals:token", user.token);
    api.defaults.headers.common["Authorization"] = `Bearer ${user?.token}`;
  }

  function handleLogout() {
    localStorage.removeItem("@animals:user");
    localStorage.removeItem("@animals:token");
    setUser(undefined);
  }

  async function handleUpdateProfile(
    email: string,
    newpassword: string,
    old_password: string,
    avatarFile: File | null
  ) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const res = await api.patch("/avatar", fileUploadForm);
        user!.user.avatar = res.data;
      }

      await api
        .put("/profile", { email, password: newpassword, old_password })
        .then((res) => {
          alert(res.data.message);
          navigate("/");
        });

      if (user)
        setUser({
          user: {
            id: user.user.id,
            name: user.user.name,
            email,
            password: newpassword,
            old_password,
            avatar: user.user.avatar,
            created_at: user.user.created_at,
            is_admin: user.user.is_admin,
          },
          token: user?.token,
        });
      localStorage.setItem("@animals:user", JSON.stringify(user?.user));
    } catch (error: any) {
      if (error.response.status === 500) {
        return alert("Email e/ou senha incorretos");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@animals:token");
    const user = localStorage.getItem("@animals:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser({
        token,
        user: JSON.parse(user),
      });
    } else {
      return;
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, handleLogin, handleLogout, handleUpdateProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
