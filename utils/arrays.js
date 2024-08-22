import { GiLargeDress } from "react-icons/gi";
import { PiPackage, PiSneakerFill } from "react-icons/pi";

export const orderHistory = [
  {
    name: "Phoenix Baker",
    orderId: "#A4092091",
    price: "$30,021.23",
    quantity: 1,
    deliveryDate: "Jan 13, 2024",
    status: "Cancelled",
    productDescription:
      "CLOTHING\n14' by 12' undercover veil\n★ ★ ★ ★ ☆ (4.6) 281 ratings",
    image: "/assets/avatar.png",
  },
  {
    name: "Natali Craig",
    orderId: "#A4092091",
    price: "$10,045.00",
    quantity: 1,
    deliveryDate: "Jan 13, 2024",
    status: "Delivered",
    productDescription: "SHOES\nSwapTe Pro 3\n★ ★ ★ ★ ☆ (4.6) 281 ratings",
    image: "/assets/avatar.png",
  },
  {
    name: "Demi Wilkinson",
    orderId: "#A4092091",
    price: "$40,132.16",
    quantity: 1,
    deliveryDate: "Jan 13, 2024",
    status: "Delivered",
    productDescription:
      "CLOTHING\n14' by 12' undercover veil\n★ ★ ★ ★ ☆ (4.6) 281 ratings",
    image: "/assets/avatar.png",
  },
  {
    name: "Lana Steiner",
    orderId: "#A4092091",
    price: "$22,665.12",
    quantity: 1,
    deliveryDate: "Jan 13, 2024",
    status: "In transit",
    productDescription:
      "CLOTHING\n14' by 12' undercover veil\n★ ★ ★ ★ ☆ (4.6) 281 ratings",
    image: "/assets/avatar.png",
  },
  {
    name: "Candice Wu",
    orderId: "#A4092091",
    price: "$18,221.30",
    quantity: 1,
    deliveryDate: "Jan 12, 2024",
    status: "Delivered",
    productDescription:
      "CLOTHING\n14' by 12' undercover veil\n★ ★ ★ ★ ☆ (4.6) 281 ratings",
    image: "/assets/avatar.png",
  },
  {
    name: "Lana Steiner",
    orderId: "#A4092091",
    price: "$24,118.18",
    quantity: 1,
    deliveryDate: "Jan 12, 2024",
    status: "Delivered",
    productDescription:
      "CLOTHING\n14' by 12' undercover veil\n★ ★ ★ ★ ☆ (4.6) 281 ratings",
    image: "/assets/avatar.png",
  },
];

export const orderItems = [
  {
    icon: <PiPackage />, // Path to your accessory icon
    name: "ACCESSORIES",
    description: "4 in 1 Shoe Rack",
    rating: 5.0,
    ratingsCount: 433,
    quantity: 2,
    price: 14.0,
    totalPrice: 28.0,
    status: "Cancelled",
  },
  {
    icon: <PiSneakerFill />, // Path to your shoes icon
    name: "SHOES",
    description: "SwapTe Pro 3",
    rating: 4.3,
    ratingsCount: 295,
    quantity: 1,
    price: 46.0,
    totalPrice: 46.0,
    status: "Delivered",
  },
  {
    icon: <GiLargeDress />, // Path to your clothing icon
    name: "CLOTHING",
    description: "14' by 12' undercover veil",
    rating: 4.6,
    ratingsCount: 281,
    quantity: 16,
    price: 1.45,
    totalPrice: 23.3,
    status: "In delivery",
  },
];