import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
export const Footer = () => {
  return (
    <div className="bg-slate-950 text-white px-4 py-2">
      <div className="flex flex-col gap-2">
        <div className="">
          <h2 className="text-xl uppercase">Contact us</h2>
          <ul className="text-sm space-y-1 ml-2 py-1 px-2 rounded-lg border-l-2 border-green-500 mt-1">
            <li>We are Hiring</li>
            <li>Selling at Us</li>
            <li>Custom Merch</li>
            <li>Polo Republica Works</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl uppercase">help</h2>
          <ul className="text-sm space-y-1 ml-2 py-1 px-2 rounded-lg border-l-2 border-green-500 mt-1">
            <li>How To Order</li>
            <li>How To Use Gift Card</li>
            <li>Returns & Exchanges</li>
            <li>Shipping Details</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl uppercase">What,s New</h2>
          <ul className="text-sm space-y-1 ml-2 py-1 px-2 rounded-lg border-l-2 border-green-500 mt-1">
            <li>Become a Brand Ambassador</li>
            <li>Customer Reviews</li>
            <li>Why we do what we do</li>
            <li>Company News</li>
            <li>Where do we bring Clothes?</li>
            <li>Shop Instagram</li>
          </ul>
        </div>
      </div>
      <div className="copyright border-y flex gap-3 justify-center mt-4 py-4">
        <FaInstagram size={24} />
        <CiFacebook size={24} />
        <FaWhatsapp size={24} />
        {/* <FaYoutube /> */}
        <AiOutlineYoutube size={24} />
      </div>
      <div className="py-2">
        <ul className="flex flex-wrap gap-5 text-sm  justify-center items-center">
          <li className="active:underline underline-offset-2">Refund policy</li>
          <li className="active:underline underline-offset-2">
            Privacy policy
          </li>
          <li className="active:underline underline-offset-2">
            Terms of service
          </li>
          <li className="active:underline underline-offset-2">
            Shipping policy
          </li>
        </ul>
      </div>
      <div className="flex capitalize">
        <span className="mx-auto">© BUZY ({new Date().getFullYear()})</span>
      </div>
    </div>
  );
};
