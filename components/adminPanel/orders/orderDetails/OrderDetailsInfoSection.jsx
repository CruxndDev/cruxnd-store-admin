import avatarImage from "@public/assets/avatar.svg";
import blackLocationMarkerImage from "@public/assets/orders/blackLocationMarker.svg";
import greenDotMarkerImage from "@public/assets/orders/greenDotMarker.svg";
import truckImage from "@public/assets/orders/truck.svg";
import Image from "next/image";
import { BsChatSquareText } from "react-icons/bs";
import { LiaPhoneSolid } from "react-icons/lia";

const OrderDetailsInfoSection = ({ orderID, width, marginBottom }) => {
  return (
    <div
      style={{ width, marginBottom }}
      className={`w-full bg-white rounded-lg custom-shadow mb-4 p-4`}
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          <small className="text-gray text-xs font-medium">{`Order ID (Pack)`}</small>
          <h3 className="text-xl font-semibold">#{orderID}</h3>
        </div>

        <Image
          src={truckImage}
          alt="Truck image"
          width={150}
          height={50}
          className="h-12"
        />
      </div>

      <div className="text-gray mb-6">
        <div>
          <small className="font-medium text-xs">Shipment Number</small>
          <p className="font-semibold text-lg">NG-2024003323</p>
        </div>

        <small className="font-semibold">{`Order Pack (Clothings, Jewelries, Accessories)`}</small>
      </div>

      <div className="text-gray border-y-lightGray border-y-[1px] py-4">
        <div className="flex items-center mb-4">
          <div className="mr-4 px-2">
            <Image
              src={greenDotMarkerImage}
              alt="Green Location Marker"
              width={20}
              height={20}
              className="h-[14px]"
            />
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">1. Living Water Ave.</h4>
            <small className="text-xs font-medium">
              Narayi High Cost, Kaduna, 800244
            </small>
          </div>
        </div>

        <div className="flex items-center">
          <div className="bg-lightGray mr-4 py-1 px-2 rounded-full">
            <Image
              src={blackLocationMarkerImage}
              alt="Black Location Marker"
              width={50}
              height={50}
              className="h-6 w-6"
            />
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Flat 3, Block 4</h4>
            <small className="text-xs font-medium">
              El-rufai Rd, Sam Nujoma Housing Estate, Abuja 900001
            </small>
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="flex justify-between items-center mb-4">
          <Image
            src={avatarImage}
            alt="Avatar Image"
            width={50}
            height={50}
            className="h-10"
          />

          <div className="w-[35%]">
            <small className="font-medium">Purchase Client</small>
            <h4 className="font-semibold">Marvellous Johnson</h4>
            <small className="font-medium">Food State, LTD</small>
          </div>

          <div className="flex items-center">
            <LiaPhoneSolid className="text-2xl mr-8 cursor-pointer" />
            <BsChatSquareText className="text-2xl cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Image
            src={avatarImage}
            alt="Avatar Image"
            width={50}
            height={50}
            className="h-10"
          />

          <div className="w-[35%]">
            <small className="font-medium">Transport Client</small>
            <h4 className="font-semibold">Uber Transport</h4>
            <small className="font-medium">Food State, LTD</small>
          </div>

          <div className="flex items-center">
            <LiaPhoneSolid className="text-2xl mr-8 cursor-pointer" />
            <BsChatSquareText className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsInfoSection;
