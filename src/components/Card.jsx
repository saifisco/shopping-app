// import React from "react";
import img from "/kit.jpg";
import { Rating } from "primereact/rating";
import { CiHeart } from "react-icons/ci";
export default function Card() {
  // let [value, setValue] = React.useState(null);

  return (
    <div className="rounded-xl min-w-[220px] flex-growx  border p-2 space-y-2.5 relative">
      <div className="">
        <img className="mx-auto" src={img} width="150px" />
      </div>
      {/* title ````section```` */}
      <div className="flex">
        <div className="flex-grow basis-auto text-lg capitalize">
          <a href="/" className="block hover:underline underline-offset-2">
            new adidas Real Madrid home 17/18 T-Shirt
          </a>
        </div>
      </div>
      {/* Review section */}
      <div className="flex flex-grow flex-wrap gap-2 justify-end items-baseline">
        <Rating
          className="flex gap-0.5 text-yellow-400"
          cancel={false}
          value={3}
          stars={5}
          disabled
        />
        <div className="rating text-xs text-nowrap">13 Reviews</div>
      </div>
      {/* price section */}
      <div className="flex gap-[10px] items-end text-xl text-nowrap">
        <div className="relative">
          <span>Rs</span>
          <span className="ml-1">1299</span>
        </div>
        <div className=" text-sm text-slate-500 relative">
          <span>Rs</span>
          <span className="ml-1">1999</span>
          <div className="border-b border-black absolute w-full top-1/2"></div>
        </div>
        <div className="discount text-center absolute top-2 right-2 bg-red-400">
          -20%
        </div>
      </div>
      {/* button section */}
      <div className="flex gap-[10px] flex-wrap">
        <button className="border rounded-lg  flex-grow basis-1/2 h-9 order-1">
          Add to cart
        </button>
        <button className="border rounded-lg w-full h-9 bg-emerald-500 flex-grow order-3">
          Buy now
        </button>
        <div className="heart-icon size-9 border rounded-lg flex justify-center items-center cursor-pointer order-2">
          <CiHeart size={28} />
        </div>
      </div>
    </div>
  );
}
