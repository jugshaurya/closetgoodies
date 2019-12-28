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
      imageUrl: `https://picsum.photos/id/${idCount + i}/200/300`,
      price: getRandomPrice()
    };
  }
  idCount += howMany;
  return arrayToFill;
};

const SHOP_DATA = {
  men: {
    shoes: {
      id: "men-shoes",
      title: "Shoes",
      items: getItems(10, "shoe")
    },
    socks: {
      id: "men-socks",
      title: "Socks",
      items: getItems(10, "sock")
    },
    jeans: {
      id: "men-jeans",
      title: "Jeans",
      items: getItems(10, "jean")
    },
    trousers: {
      id: "men-trousers",
      title: "trousers",
      items: getItems(10, "trouser")
    },
    jackets: {
      id: "men-jackets",
      title: "Jackets",
      items: getItems(10, "jacket")
    },
    hats: {
      id: "men-hats",
      title: "Hats",
      items: getItems(10, "hat")
    },
    shirt: {
      id: "men-shirt",
      title: "Shirt",
      items: getItems(10, "shirt")
    },
    tshirt: {
      id: "men-tshirt",
      title: "T-shirt",
      items: getItems(10, "t-shirt")
    },
    watches: {
      id: "men-watches",
      title: "watches",
      items: getItems(10, "watch")
    }
  },
  women: {
    shoes: {
      id: "women-shoes",
      title: "Shoes",
      items: getItems(10, "shoe")
    },
    socks: {
      id: "women-socks",
      title: "Socks",
      items: getItems(10, "sock")
    },
    jeans: {
      id: "women-jeans",
      title: "Jeans",
      items: getItems(10, "jean")
    },
    trousers: {
      id: "women-trousers",
      title: "trousers",
      items: getItems(10, "trouser")
    },
    jackets: {
      id: "women-jackets",
      title: "Jackets",
      items: getItems(10, "jacket")
    },
    hats: {
      id: "women-hats",
      title: "Hats",
      items: getItems(10, "hat")
    },
    shirt: {
      id: "women-shirt",
      title: "Shirt",
      items: getItems(10, "shirt")
    },
    tshirt: {
      id: "women-tshirt",
      title: "T-shirt",
      items: getItems(10, "t-shirt")
    },
    watches: {
      id: "women-watches",
      title: "watches",
      items: getItems(10, "watch")
    }
  },
  boys: {
    shoes: {
      id: "boys-shoes",
      title: "Shoes",
      items: getItems(10, "shoe")
    },
    socks: {
      id: "boys-socks",
      title: "Socks",
      items: getItems(10, "sock")
    },
    jeans: {
      id: "boys-jeans",
      title: "Jeans",
      items: getItems(10, "jean")
    },
    trousers: {
      id: "boys-trousers",
      title: "trousers",
      items: getItems(10, "trouser")
    },
    jackets: {
      id: "boys-jackets",
      title: "Jackets",
      items: getItems(10, "jacket")
    },
    hats: {
      id: "boys-hats",
      title: "Hats",
      items: getItems(10, "hat")
    },
    shirt: {
      id: "boys-shirt",
      title: "Shirt",
      items: getItems(10, "shirt")
    },
    tshirt: {
      id: "boys-tshirt",
      title: "T-shirt",
      items: getItems(10, "t-shirt")
    },
    watches: {
      id: "boys-watches",
      title: "watches",
      items: getItems(10, "watch")
    }
  },
  girls: {
    shoes: {
      id: "girls-shoes",
      title: "Shoes",
      items: getItems(10, "shoe")
    },
    socks: {
      id: "girls-socks",
      title: "Socks",
      items: getItems(10, "sock")
    },
    jeans: {
      id: "girls-jeans",
      title: "Jeans",
      items: getItems(10, "jean")
    },
    trousers: {
      id: "girls-trousers",
      title: "trousers",
      items: getItems(10, "trouser")
    },
    jackets: {
      id: "girls-jackets",
      title: "Jackets",
      items: getItems(10, "jacket")
    },
    hats: {
      id: "girls-hats",
      title: "Hats",
      items: getItems(10, "hat")
    },
    shirt: {
      id: "girls-shirt",
      title: "Shirt",
      items: getItems(10, "shirt")
    },
    tshirt: {
      id: "girls-tshirt",
      title: "T-shirt",
      items: getItems(10, "t-shirt")
    },
    watches: {
      id: "girls-watches",
      title: "watches",
      items: getItems(10, "watch")
    }
  }
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
    console.log(err);
  }
);
