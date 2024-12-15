"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";

type Props = {};
const product = {
  name: "Classy Modern Smart watch",
  products: [
    { id: 1, image: "/purple.png", colorName: "Purple", code: "#816BFF" },
    { id: 2, image: "/cyan.png", colorName: "Cyan", code: "#1FCEC9" },
    { id: 3, image: "/blue.png", colorName: "Blue", code: "#4B97D3" },
    { id: 4, image: "/black.png", colorName: "Black", code: "#3B4747" },
  ],
};

const priceList = [
  { price: 69, size: "S" },
  { price: 79, size: "M" },
  { price: 89, size: "L" },
  { price: 99, size: "Xl" },
];

const ProductDetails = (props: Props) => {
  const [toggle, setToggle] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(
    product.products[0]
  );
  const [selectedSize, setSelectedSize] = useState<any>(priceList[0]);
  const [cartList, setcartList] = useState<any[]>([]);
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [total, setTotal] = useState<any>("");

  const calculateCartTotals = (cartList: any) => {
    const totals = cartList.reduce(
      (acc: any, item: any) => {
        acc.totalQuantity += item.quantity;
        acc.totalPrice += item.price * item.quantity;
        return acc;
      },
      { totalQuantity: 0, totalPrice: 0 }
    );

    setTotal(totals);
  };

  const addToCart = () => {
    const newItem = {
      name: product?.name,
      color: selectedProduct?.colorName,
      size: selectedSize?.size,
      price: selectedSize?.price,
      image: selectedProduct?.image,
      quantity: productQuantity,
    };

    const existingItemIndex = cartList.findIndex(
      (item) => item.color === newItem.color && item.size === newItem.size
    );

    if (existingItemIndex >= 0) {
      const updatedCartList = [...cartList];
      updatedCartList[existingItemIndex].quantity = newItem.quantity;
      setcartList(updatedCartList);
    } else {
      setcartList([...cartList, newItem]);
    }
  };

  useEffect(() => {
    calculateCartTotals(cartList);
  }, [cartList]);

  return (
    <div className=" w-[1320px] h-[720px] flex items-center gap-[60px]">
      <Image
        src={selectedProduct.image}
        height={720}
        width={630}
        alt=""
        className="w-[630px] h-[720px]"
      />
      <div className=" flex flex-col gap-4">
        <p className=" text-[#364A63] text-[40px] font-bold">{product.name}</p>
        <div className=" flex gap-2 items-center">
          <Image
            src={"/star-fill.png"}
            height={18}
            width={18}
            alt=""
            className=" h-[18px] w-[18px]"
          />
          <Image
            src={"/star-fill.png"}
            height={18}
            width={18}
            alt=""
            className=" h-[18px] w-[18px]"
          />
          <Image
            src={"/star-fill.png"}
            height={18}
            width={18}
            alt=""
            className=" h-[18px] w-[18px]"
          />
          <Image
            src={"/star-half-fill.png"}
            height={18}
            width={18}
            alt=""
            className=" h-[18px] w-[18px]"
          />
          <Image
            src={"/star.png"}
            height={18}
            width={18}
            alt=""
            className=" h-[18px] w-[18px]"
          />
          <p className=" text-14px] text-[#8091A7]">(2 Reviews)</p>
        </div>
        <div className=" flex items-center gap-[5px] pt-[20px]">
          {" "}
          <p className="text-[20px] text-[#8091A7] line-through ">$99.00 </p>
          <p
            style={{ color: selectedProduct?.code }}
            className=" text-[24px] font-bold "
          >
            {" "}
            ${selectedSize?.price}{" "}
          </p>
        </div>
        <p className=" text-[18px] text-[#8091A7] pt-[20px]">
          I must explain to you how all this mistaken idea of denoun cing ple
          praising pain was born and I will give you a complete account of the
          system, and expound the actual teaching.
        </p>
        <div className=" pt-[20px] flex gap-[43px]">
          <div className=" flex flex-col">
            <p className=" text-[#8091A7] text-[14px]">Type</p>
            <p className=" text-[#364A63] font-bold text-[16px]">Watch</p>
          </div>
          <div className=" flex flex-col">
            <p className=" text-[#8091A7] text-[14px]">Model Number</p>
            <p className=" text-[#364A63] font-bold text-[16px]">
              Forerunner 290XT
            </p>
          </div>
        </div>
        <div className=" pt-[20px] flex gap-[10px] flex-col">
          <p className=" text-[#364A63] font-bold text-[18px]">Color</p>
          <div className=" flex items-center gap-[19px]">
            {product.products.map((item: any, index: number) => (
              <div
                key={index}
                onClick={() => setSelectedProduct(item)}
                style={{
                  borderColor:
                    selectedProduct?.id === item?.id ? item?.code : "white",
                }}
                className={` border-[2px] h-6 w-6 flex justify-center cursor-pointer items-center bg-white  rounded-full`}
              >
                <div
                  style={{ backgroundColor: item?.code }}
                  className={` h-4 w-4 rounded-full `}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className=" pt-[20px] flex gap-[10px] flex-col">
          <p className=" text-[#364A63] font-bold text-[18px]">Wrist Size</p>
          <div className=" flex items-center gap-[12px]">
            {priceList?.map((item: any, index: any) => (
              <div
                key={index}
                onClick={() => setSelectedSize(item)}
                style={{
                  borderColor:
                    selectedSize?.size === item?.size
                      ? selectedProduct?.code
                      : "",
                }}
                className=" cursor-pointer border-[2px] h-[36px] w-[73px] flex gap-[10px] justify-center items-center bg-white border-gray-200 rounded-[3px]"
              >
                <p
                  className=" text-[13px] font-bold"
                  style={{
                    color:
                      selectedSize?.size === item?.size
                        ? selectedProduct?.code
                        : "",
                  }}
                >
                  {item?.size}
                  <span className="text-[#8091A7] pl-[10px] font-normal">
                    ${item?.price}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className=" pt-[20px] flex items-center  gap-[12px]">
          <div className=" border-[1px] w-[130px] h-[36px] flex items-center justify-between">
            <button
              onClick={() => setProductQuantity(productQuantity - 1)}
              className=" border-[1px] border-r-gray-200 flex justify-center items-center w-[35px] h-full"
            >
              <Image src={"/minus.svg"} height={24} width={19} alt="" />
            </button>
            <p className=" text-[14px]">{productQuantity}</p>
            <button
              onClick={() => setProductQuantity(productQuantity + 1)}
              className=" border-[1px] border-l-gray-200 flex justify-center items-center w-[35px] h-full"
            >
              <Image src={"/plus.svg"} height={24} width={19} alt="" />
            </button>
          </div>
          <button
            onClick={addToCart}
            className=" w-[105px] h-[36px] text-[13px] flex justify-center items-center bg-[#6576FF] text-white font-bold rounded-[3px]"
          >
            Add to Cart
          </button>
          <Image src={"/heart.svg"} height={20} width={20} alt="" />
        </div>
      </div>
      <button
        onClick={() => setToggle(true)}
        className=" cursor-pointer  fixed bottom-[20px] left-[45%] bg-[#FFBB5A] w-[139px] h-[44px] text-[#364A63] rounded-[20px] flex justify-center items-center gap-2"
      >
        <p className=" text-[14px] font-bold">Checkout</p>
        <p className="  bg-white text-black  w-[19px] h-[20px] rounded-[5px] text-[14px]  flex justify-center items-center">
          {total?.totalQuantity}
        </p>
      </button>

      {toggle && (
        <Cart
          total={total}
          cartItems={cartList}
          toggle={toggle}
          setToggle={setToggle}
        />
      )}
    </div>
  );
};

export default ProductDetails;
