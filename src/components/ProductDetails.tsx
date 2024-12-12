"use client";
import Image from "next/image";
import React, { useState } from "react";
import Cart from "./Cart";

type Props = {};

const ProductDetails = (props: Props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" w-[1320px] h-[720px] flex items-center gap-[60px]">
      <Image
        src={"/watch.png"}
        height={720}
        width={630}
        alt=""
        className="w-[630px] h-[720px]"
      />
      <div className=" flex flex-col gap-4">
        <p className=" text-[#364A63] text-[40px] font-bold">
          Classy Modern Smart watch
        </p>
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
          <p className=" text-[24px] font-bold text-[#6576FF]"> $79.00</p>
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
            <div className=" border-[2px] h-6 w-6 flex justify-center items-center bg-white border-green-500 rounded-full">
              <div className=" h-4 w-4 rounded-full bg-green-500"></div>
            </div>
            <div className=" border-[2px] h-6 w-6 flex justify-center items-center bg-white border-green-500 rounded-full">
              <div className=" h-4 w-4 rounded-full bg-green-500"></div>
            </div>
            <div className=" border-[2px] h-6 w-6 flex justify-center items-center bg-white border-green-500 rounded-full">
              <div className=" h-4 w-4 rounded-full bg-green-500"></div>
            </div>
            <div className=" border-[2px] h-6 w-6 flex justify-center items-center bg-white border-green-500 rounded-full">
              <div className=" h-4 w-4 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>

        <div className=" pt-[20px] flex gap-[10px] flex-col">
          <p className=" text-[#364A63] font-bold text-[18px]">Wrist Size</p>
          <div className=" flex items-center gap-[12px]">
            <div className=" border-[2px] h-[36px] w-[73px] flex gap-[10px] justify-center items-center bg-white border-gray-200 rounded-[3px]">
              <p className=" text-[13px]">
                S <span className="text-[#8091A7] font-normal">$69</span>
              </p>
            </div>
            <div className=" border-[2px] h-[36px] w-[73px] flex gap-[10px] justify-center items-center bg-white border-gray-200 rounded-[3px]">
              <p className=" text-[13px]">
                S <span className="text-[#8091A7]">$69</span>
              </p>
            </div>
            <div className=" border-[2px] h-[36px] w-[73px] flex gap-[10px] justify-center items-center bg-white border-gray-200 rounded-[3px]">
              <p className=" text-[13px]">
                S <span className="text-[#8091A7]">$69</span>
              </p>
            </div>
            <div className=" border-[2px] h-[36px] w-[73px] flex gap-[10px] justify-center items-center bg-white border-gray-200 rounded-[3px]">
              <p className=" text-[13px]">
                S <span className="text-[#8091A7]">$69</span>
              </p>
            </div>
          </div>
        </div>

        <div className=" pt-[20px] flex items-center  gap-[12px]">
          <div className=" border-[1px] w-[130px] h-[36px] flex items-center justify-between">
            <button className=" border-[1px] border-r-gray-200 flex justify-center items-center w-[35px] h-full">
              -
            </button>
            <p>0</p>
            <button className=" border-[1px] border-l-gray-200 flex justify-center items-center w-[35px] h-full">
              -
            </button>
          </div>
          <div className=" w-[105px] h-[36px] flex justify-center items-center bg-[#6576FF] text-white font-bold rounded-[3px]">
            Add to Cart
          </div>
          <Image src={"/heart.png"} height={20} width={20} alt="" />
        </div>
      </div>
      <button
        onClick={() => setToggle(true)}
        className=" cursor-pointer  fixed bottom-[20px] left-[45%] bg-[#FFBB5A] w-[139px] h-[44px] text-[#364A63] rounded-[20px] flex justify-center items-center gap-2"
      >
        <p className=" text-[14px] font-bold">Checkout</p>
        <p className="  bg-white text-black  w-[19px] h-[20px] rounded-[5px] text-[12px]  flex justify-center items-center">
          2
        </p>
      </button>

      {toggle && <Cart toggle={toggle} setToggle={setToggle} />}
    </div>
  );
};

export default ProductDetails;
