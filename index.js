const json = {
  categories: [
    "SPORTSWEAR",
    "MENS",
    "WOMENS",
    "KIDS",
    "FASHION",
    "HOUSEHOLDS",
    "INTERIORS",
    "CLOTHING",
    "BAGS",
    "SHOES",
  ],
  brands: [
    { brandName: "ACNE", count: "50" },
    { brandName: "GRUNE ERDE", count: "56" },
    { brandName: "ALBIRO", count: "27" },
    { brandName: "RONHILL", count: "32" },
    { brandName: "ODDMOLLY", count: "5" },
    { brandName: "BOUDESTIJN", count: "9" },
    { brandName: "ROSCH", count: "4" },
  ],
  products: [
    {
      name: "product1",
      photo: "./icons/products/product1.jpg",
      sale: false,
      price: "56$",
      description: "Easy Polo Black Edition",
    },
    {
      name: "product2",
      photo: "./icons/products/product2.jpg",
      sale: true,
      price: "56$",
      description: "Easy Polo Black Edition",
    },
    {
      name: "product3",
      photo: "./icons/products/product3.jpg",
      sale: true,
      price: "56$",
      description: "Easy Polo Black Edition",
    },
    {
      name: "product4",
      photo: "./icons/products/product4.jpg",
      sale: false,
      price: "56$",
      description: "Easy Polo Black Edition",
    },
    {
      name: "product5",
      photo: "./icons/products/product5.jpg",
      sale: true,
      price: "56$",
      description: "Easy Polo Black Edition",
    },
    {
      name: "product6",
      photo: "./icons/products/product6.jpg",
      sale: false,
      price: "56$",
      description: "Easy Polo Black Edition",
    },
  ],
  tshirt: [
    {
      name: "product1",
      photo: "./icons/products/product1.jpg",
      price: "56$",
      description: "Easy Polo Black Edition",
    },
    {
      name: "product4",
      photo: "./icons/products/product4.jpg",
      price: "56$",
      description: "Easy Polo Black Edition",
    },
    {
      name: "product5",
      photo: "./icons/products/product5.jpg",
      price: "56$",
      description: "Easy Polo Black Edition",
    },
    {
      name: "product6",
      photo: "./icons/products/product6.jpg",
      price: "56$",
      description: "Easy Polo Black Edition",
    },
  ],
  sunglass: [
    {
      name: "product3",
      photo: "./icons/products/product3.jpg",
      price: "56$",
      description: "Easy Polo Black Edition",
    },
    {
      name: "product4",
      photo: "./icons/products/product4.jpg",
      price: "56$",
      description: "Easy Polo Black Edition",
    },
    {
      name: "product5",
      photo: "./icons/products/product5.jpg",
      price: "56$",
      description: "Easy Polo Black Edition",
    },
    {
      name: "product6",
      photo: "./icons/products/product6.jpg",
      price: "56$",
      description: "Easy Polo Black Edition",
    },
  ],
  blazers: [
    {
      name: "product1",
      photo: "./icons/products/product1.jpg",
      price: "56$",
      description: "Easy Polo Black Edition",
    },
    {
      name: "product2",
      photo: "./icons/products/product2.jpg",
      price: "56$",
      description: "Easy Polo Black Edition",
    },
    {
      name: "product4",
      photo: "./icons/products/product4.jpg",
      price: "56$",
      description: "Easy Polo Black Edition",
    },
    {
      name: "product6",
      photo: "./icons/products/product6.jpg",
      price: "56$",
      description: "Easy Polo Black Edition",
    },
  ],
};

//  Header under logo menu logic.

const headerCountryButton = document.querySelector("#underlogo__firstmenu");
const headerCountryList = document.querySelector("#firstmenu__list");
const countryListChilds = headerCountryList.querySelectorAll("li");

const headerCurrenyButton = document.querySelector("#underlogo__secondmenu");
const headerCurrencyList = document.querySelector("#secondmenu__list");
const currencyListChilds = headerCurrencyList.querySelectorAll("li");

headerCountryButton.addEventListener("click", () => {
  headerCountryList.classList.toggle("hidden");
  if (!headerCurrencyList.classList.contains("hidden")) {
    headerCurrencyList.classList.toggle("hidden");
  }
});
countryListChilds.forEach((elem) => {
  elem.addEventListener("click", () => {
    headerCountryButton.textContent = elem.textContent;
    headerCountryList.classList.toggle("hidden");
  });
});
headerCurrenyButton.addEventListener("click", () => {
  headerCurrencyList.classList.toggle("hidden");
  if (!headerCountryList.classList.contains("hidden")) {
    headerCountryList.classList.toggle("hidden");
  }
});
currencyListChilds.forEach((elem) => {
  elem.addEventListener("click", () => {
    headerCurrenyButton.textContent = elem.textContent;
    headerCurrencyList.classList.toggle("hidden");
  });
});

//  Header burger menu logic.

const burgerMenuButton = document.querySelector("#header__burgermenu");
const burgerMenuList = document.querySelector("#burgermenu__list");

burgerMenuButton.addEventListener("click", () => {
  burgerMenuList.style.height =
    burgerMenuList.style.height === "230px" ? "0px" : "230px";
});

