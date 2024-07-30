import Image from "next/image";
import Link from "next/link";

const MessagesCard = () => {
  return (
    <div>
      <h2>Messages</h2>

      <div>
        <div>
          <Image
            src={`/avatar.png`}
            alt="Avatar Image"
            width={45}
            height={45}
            className="mr-2"
          />
          <div>
            <h3>Samantha Boyo</h3>
            <p>Hello sir/ma, my product was delivered on the 20th, a day...</p>
          </div>
        </div>

        <div>
          <Image
            src={`/avatar.png`}
            alt="Avatar Image"
            width={45}
            height={45}
            className="mr-2"
          />
          <div>
            <h3>Samantha Boyo</h3>
            <p>Hello sir/ma, my product was delivered on the 20th, a day...</p>
          </div>
        </div>

        <div>
          <Image
            src={`/avatar.png`}
            alt="Avatar Image"
            width={45}
            height={45}
            className="mr-2"
          />
          <div>
            <h3>Samantha Boyo</h3>
            <p>Hello sir/ma, my product was delivered on the 20th, a day...</p>
          </div>
        </div>
      </div>

      <Link href={`/messages`} />
    </div>
  );
};

export default MessagesCard;
