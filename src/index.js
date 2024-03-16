import "./style.css";
import { createHome } from "./home";
import { createMenu } from "./menu";

const content = document.getElementById("content");

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");

document.addEventListener("DOMContentLoaded", () => {
  const home = createHome();
  content.appendChild(home);
});

homeBtn.addEventListener("click", () => {
  if (content.firstChild) {
    content.removeChild(content.firstElementChild);
  }

  const home = createHome();
  content.appendChild(home);
});

menuBtn.addEventListener("click", () => {
  if (content.firstChild) {
    content.removeChild(content.firstElementChild);
  }

  const menu = createMenu();
  content.appendChild(menu);
});
