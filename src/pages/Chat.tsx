import { useUserChat } from "../context/chat";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

export function Chat() {
  const { userInfo } = useUserChat();

  const chatProps = useMultiChatLogic(
    "1b8ec07b-3714-49c4-a310-e2d9ad0b3dc3",
    userInfo?.username as string,
    userInfo?.secret as string
  );
  return (
    <div style={{ height: "75vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
}
