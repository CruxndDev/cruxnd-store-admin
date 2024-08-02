import Image from "next/image";
import Link from "next/link";

const MessagesCard = () => {
  return (
    <div className="w-full min-h-fit rounded-2xl custom-shadow px-4 py-5 flex flex-col">
      <h2 className="text-2xl font-semibold mb-3 ml-3">Messages</h2>

      <div className="w-full chatsWrapper grid gap-y-1 mb-2">
        <div>
          <Image
            src={`/avatar.png`}
            alt="Avatar Image"
            width={45}
            height={45}
            className="mr-2"
          />
          <span>
            <h3>Samantha Boyo</h3>
            <p>Hello sir/ma, my product was delivered on the 20th, a day...</p>
          </span>
        </div>

        <div>
          <Image
            src={`/avatar.png`}
            alt="Avatar Image"
            width={45}
            height={45}
            className="mr-2"
          />
          <span>
            <h3>Samantha Boyo</h3>
            <p>Hello sir/ma, my product was delivered on the 20th, a day...</p>
          </span>
        </div>

        <div>
          <Image
            src={`/avatar.png`}
            alt="Avatar Image"
            width={45}
            height={45}
            className="mr-2"
          />
          <span>
            <h3>Samantha Boyo</h3>
            <p>Hello sir/ma, my product was delivered on the 20th, a day...</p>
          </span>
        </div>
      </div>

      <Link href={`/messages`} className="text-white bg-primaryColor text-xs self-end rounded-md px-5 py-1">View all</Link>
    </div>
  );
};

export default MessagesCard;
