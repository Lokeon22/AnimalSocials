import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { UserInfoProps, UserProps } from "../models/@types";

interface ChildrenProps {
  children: React.ReactNode;
}

interface ChatContextProps {
  userInfo: UserInfoProps | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoProps | undefined>>;
  handleChatLoguin: (user?: UserProps) => void;
}

export const ChatContext = createContext({} as ChatContextProps);

export const ChatProvider = ({ children }: ChildrenProps) => {
  const [userInfo, setUserInfo] = useState<UserInfoProps>();
  const navigate = useNavigate();

  async function handleChatLoguin(user?: UserProps) {
    if (user) {
      axios
        .post(
          "https://animalsocials-api.onrender.com/authenticate",
          {
            username: user.user.name,
          },
          { headers: { Authorization: `Bearer ${user.token}` } }
        )
        .then((res) => {
          setUserInfo({
            ...res.data,
            secret: user.user.name,
          });
          navigate("/profile/chat");
        })
        .catch((e) => console.log("error", e));
    }
  }

  if (userInfo) {
    localStorage.setItem("@animals:chatuser", JSON.stringify(userInfo));
  }

  useEffect(() => {
    const user_chat = localStorage.getItem("@animals:chatuser");
    if (user_chat) {
      setUserInfo(JSON.parse(user_chat));
    }
  }, []);

  return (
    <ChatContext.Provider value={{ userInfo, setUserInfo, handleChatLoguin }}>
      {children}
    </ChatContext.Provider>
  );
};

export function useUserChat() {
  const context = useContext(ChatContext);
  return context;
}
