import Salmon from "./assets/salmon.png";
import Onigiri from "./assets/onigiri.png";
import Tuna from "./assets/tuna.png";
import Unagi from "./assets/unagi.png";

class Sushi {
  constructor(name, description, price, src, alt) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.src = src;
    this.alt = alt;
  }
}

const menuSalmon = new Sushi(
  "Salmon Roll",
  `Sushi Rice, Seaweed, Salmon, Mayo, Special Sauce`,
  `$7.50`,
  Salmon,
  `Salmon Roll Sushi`
);

const menuTuna = new Sushi(
  "Tuna Roll",
  `Sushi Rice, Seaweed, Tuna, Roe, Avocado, Mayo, Special Sauce`,
  `$8.50`,
  Tuna,
  `Tuna Roll Sushi`
);

const menuUnagi = new Sushi(
  "Unagi Teriyaki",
  `Sushi Rice, Unagi, Teriyaki Sauce`,
  `$9.50`,
  Unagi,
  `Unagi Teriyaki Sushi`
);

const menuOigiri = new Sushi(
  "Onigiri",
  `Sushi Rice, Seaweed, Dried Plum`,
  `$4.00`,
  Onigiri,
  `Onigiri Sushi`
);

const availableMenu = [menuSalmon, menuTuna, menuUnagi, menuOigiri];

export function createMenu() {
  const menuPage = document.createElement("div");
  menuPage.classList.add("menu__container");

  availableMenu.forEach((menu) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const menuImgContainer = document.createElement("div");
    menuImgContainer.classList.add("menu__img");
    const menuImg = document.createElement("img");
    menuImg.src = menu.src;
    menuImg.alt = menu.alt;
    menuImgContainer.appendChild(menuImg);

    const menuDetails = document.createElement("div");
    menuDetails.classList.add("menu__details");

    const menuName = document.createElement("h4");
    menuName.textContent = menu.name;

    const menuPrice = document.createElement("h5");
    menuPrice.textContent = menu.price;

    const menuDesc = document.createElement("p");
    menuDesc.textContent = menu.description;

    menuDetails.appendChild(menuName);
    menuDetails.appendChild(menuPrice);
    menuDetails.appendChild(menuDesc);

    card.appendChild(menuImgContainer);
    card.appendChild(menuDetails);

    menuPage.appendChild(card);
  });

  return menuPage;
}
