const links = [
  {
    name: "New arrivals",
  },
  {
    name: "Men",
    subLinks: [
      {
        name: "tops",
        subLinks: [
          { name: "tees" },
          { name: "polos" },
          { name: "shirts" },
          { name: "outwear" },
        ],
      },
      {
        name: "bottoms",
        subLinks: [
          { name: "jeans" },
          { name: "Trousers & Pants" },
          { name: "Shorts" },
        ],
      },
      {
        name: "footwear",
        subLinks: [{ name: "shoes" }, { name: "socks" }],
      },
    ],
  },
  {
    name: "Women",
    subLinks: [
      {
        name: "Ready to Wear",
        subLinks: [
          { name: "polos" },
          { name: "Dress" },
          { name: "kurti" },
          { name: "outwear" },
        ],
      },
      {
        name: "Activewear",
        subLinks: [{ name: "tops" }, { name: "bottoms" }],
      },
      {
        name: "Other",
        subLinks: [{ name: "burkas" }, { name: "ejabs" }],
      },
    ],
  },
  {
    name: "jewelry",
    subLinks: [{ name: "golds" }, { name: "silvers" }],
  },
  {
    name: "Accessories",
    subLinks: [
      { name: "caps & hats" },
      { name: "bags, belts & wallets" },
      { name: "Eye wear" },
      { name: "gloves & scarves" },
    ],
  },
];
export default links;
// console.log(links[links.length - 1].subLinks[0].subLinks);
// console.log(links[1].subLinks[0].subLinks);
