const fs = require("fs");
const MAX = 200;
const getRandomPrice = () => {
  return Math.floor(Math.random() * Math.floor(MAX)) + 400;
};

const getrandomName = suffix => {
  const firstName = [
    "Angora",
    "Satin",
    "Baft",
    "Baldachin",
    "Batiste",
    "Corduroy",
    "Crinoline",
    "Cotton",
    "Linen",
    "Thread",
    "Damask",
    "Fabric",
    "Pattern",
    "Denim",
    "blue",
    "Dungarees",
    "Flannel",
    "Wool",
    "Milled",
    "Gabardine"
  ];
  const secondName = [
    "jacquard",
    "loom",
    "glossy",
    "rubber",
    "mohair",
    "yarn",
    "moleskin",
    "surface",
    "weave",
    "stiff",
    "organza",
    "sateen",
    "tweed",
    "fleck",
    "velvet",
    "short",
    "venise",
    "lace",
    "chiffon",
    "nylon"
  ];
  const firstRandom = Math.floor(Math.random() * 20);
  const secondRandom = Math.floor(Math.random() * 20);
  return firstName[firstRandom] + " " + secondName[secondRandom] + " " + suffix;
};

let idCount = 1;
const getItems = (howMany, name) => {
  const arrayToFill = [];
  for (let i = 0; i < howMany; i++) {
    arrayToFill[i] = {
      id: idCount + i,
      name: getrandomName(name),
      imageURL: `https://picsum.photos/id/${idCount + i}/200/300`,
      price: getRandomPrice()
    };
  }
  idCount += howMany;
  return arrayToFill;
};

const SHOP_DATA = {
  men: [
    {
      id: "men-shoes",
      title: "Shoes",
      items: getItems(10, "shoe")
    },
    {
      id: "men-socks",
      title: "Socks",
      items: getItems(10, "sock")
    },
    {
      id: "men-jeans",
      title: "Jeans",
      items: getItems(10, "jean")
    },
    {
      id: "men-trousers",
      title: "trousers",
      items: getItems(10, "trouser")
    },
    {
      id: "men-jackets",
      title: "Jackets",
      items: getItems(10, "jacket")
    },
    {
      id: "men-hats",
      title: "Hats",
      items: getItems(10, "hat")
    },
    {
      id: "men-shirt",
      title: "Shirt",
      items: getItems(10, "shirt")
    },
    {
      id: "men-tshirt",
      title: "T-shirt",
      items: getItems(10, "t-shirt")
    },
    {
      id: "men-watches",
      title: "watches",
      items: getItems(10, "watch")
    }
  ],
  women: [
    {
      id: "women-shoes",
      title: "Shoes",
      items: getItems(10, "shoe")
    },
    {
      id: "women-socks",
      title: "Socks",
      items: getItems(10, "sock")
    },
    {
      id: "women-jeans",
      title: "Jeans",
      items: getItems(10, "jean")
    },
    {
      id: "women-trousers",
      title: "trousers",
      items: getItems(10, "trouser")
    },
    {
      id: "women-jackets",
      title: "Jackets",
      items: getItems(10, "jacket")
    },
    {
      id: "women-hats",
      title: "Hats",
      items: getItems(10, "hat")
    },
    {
      id: "women-shirt",
      title: "Shirt",
      items: getItems(10, "shirt")
    },
    {
      id: "women-tshirt",
      title: "T-shirt",
      items: getItems(10, "t-shirt")
    },
    {
      id: "women-watches",
      title: "watches",
      items: getItems(10, "watch")
    }
  ],
  boys: [
    {
      id: "boys-shoes",
      title: "Shoes",
      items: getItems(10, "shoe")
    },
    {
      id: "boys-socks",
      title: "Socks",
      items: getItems(10, "sock")
    },
    {
      id: "boys-jeans",
      title: "Jeans",
      items: getItems(10, "jean")
    },
    {
      id: "boys-trousers",
      title: "trousers",
      items: getItems(10, "trouser")
    },
    {
      id: "boys-jackets",
      title: "Jackets",
      items: getItems(10, "jacket")
    },
    {
      id: "boys-hats",
      title: "Hats",
      items: getItems(10, "hat")
    },
    {
      id: "boys-shirt",
      title: "Shirt",
      items: getItems(10, "shirt")
    },
    {
      id: "boys-tshirt",
      title: "T-shirt",
      items: getItems(10, "t-shirt")
    },
    {
      id: "boys-watches",
      title: "watches",
      items: getItems(10, "watch")
    }
  ],
  girls: [
    {
      id: "girls-shoes",
      title: "Shoes",
      items: getItems(10, "shoe")
    },
    {
      id: "girls-socks",
      title: "Socks",
      items: getItems(10, "sock")
    },
    {
      id: "girls-jeans",
      title: "Jeans",
      items: getItems(10, "jean")
    },
    {
      id: "girls-trousers",
      title: "trousers",
      items: getItems(10, "trouser")
    },
    {
      id: "girls-jackets",
      title: "Jackets",
      items: getItems(10, "jacket")
    },
    {
      id: "girls-hats",
      title: "Hats",
      items: getItems(10, "hat")
    },
    {
      id: "girls-shirt",
      title: "Shirt",
      items: getItems(10, "shirt")
    },
    {
      id: "girls-tshirt",
      title: "T-shirt",
      items: getItems(10, "t-shirt")
    },
    {
      id: "girls-watches",
      title: "watches",
      items: getItems(10, "watch")
    }
  ],
  new: [
    {
      id: "new-shoes",
      title: "Shoes",
      items: getItems(10, "shoe")
    },
    {
      id: "new-socks",
      title: "Socks",
      items: getItems(10, "sock")
    },
    {
      id: "new-jeans",
      title: "Jeans",
      items: getItems(10, "jean")
    },
    {
      id: "new-trousers",
      title: "trousers",
      items: getItems(10, "trouser")
    },
    {
      id: "new-jackets",
      title: "Jackets",
      items: getItems(10, "jacket")
    },
    {
      id: "new-hats",
      title: "Hats",
      items: getItems(10, "hat")
    },
    {
      id: "new-shirt",
      title: "Shirt",
      items: getItems(10, "shirt")
    },
    {
      id: "new-tshirt",
      title: "T-shirt",
      items: getItems(10, "t-shirt")
    },
    {
      id: "new-watches",
      title: "watches",
      items: getItems(10, "watch")
    }
  ]
};

console.log(SHOP_DATA);
// fs.writeFile(
//   "shop.data.json",
//   JSON.stringify(SHOP_DATA, null, 2),
//   "utf-8",
//   err => {
//     console.log(err);
//   }
// );

const util = require("util");
// https://nodejs.org/en/knowledge/getting-started/how-to-use-util-inspect/
fs.writeFile(
  "./src/firebase/addDataHelper/shop.data.js",
  "const SHOP_DATA = " +
    util.inspect(SHOP_DATA, false, null) +
    "\nexport default SHOP_DATA",
  "utf-8",
  err => {
    console.error(err);
  }
);
