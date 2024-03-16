import IconLocation from "./assets/location.svg";
import IconTime from "./assets/clock.svg";

export function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  //Hero Section

  const hero = document.createElement("div");
  hero.classList.add("hero");

  const mainTitle = document.createElement("h2");
  mainTitle.classList.add("main__title");
  mainTitle.textContent = `Enjoy the exquisite taste of traditional sushi made by the infamous Chef Sensen!`;

  const subTitle = document.createElement("h3");
  subTitle.classList.add("sub__title");
  subTitle.textContent = `Authentic and affordable!`;

  hero.appendChild(mainTitle);
  hero.appendChild(subTitle);

  home.appendChild(hero);

  // Operation Section

  const operations = document.createElement("div");
  operations.classList.add("operations");

  const location = document.createElement("div");
  location.classList.add("location");

  const locationIcon = document.createElement("img");
  locationIcon.src = IconLocation;
  locationIcon.alt = "Location Icon";

  const locContainer = document.createElement("div");
  locContainer.classList.add("img-container");
  locContainer.appendChild(locationIcon);

  const locationDetails = document.createElement("div");
  locationDetails.classList.add("location__details");

  const locLine1 = document.createElement("p");
  locLine1.textContent = "420 Toyen Rd";
  const locLine2 = document.createElement("p");
  locLine2.textContent = "Indiana, IN 42069";

  locationDetails.appendChild(locLine1);
  locationDetails.appendChild(locLine2);

  location.appendChild(locContainer);
  location.appendChild(locationDetails);

  const operatingHours = document.createElement("div");
  operatingHours.classList.add("operating__hours");

  const timeIcon = document.createElement("img");
  timeIcon.src = IconTime;
  timeIcon.alt = "Time icon";

  const timeContainer = document.createElement("div");
  timeContainer.classList.add("img-container");
  timeContainer.appendChild(timeIcon);

  const hours = document.createElement("div");
  hours.classList.add("hours");

  const weekdayHours = document.createElement("p");
  weekdayHours.textContent = "Mon-Fri : 10am - 9pm";

  const weekendHours = document.createElement("p");
  weekendHours.textContent = "Sat-Sun: 12pm-8pm";

  hours.appendChild(weekdayHours);
  hours.appendChild(weekendHours);

  operatingHours.appendChild(timeContainer);
  operatingHours.appendChild(hours);

  operations.appendChild(location);
  operations.appendChild(operatingHours);

  home.appendChild(operations);

  return home;
}
