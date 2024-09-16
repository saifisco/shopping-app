// import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
//----------------------
import { Rating } from "primereact/rating";
import kit from "/kit.jpg";
import { CiHeart } from "react-icons/ci";
import React from "react";
//
let sizeChoice = ["S", "M", "L", "XL"];
let placeholderImages = [
  "https://placehold.co/100x100?text=Imgage 1",
  "https://placehold.co/100x100?text=Imgage 2",
  "https://placehold.co/100x100?text=Imgage 3",
  "https://placehold.co/100x100?text=Imgage 4",
  "https://placehold.co/100x100?text=Imgage 5",
  "https://placehold.co/100x100?text=Imgage 6",
];
export default function Product() {
  return (
    <div className="w-full mt-2.5">
      <div className="flex flex-wrapc md:gap-5">
        <div className="flex-grow  p-3 border hover:shadow-md rounded-lg flex justify-between items-center">
          <div className="p-2 border h-[450px] w-[120px]space-y-2 overflow-y-scroll ">
            {placeholderImages.map((e, i) => (
              <SquareImgage key={i} image={e} />
            ))}
          </div>
          <div className=" w-full">
            {/* <div className="border border-[red] w-full h-full">d</div> */}
            <img src={kit} className="h-[420px]z w-full object-cover " alt="" />
          </div>
        </div>
        <div className="flex-grow basis-[50%] p-6 border hover:shadow-md rounded-lg ">
          <div className="flex">
            <div className="text-2xl ">
              <span>
                Real Madrid Home Jersey 17/18 Youth this is real madrid kits
              </span>
            </div>
            <div className="text-nowrap text-xl ml-10">
              <span>In Stock</span>
            </div>
          </div>
          {/* Rating starts */}
          <div className="flex flex-grow mb-8 mt-4 flex-wrap gap-[10px]">
            <Rating
              className="flex gap-[4px] ml-auto my-auto text-yellow-400"
              cancel={false}
              value={3}
              stars={5}
              disabled
            />
            <div className="rating text-[14px] text-nowrap">13 Reviews</div>
          </div>
          <div className="flex gap-[10px] items-end text-[2rem] text-nowrap">
            <div className="text-slate-500 relative">
              Rs 1999
              <div className="border-b-2 border-black absolute w-full top-1/2"></div>
            </div>
            <div className="disc-price text-lg">Rs 1299</div>
            <div className="disc ml-auto text-right">-20%</div>
          </div>
          {/* inputs */}
          <div className="">
            <div className="mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className="space-x-2 flex text-sm">
                <Size size={"S"} checked />
                <Size size={"M"} />
                <Size size={"L"} />
                <Size size={"XL"} />
              </div>
              {/* size measurement */}
              <div className="text-lg mt-3">
                <button className="px-1 hover:underline underline-offset-4">
                  Size guide...
                </button>
              </div>
              <div className="">
                <ItemsChoosen />
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="h-11 buttons flex gap-3 text-[1.25rem] capitalize text-wrap">
            <button className="border rounded-lg flex-grow">Add to cart</button>
            <button className="border rounded-lg bg-green-500  flex-grow">
              Buy now
            </button>
            <button className="border cursor-pointer flex justify-center items-center rounded-lg">
              <CiHeart size={44} />
            </button>
          </div>
        </div>
        <div className="hidden description border-2 border-red-800">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla at
          quod exercitationem impedit ratione sint maiores deleniti repellat eos
          quas, quidem expedita! Iure nostrum sed aspernatur harum voluptatum
          rerum ratione?
        </div>
      </div>
    </div>
  );
}
function SquareImgage({ image }) {
  return (
    <div className="size-[100px] border border-black cursor-pointer">
      <img src={image} alt="" />
    </div>
  );
}
function Size({ size, checked }) {
  console.log(checked);
  return (
    <label className="cursor-pointer">
      <input
        className="sr-only peer"
        name="size"
        type="radio"
        value="xs"
        defaultChecked={checked}
      />
      <div className="text-[1.25rem] w-[42px] h-[42px] border rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-green-500 peer-checked:text-black">
        {size}
      </div>
    </label>
  );
}
// Size.defaultProps = {};
function ItemsChoosen() {
  React.useEffect(() => {
    console.log(inStock, counter);
  });
  let [counter, setCounter] = React.useState(1);
  let [inStock, setInStock] = React.useState(8);
  return (
    <div className="flex text-xl justify-center">
      <button
        className="border size-11 flex items-center justify-center rounded-lg disabled:text-slate-500 disabled:cursor-not-allowed"
        disabled={counter > 1 ? false : true}
        onClick={() => {
          console.log(counter);
          if (counter > 1) {
            setCounter((prevCounter) => prevCounter - 1);
          }
        }}
      >
        <FaMinus size={18} />
      </button>
      <input
        value={counter}
        type="text"
        readOnly
        className="border-y text-center w-20 h- outline-none cursor-default"
      />
      <button
        className="border size-11 flex items-center justify-center rounded-lg disabled:text-slate-500 disabled:cursor-not-allowed"
        disabled={counter < inStock ? false : true}
        onClick={() => {
          if (counter < inStock) {
            setCounter((prevCounter) => prevCounter + 1);
          }
        }}
      >
        <FaPlus size={18} />
      </button>
    </div>
  );
}
