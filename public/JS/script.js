// Get Current Year Using JS

const currentYear = document.querySelectorAll(".current_year");
const date = new Date();
const year = date.getFullYear();

currentYear.forEach((newYear) => {
  newYear.innerHTML = year;
});

// Page scroll into view starts here

// Wait for the page to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get the element with id "page_id"
  const pageElementId = document.getElementById("page_id");

  // Scroll the element into view
  pageElementId.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Page scroll into view ends here

// js for nav starts here

const primaryNav = document.querySelector(".nav_menu");
const toggleNav = document.querySelector(".mobile_nav_toggle");

toggleNav.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    toggleNav.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    toggleNav.setAttribute("aria-expanded", false);
  }
});

// js for nav ends here

// Nav tab starts here
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".nav_list");
console.log(activePage);

navLinks.forEach((link) => {
  // check if any of the links has the current page pathname as part of its href
  if (activePage.startsWith(link.getAttribute("href"))) {
    // if found, add the class nav_link_active to its class list
    link.classList.add("nav_link_active");
  }
});

// Nav tab stop here

// js for the header bg image change starts here

let header = document.querySelector(".header");
// The next line is used to select the after pseudo element of header
let headerAfter = window.getComputedStyle(header, "::after");

var i = 0;
var images = [];
var slideTime = 7000; // 7 seconds

images[0] = "/image/school8_2100x1400-transformed.jpeg";
images[1] = "/image/school2_2100x1400-transformed.jpeg";
images[2] = "/image/school3_2100x1400-transformed.jpeg";
images[3] = "/image/school4_2100x1400-transformed.jpeg";
images[4] = "/image/school5_2100x1400-transformed.jpeg";
images[5] = "/image/school1_2100x1400-transformed.jpeg";
images[6] = "/image/school6_2100x1400-transformed.jpeg";

function changePicture() {
  header.style.setProperty("--backgroundImg", "url(" + images[i] + ")");

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(changePicture, slideTime);
}

// As soon as the window loads, call the changePicture function
window.onload = changePicture;

// js for the header bg image change ends here

// General animation for display on scroll starts here.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show_scroll_animation");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hide_scroll_animation");
hiddenElements.forEach((el) => observer.observe(el));

// General animation on scroll ends here.

// Scroll Animation for the administrative staffs starts here.

const cards = document.querySelectorAll(".staff_container");

window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  const trigerButton = (window.innerHeight / 5) * 4;

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < trigerButton) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}

// Scroll Animation for the administrative staffs ends here.

// Social Media Analytics Starts here

const displayNums = document.querySelectorAll(".stats");

displayNums.forEach((num) => {
  num.innerHTML = "0";

  const generateDataTarget = () => {
    const dataTarget = +num.getAttribute("data-target");
    const c = +num.innerHTML;
    const increment = dataTarget / 200;

    if (c < dataTarget) {
      num.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(generateDataTarget, 20);
    } else {
      num.innerHTML = dataTarget;
    }
  };

  generateDataTarget();
});

// Social Media Analytics ends here

// Search Widget Starts here
const searchContainer = document.querySelector(".search-container");
const searchInput = document.getElementById("searchQuery");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", (event) => {
  if (!searchInput.value.trim()) {
    event.preventDefault(); // Prevent form submission
  }
});

searchButton.addEventListener("click", () => {
  searchContainer.classList.add("active");
  searchInput.focus();
});

// Search Widget ends here

// FAQs Starts here

const bottons = document.querySelectorAll(".faq-toggle");

bottons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");

    // change icon
    const arrow = btn.querySelector("i");
    if (arrow.className === "uil uil-plus") {
      arrow.className = "uil uil-times";
    } else {
      arrow.className = "uil uil-plus";
    }
  });
});

// FAQs ends here

// Ripple button Starts here

const ripple_btn = document.querySelectorAll(".ripple_button");

ripple_btn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // This gives the distance of where you clicked on the button from the top and left of the window
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y);

    // This gives the location of the button in the window
    const btnCoordinate = btn.getBoundingClientRect();
    const buttonTop = btnCoordinate.top;
    const buttonLeft = btnCoordinate.left;

    // console.log(btnCoordinate);
    // console.log(buttonTop, buttonLeft);

    const innerTop = y - buttonTop;
    const innerLeft = x - buttonLeft;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = innerTop + "px";
    circle.style.left = innerLeft + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});

// Ripple button ends here

// Footer animation Starts here

const footerOpen = document.querySelector(".footer_open");
const footerClose = document.querySelector(".footer_close");
const footerUp = document.querySelector(".footer_up");
const footerDown = document.querySelector(".footer_down");

footerOpen.addEventListener("click", () => {
  footerUp.style.display = "block";
  footerOpen.style.display = "none";
  footerDown.style.paddingTop = "2rem";
});

footerClose.addEventListener("click", () => {
  footerUp.style.display = "none";
  footerOpen.style.display = "block";
  footerDown.style.paddingTop = "6rem";
});

// Footer animation Ends here
