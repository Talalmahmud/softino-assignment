import React from "react";

type Props = {
  toggle: any;
  setToggle: any;
};
const Cart = ({ toggle, setToggle }: Props) => {
  const cartItems = [
    {
      id: 1,
      name: "Classy Modern Smart watch",
      color: "Black",
      size: "XL",
      quantity: 1,
      price: 99.0,
      image: "/watch.png", // Replace with your image path
    },
    {
      id: 2,
      name: "Classy Modern Smart watch",
      color: "Purple",
      size: "L",
      quantity: 2,
      price: 178.0,
      image: "/watch.png", // Replace with your image path
    },
    {
      id: 3,
      name: "Classy Modern Smart watch",
      color: "Cyan",
      size: "M",
      quantity: 1,
      price: 79.0,
      image: "/watch.png", // Replace with your image path
    },
  ];

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-[651px]">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Item</th>
              <th className="py-2">Color</th>
              <th className="py-2">Size</th>
              <th className="py-2">Qnt</th>
              <th className="py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-4 flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-md mr-4"
                  />
                  {item.name}
                </td>
                <td className="py-4">{item.color}</td>
                <td className="py-4 font-bold">{item.size}</td>
                <td className="py-4">{item.quantity}</td>
                <td className="py-4">${item.price.toFixed(2)}</td>
              </tr>
            ))}
            <tr className="">
              <td className="py-4 flex items-center">Total</td>
              <td className="py-4"></td>
              <td className="py-4 font-bold"></td>
              <td className="py-4">4</td>
              <td className="py-4 font-semibold">$600</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6 flex flex-col gap-4 items-end justify-end ">
          <div className=" flex space-x-4">
            <div className=" cursor-pointer px-[18px] h-[36px] flex justify-center items-center border-[1px] border-gray-200  font-bold rounded-[3px]">
              Continue Shopping
            </div>

            <div
              onClick={() => setToggle(false)}
              className=" cursor-pointer w-[105px] h-[36px] flex justify-center items-center bg-[#6576FF] text-white font-bold rounded-[3px]"
            >
              Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
