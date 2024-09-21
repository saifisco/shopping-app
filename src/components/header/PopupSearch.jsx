import React from "react";
import { ProductService } from "../../services/products";
console.log();
export default function PopupSearch({ setSearchPopup }) {
  const [product, setProduct] = React.useState(
    ProductService.getProductsMini()
  );
  return (
    <div
      className="fixed inset-0 w-full h-full z-40 flex justify-center items-start"
      style={{ background: "#00000055" }}
    >
      <div className="bg-white w-1/2 p-5 mt-6 rounded-lg relative">
        <div>
          <input
            type="text"
            placeholder="search.."
            className="border border-red-600 w-full outline-none text-lg px-2 py-1 h-[48px]"
          />
        </div>
        <div>
          <h3>Items shown</h3>
          <ul className="">
            {product.map((item, i) => (
              <li key={i}>{item.name}</li>
            ))}
            <li className="border">
              <button className="w-full bg-green-400 rounded-md py-1 text-sm capitalize">
                see more
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3>Trending</h3>
          <ul className="">
            {product.map((item, i) => (
              <li key={i}>{item.name}</li>
            ))}
            <li className="border">
              <button className="w-full bg-green-400 rounded-md py-1 text-sm capitalize">
                see more
              </button>
            </li>
          </ul>
        </div>
        <button
          className="absolute bg-slate-600 size-8 rounded-full top-0 -right-10"
          onClick={() => setSearchPopup(false)}
        >
          x
        </button>
      </div>
    </div>
  );
}