// Categories and brands
const categoriesList = document.querySelector("#categories__list");

json.categories.forEach((elem) => {
  let category = document.createElement("li");
  category.textContent = elem;
  category.classList = "cursor-pointer";
  categoriesList.appendChild(category);
});

const brandsList = document.querySelector("#brands__list");

json.brands.forEach((elem) => {
  let category = document.createElement("li");
  category.innerHTML = `${elem.brandName}<span class="float-right" id="classListSpan">(${elem.count})</span>`;
  category.classList = "cursor-pointer";
  brandsList.appendChild(category);
});

// Products
const productList = document.querySelector("#products");

json.products.forEach((product) => {
  let productForm = document.createElement("div");

  productForm.innerHTML = `
    <div class="relative h-[550px] group flex justify-center group">
    <div
        class=" absolute w-[95%] overflow-hidden group-hover:h-[550px] h-0 top-0 flex invisible group-hover:visible justify-center items-end bg-productHover duration-1000 border-2 text-center z-10">
        <div
            class="${
              product.name
            } buttonBuy absolute flex flex-col justify-center items-center  mb-8 duration-500 z-20">
            <p class=" py-2 text-3xl font-bold text-white">${product.price}</p>
            <p class="text-white py-4 text-lg">${product.description}</p>
            <div
                class="flex justify-center items-center  bg-white space-x-2 w-44 h-10 border-2 border-productHover py-1 px-6 cursor-pointer">
                <img class="w-4 h-4 orangefilter" src="./icons/shopping-cart.png">
                <p class="text-orange-500 text-lg duration-300 ">Add to cart</p>
            </div>
        </div>
    </div>
    <div 
        class="${
          product.name
        } absolute w-[95%] h-[550px] mb-16 top-0 flex flex-col justify-start items-center border-2">
        ${
          product.sale
            ? '<img class="absolute right-0 top-0" src="./icons/sale.png">'
            : ""
        }
        <img class=" px-4 my-4 w-[400px] h-[400px]" src="${product.photo}">
        <p class="text-orange-500 py-2 text-3xl font-bold">${product.price}</p>
        <p>${product.description}</p>
        <div id="button"
            class="flex space-x-2 items-center justify-center border-2 py-1 px-6 my-4 group hover:bg-orange-400 hover:border-orange-400 duration-300">
            <div class="bg-cart w-4 h-4 bg-no-repeat bg-contain group-hover:invert duration-300">
            </div>
            <p class="group-hover:text-white duration-300">Add to cart</p>
        </div>
    </div>
</div>
<div id="options" class="border-b-2 border-r-2 border-l-2 w-[95%] mx-auto py-4 mb-4">
    <div class="flex justify-center items-center space-x-2 group duration-300">
        <img class="w-4 h-4  group-hover:orangefilter duration-100" src="./icons/plus-icon.png">
        <p class=" group-hover:orangefilter duration-100">Add to wishlist</p>
    </div>
    <div class="flex justify-center items-center space-x-2 group duration-300">
        <img class="w-4 h-4  group-hover:orangefilter duration-100" src="./icons/plus-icon.png">
        <p class=" group-hover:orangefilter duration-100">Add to compare</p>
    </div>
</div>

    `;

  productList.appendChild(productForm);
});

// Select options
const itemsList = document.querySelector("#chosenoption__items");
const divForInput = document.querySelector("#items__list");

const changeOutput = (chosenOption) => {
  divForInput.innerHTML = "";
  const data = json[chosenOption];
  const product = document.createElement("div");
  let products = "";
  data.forEach((elem) => {
    products += `<div class="my-12">
        <div class="w-full h-auto border-2 flex flex-col justify-center items-center">
            <img class=" w-screen px-4 my-4" src="${elem.photo}">
            <p class="text-orange-500 py-2 text-3xl font-bold">${elem.price}</p>
            <p>${elem.description}</p>
            <div 
                class="buttonBuy ${elem.name} flex space-x-2 items-center w-40 justify-center bg-buttoncolor py-1 px-6 my-4 group  hover:bg-orangediff duration-300">
                <div
                    class="bg-cart w-4 h-4 bg-no-repeat bg-contain group-hover:invert duration-300 group-hover:contrast-100 contrast-50">
                </div>
                <p class="group-hover:text-white duration-300">Add to cart</p>
            </div>
        </div>
    </div>
    </div>`;
  });
  product.innerHTML = products;
  divForInput.appendChild(product);

  setTimeout(() => {
    divForInput.classList.add("opacity-100");
    divForInput.classList.add("duration-300");
    divForInput.classList.remove("opacity-0");
  }, 500);
};

let active = new Map();
const listOfOptions = document.querySelector("#item__options");
const options = listOfOptions.querySelectorAll("li");

if (active.keys()) {
  changeOutput("tshirt");
  document
    .querySelector("#tshirt")
    .classList.add("bg-orangediff", "text-white");
}

