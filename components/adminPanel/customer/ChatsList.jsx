import Image from "next/image";

const ChatsList = ({ data }) => {
  return (
    <div>
      {data.map((chat, index) => (
        <div key={index}>
          <Image
            src={chat.profileImage}
            alt="profile"
            width={50}
            height={50}
            className="w-8 h-8 rounded-full mr-4"
          />
          <div>
            <h4>{chat.name}</h4>
            <p>{chat.lastChat}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatsList;
