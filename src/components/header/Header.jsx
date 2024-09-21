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
import PopupSearch from "./PopupSearch";
import { RightSideBar } from "../RightSideBar";
export default function Header() {
  const [show, setShow] = React.useState(false);
  const [searchPopup, setSearchPopup] = React.useState(false);
  const [rightSideBar, setRightSideBar] = React.useState(false);

  return (
    <>
      <nav className="z-30 px-4 md:px-8 py-1 md:py-2 flex items-center border-b-2 border-black sticky top-0">
        <div className="lg:hidden flex justify-center items-center ">
          <button onClick={() => setShow(true)}>
            <HiMenu size={32} />
          </button>
        </div>
        <div className="logo flex-grow flex">
          <span className="text-2xl md:text-3xl mx-auto lg:m-0">Buzy</span>
        </div>
        <div className="mr-5">
          <Navbar show={show} setShow={setShow} />
        </div>
        <div className="md:border lg:hover:rounded-full  flex items-center justify-center md:text-lg cursor-pointer lg: w-[10rem]">
          <button
            className="hover:bg-green-400 lg:hover:bg-inherit flex justify-center lg:justify-between items-center p-1 rounded-full lg:w-full"
            onClick={() => {
              setSearchPopup(true);
            }}
          >
            <span className="hidden md:block mx-1 md:mx-2">Search</span>
            <CiSearch size={32} />
          </button>
        </div>
        <div className="mx-2">
          <button className="flex justify-center items-center p-1 bg-slate-400">
            <CiUser size={32} />
          </button>

          {/* <button className="hover:bg-green-400 flex justify-center items-center p-1 rounded-full">
          <FaRegUserCircle size={25} />
        </button> */}
        </div>
        <div className="cursor-pointer ">
          <button
            className="flex justify-center items-center p-1 bg-slate-400"
            onClick={() => setRightSideBar(true)}
          >
            <CiShoppingCart size={32} className="md:size-[36px]s" />
          </button>
        </div>
        {rightSideBar && <RightSideBar setRightSideBar={setRightSideBar} />}
      </nav>
      {searchPopup && <PopupSearch setSearchPopup={setSearchPopup} />}
    </>
  );
}
`https://thefootballfactory.com.au/product/real-madrid-home-jersey-2017-18/`;