options.forEach((option) => {
  option.addEventListener("click", () => {
    document
      .querySelector("#tshirt")
      .classList.remove("bg-orangediff", "text-white");
    option.classList.toggle("bg-orangediff");
    option.classList.toggle("text-white");
    if (divForInput.classList.contains("opacity-100")) {
      divForInput.classList.remove("opacity-100");
      divForInput.classList.remove("duration-300");
      divForInput.classList.add("opacity-0");
    }
    active.set(option.id, true);
    changeOutput(option.id);

    active.forEach((value, key) => {
      if (!(key == option.id)) {
        active.set(key, false);
        document.querySelector(`#${key}`).classList.remove("bg-orangediff");
        document.querySelector(`#${key}`).classList.remove("text-white");
      } else {
        document.querySelector(`#${key}`).classList.add("bg-orangediff");
        document.querySelector(`#${key}`).classList.add("text-white");
      }
    });
  });
});

const body = document.querySelector("body");
body.addEventListener("click", (e) => {
  if (
    e.target != headerCountryButton &&
    !headerCountryList.classList.contains("hidden")
  ) {
    headerCountryList.classList.toggle("hidden");
  }
  if (
    e.target != headerCurrenyButton &&
    !headerCurrencyList.classList.contains("hidden")
  ) {
    headerCurrencyList.classList.toggle("hidden");
  }
});

// Cart logic

let cartParsed = JSON.parse(sessionStorage.getItem("cart"));

let cart = { ...cartParsed };

let cartTable = document.querySelector("#cart__table");

let cartList = "";

const onLoad = () => {
  cartList = "";
  cartTable.innerHTML = "";
  const firstRow = ` <tr class="w-full text-white bg-orangediff h-16">
  <th class="w-2/5">Item</th>
  <th class="w-1/5">Price</th>
  <th class="w-1/5">Quantity</th>
  <th class="w-1/5">Total</th>
</tr>
  `;
  cartList += firstRow;

  if (cart) {
    Object.entries(cart).forEach((product) => {
      const data = product[1];
      cartList += `
    <tr id="product__incart" class="${
      data.productData.name
    } w-full text-headergray bg-white h-36 max-h-36 border-b-2 border-r-2 border-l-2">
                    <th class="h-36 flex items-center ">
                        <img class="w-1/2 h-2/3" src="${
                          data.productData.photo
                        }">
                        <p class="w-1/2 text-[.8rem]">${
                          data.productData.description
                        }</p>
                    </th>
                    <th class="w-1/5">${data.productData.price}</th>
                    <th class="product__info">
                        <div class="flex flex-col justify-center items-center">
                            <button id="plus" class="h-1/3 w-1/3 bg-orangediff border-orangediff border-2 my-2">+</button>
                            <input id="quantity" class="h-1/3 w-1/3 text-center" value=" ${
                              data.quantity
                            }" type="text">
                            <button id="minus" class="h-1/3 w-1/3 bg-orangediff border-orangediff border-2 my-2">-</button>
                        </div>
                    </th>
                    <th id="price__sum" class="w-1/5"> ${
                      parseInt(data.productData.price) * parseInt(data.quantity)
                    }$</th>
                </tr>
    `;
    });
  } else {
    console.log(cart);
  }
  cartTable.innerHTML += cartList;
  sessionStorage.setItem("cart", JSON.stringify(cart));

  const productInfo = document.querySelectorAll("#product__incart");
  productInfo.forEach((product) => {
    const name = Object.values(product.classList).filter((elem) =>
      elem.includes("product")
    );
    const plus = product.querySelector("#plus");
    const minus = product.querySelector("#minus");
    const sum = product.querySelector("#price__sum");
    const quantity = product.querySelector("#quantity");

    plus.addEventListener("click", () => {
      cart[name].quantity += 1;

      sum.textContent = `${
        parseInt(cart[name].productData.price) * parseInt(cart[name].quantity)
      }$`;
      quantity.value = cart[name].quantity;
      sessionStorage.setItem("cart", JSON.stringify(cart));
    });
    minus.addEventListener("click", () => {
      cart[name].quantity -= 1;
      if (cart[name].quantity == 0) {
        delete cart[name];
        onLoad();
      } else {
        sum.textContent = `${
          parseInt(cart[name].productData.price) * parseInt(cart[name].quantity)
        }$`;
        quantity.value = cart[name].quantity;
        sessionStorage.setItem("cart", JSON.stringify(cart));
      }
    });
  });
};

const buttonsListeners = () => {
  const buyButtons = document.querySelectorAll(".buttonBuy");

  buyButtons.forEach((button) => {
    button.removeEventListener;
    button.addEventListener("click", (e) => {
      const name = Object.values(button.classList).filter((elem) =>
        elem.includes("product")
      );
      const productData = json.products.filter((elem) => {
        if (elem.name == name) {
          return elem;
        }
      })[0];
      if (cart[name]) {
        cart[name].quantity += 1;
      } else {
        cart[name] = { productData, quantity: 1 };
      }
      sessionStorage.setItem("cart", JSON.stringify(cart));
      onLoad();
    });
  });
};
buttonsListeners();

const observer = new MutationObserver(() => {
  buttonsListeners();
});

observer.observe(divForInput, { subtree: true, childList: true });

onLoad();
