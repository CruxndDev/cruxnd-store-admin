import Image from "next/image";
import avatarImage from "@public/assets/avatar.svg";
import confirmedIcon from "@public/assets/orders/confirmedIcon.svg";

const OrderDetailsProfileSection = () => {
  return (
    <div className="w-full rounded-lg custom-shadow mb-4 flex flex-col items-center py-8">
      <Image
        src={avatarImage}
        alt="avatar Image"
        height={150}
        width={150}
        className="mb-6"
      />

      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center">
          <h3 className="text-xl font-semibold mr-2">Tehilla Nwosu</h3>
          <Image
            src={confirmedIcon}
            alt="avatar Image"
            height={20}
            width={20}
            className="h-3 w-3"
          />
        </div>
        <small className="text-xs text-gray">@tehilla_nwosu</small>
      </div>

      <p className="text-sm">First Time Customer</p>
    </div>
  );
};

export default OrderDetailsProfileSection;
