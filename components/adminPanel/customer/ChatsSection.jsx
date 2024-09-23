import { chats } from "@utils/arrays";
import ChatsList from "./ChatsList";

const ChatsSection = () => {
  return (
    <div>
      <div>
        <div>
          <input type="text" />
        </div>

        <button>Complaints</button>
      </div>

      <ChatsList data={chats} />
    </div>
  );
};

export default ChatsSection;
