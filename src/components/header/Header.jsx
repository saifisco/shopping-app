import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
// import { BsCaretDownFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
// import { FaUser } from "react-icons/fa6";
// import links from "../../services/links";
// import Dropdown from "./Dropdown";
import Navbar from "./Navbar";
export default function Header() {
  const [show, setShow] = React.useState(false);

  return (
    <nav className="z-30 px-4 md:px-8 py-1 md:py-2 flex items-center border-b-2 border-black relative">
      <div className="lg:hidden flex justify-center items-center ">
        <button onClick={() => setShow(true)}>
          <HiMenu size={25} />
        </button>
      </div>
      <div className="logo flex-grow flex">
        <span className="text-2xl md:text-3xl mx-auto lg:m-0">Buzy</span>
      </div>
      <div className="mr-5">
        <Navbar show={show} setShow={setShow} />
      </div>
      <div
        className="md:border lg:hover:rounded-full  flex items-center justify-center md:text-lg cursor-pointer lg:transition"
        style={{ transition: "all .2s ease" }}
      >
        <button className="hover:bg-green-400 lg:hover:bg-inherit flex justify-center items-center p-1 rounded-full">
          <span className="hidden md:block mx-1 md:mx-2">Search</span>
          <CiSearch size={25} />
        </button>
      </div>
      <div className="mx-1 md:mx-4x">
        <button className="hover:bg-green-400 flex justify-center items-center p-1 rounded-full">
          <CiUser size={25} />
        </button>

        {/* <button className="hover:bg-green-400 flex justify-center items-center p-1 rounded-full">
          <FaRegUserCircle size={25} />
        </button> */}
      </div>
      <div className="cursor-pointer ">
        <button className="hover:bg-green-400 flex justify-center items-center p-1 rounded-full">
          <CiShoppingCart size={25} className="md:size-[36px]" />
        </button>
      </div>
    </nav>
  );
}
`https://thefootballfactory.com.au/product/real-madrid-home-jersey-2017-18/`;
