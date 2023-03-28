import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { UserProps } from "../models/@types";

interface UserContextProps {
  user: UserProps | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserProps | undefined>>;
  handleLogin: (email: string, password: string) => void;
  handleLogout: () => void;
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
  }

  function handleLogout() {
    localStorage.removeItem("@animals:user");
    localStorage.removeItem("@animals:token");
    setUser(undefined);
  }

  useEffect(() => {
    const token = localStorage.getItem("@animals:token");
    const user = localStorage.getItem("@animals:user");

    if (token && user) {
      setUser({
        token,
        user: JSON.parse(user),
      });
    } else {
      return;
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
