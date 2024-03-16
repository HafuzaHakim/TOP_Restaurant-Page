import Phone from "./assets/phone.svg";
import Email from "./assets/email.svg";
import Mitch from "./assets/grutus.jpeg";
import Sensen from "./assets/matul.jpg";

class Contact {
  constructor(name, phone, email, src, alt) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.src = src;
    this.alt = alt;
  }
}

const siMatul = new Contact(
  "Matul",
  "123 456 7890",
  "matul@sushi-sensen.com",
  Mitch,
  "Mitch Pic"
);

const siSensen = new Contact(
  "Sensen",
  "123 456 7890",
  "sensen@sushi-sensen.com",
  Sensen,
  "Sensen Pic"
);

const contactList = [siSensen, siMatul];

export function createContact() {
  const contactPage = document.createElement("div");
  contactPage.classList.add("contact");

  contactList.forEach((contact) => {
    const contactCard = document.createElement("div");
    contactCard.classList.add("contact__card");

    const leftCol = document.createElement("div");
    leftCol.classList.add("left__col");
    const userPic = document.createElement("img");
    userPic.src = contact.src;
    userPic.alt = contact.alt;
    leftCol.appendChild(userPic);

    const rightCol = document.createElement("div");
    rightCol.classList.add("right__col");

    const contName = document.createElement("p");
    contName.classList.add("contact__name");
    contName.textContent = contact.name;

    const firstRow = document.createElement("div");
    firstRow.classList.add("first__row");

    const phoneContainer = document.createElement("div");
    const phoneIcon = document.createElement("img");
    phoneIcon.src = Phone;
    phoneIcon.alt = "Phone Icon";
    phoneContainer.appendChild(phoneIcon);

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = contact.phone;

    firstRow.appendChild(phoneContainer);
    firstRow.appendChild(phoneNumber);

    const secondRow = document.createElement("div");
    secondRow.classList.add("second__row");

    const emailContainer = document.createElement("div");
    const emailIcon = document.createElement("img");
    emailIcon.src = Email;
    emailIcon.alt = "Email Icon";
    emailContainer.appendChild(emailIcon);

    const emailAddress = document.createElement("p");
    emailAddress.textContent = contact.email;

    secondRow.appendChild(emailContainer);
    secondRow.appendChild(emailAddress);

    rightCol.appendChild(contName);
    rightCol.appendChild(firstRow);
    rightCol.appendChild(secondRow);

    contactCard.appendChild(leftCol);
    contactCard.appendChild(rightCol);

    contactPage.appendChild(contactCard);
  });

  return contactPage;
}
