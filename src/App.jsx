// import React from "react";
// import { CiShoppingCart, CiSearch } from "react-icons/ci";
// import { Button } from "primereact/button";
import Header from "./components/header/Header.jsx";
import Navbar from "./components/header/Navbar.jsx";
import Product from "./components/Product.jsx";
import MatchMedia from "./mediaQuery/MatchMedia.jsx";
import links from "./services/links.jsx";
// import Star from "./components/Star.jsx";
import Card from "./components/Card.jsx";
import Slider from "./components/Slider";

// async function getData() {
//   let res = await fetch("https://fakestoreapi.com/products");
//   let data = await res.json();
//   return data;
// }
// getData().then((data) => {
//   for (let i of data) {
//     console.log(i["category"]);
//   }
// });

import pic1 from "/Banners/pic1.jpg";
import pic2 from "/Banners/pic2.jpg";
import pic3 from "/Banners/pic3.jpg";
import pic4 from "/Banners/pic4.jpg";
import { Footer } from "./components/Footer.jsx";
const images = [pic1, pic2, pic3, pic4];
const App = () => {
  return (
    <>
      <div>
        <Header />
        <div className="p-4">
          <Slider images={images} />
          <div className="mt-4">
            <h1 className="mb-2 font-semibold capitalize">New arrivals</h1>
            <div className="overflow-x-scroll flex gap-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Card key={i} />
                ))}
            </div>
          </div>
          <div className="mt-4">
            <h1 className="mb-2 font-semibold capitalize">Best sells</h1>
            <div className="overflow-x-scroll flex gap-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Card key={i} />
                ))}
            </div>
          </div>
          <div className="mt-4">
            <h1 className="mb-2 font-semibold capitalize">real madrid</h1>
            <div className="overflow-x-scroll flex gap-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Card key={i} />
                ))}
            </div>
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default App;
