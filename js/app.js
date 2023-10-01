function makeActive(elem) {
  // remove "active" class from all divs
  var divs = document.querySelectorAll(".slide-box");
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.remove("active");
  }

  // add "active" class to clicked element
  elem.classList.add("active");
}

// Close Side Bar

function closeSideBar() {
  let side = document.querySelector(".side-bar");
  side.classList.toggle("close-side");
  side.classList.remove("open-side");
}
// Open Side Bar
function openSide() {
  let side = document.querySelector(".side-bar");
  side.classList.toggle("open-side");
}
// Change Nav On Scroll

let Nav = document.querySelector(".big-nav-upper");
// add a scroll event listener to the window object
window.addEventListener("scroll", () => {
  // calculate the percentage of the page that has been scrolled
  const scrollPercentage =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

  // check if the user has scrolled 30% or more of the page
  if (scrollPercentage >= 1) {
    // add a class to the element
    Nav.classList.add("big-nav-fixed");
  } else {
    // remove the class if the user scrolls back up
    Nav.classList.remove("big-nav-fixed");
  }
});
function hovering() {
  document.getElementById("act").classList.toggle("active");
}
function tabing() {

  document.getElementById("pills-2-tab").classList.toggle("active");
  if (!document.getElementById("p1").classList.contains("active")) {
    document.getElementById("p2").classList.remove("active");
    document.getElementById("p2").classList.remove("show");
    document.getElementById("p1").classList.toggle("active");
    document.getElementById("p1").classList.toggle("show");

  }


  if (!document.getElementById("pills-1-tab").classList.contains("active")) {
    document.getElementById("pills-1-tab").classList.toggle("active");
    document.getElementById.aria - selected === "true";

  }


}
function tabing2() {
  if (!document.getElementById("p2").classList.contains("active")) {
    document.getElementById("p1").classList.remove("active");
    document.getElementById("p1").classList.remove("show");
    document.getElementById("p2").classList.toggle("active");
    document.getElementById("p2").classList.toggle("show");

  }
  document.getElementById("pills-1-tab").classList.remove("active");
  if (!document.getElementById("pills-2-tab").classList.contains("active")) {
    document.getElementById("pills-2-tab").classList.toggle("active");
    document.getElementById("pills-2-tab").aria - selected === "true";

  }


}

function web() {
  document.getElementById("all").classList.remove("cbp-filter-item-active");
  document.getElementById("logodesign").classList.remove("cbp-filter-item-active");
  document.getElementById("mobileapp").classList.remove("cbp-filter-item-active");
  document.getElementById("development").classList.remove("cbp-filter-item-active");
  document.getElementById("photographing").classList.remove("cbp-filter-item-active");
  document.getElementById("drawing").classList.remove("cbp-filter-item-active");
  if (!document.getElementById("webdesign").classList.contains("cbp-filter-item-active")) {
    document.getElementById("webdesign").classList.toggle("cbp-filter-item-active");


  }
}


function logo() {
  document.getElementById("all").classList.remove("cbp-filter-item-active");
  document.getElementById("webdesign").classList.remove("cbp-filter-item-active");
  document.getElementById("mobileapp").classList.remove("cbp-filter-item-active");
  document.getElementById("development").classList.remove("cbp-filter-item-active");
  document.getElementById("photographing").classList.remove("cbp-filter-item-active");
  document.getElementById("drawing").classList.remove("cbp-filter-item-active");
  if (!document.getElementById("logodesign").classList.contains("cbp-filter-item-active")) {
    document.getElementById("logodesign").classList.toggle("cbp-filter-item-active");


  }
}
function app() {
  document.getElementById("all").classList.remove("cbp-filter-item-active");
  document.getElementById("webdesign").classList.remove("cbp-filter-item-active");
  document.getElementById("logodesign").classList.remove("cbp-filter-item-active");
  document.getElementById("development").classList.remove("cbp-filter-item-active");
  document.getElementById("photographing").classList.remove("cbp-filter-item-active");
  document.getElementById("drawing").classList.remove("cbp-filter-item-active");
  if (!document.getElementById("mobileapp").classList.contains("cbp-filter-item-active")) {
    document.getElementById("mobileapp").classList.toggle("cbp-filter-item-active");


  }
}
function devl() {
  document.getElementById("all").classList.remove("cbp-filter-item-active");
  document.getElementById("webdesign").classList.remove("cbp-filter-item-active");
  document.getElementById("logodesign").classList.remove("cbp-filter-item-active");
  document.getElementById("mobileapp").classList.remove("cbp-filter-item-active");
  document.getElementById("photographing").classList.remove("cbp-filter-item-active");
  document.getElementById("drawing").classList.remove("cbp-filter-item-active");
  if (!document.getElementById("development").classList.contains("cbp-filter-item-active")) {
    document.getElementById("development").classList.toggle("cbp-filter-item-active");


  }
}
function phot() {
  document.getElementById("all").classList.remove("cbp-filter-item-active");
  document.getElementById("webdesign").classList.remove("cbp-filter-item-active");
  document.getElementById("logodesign").classList.remove("cbp-filter-item-active");
  document.getElementById("mobileapp").classList.remove("cbp-filter-item-active");
  document.getElementById("development").classList.remove("cbp-filter-item-active");
  document.getElementById("drawing").classList.remove("cbp-filter-item-active");
  if (!document.getElementById("photographing").classList.contains("cbp-filter-item-active")) {
    document.getElementById("photographing").classList.toggle("cbp-filter-item-active");


  }
}
function draw() {
  document.getElementById("all").classList.remove("cbp-filter-item-active");
  document.getElementById("webdesign").classList.remove("cbp-filter-item-active");
  document.getElementById("logodesign").classList.remove("cbp-filter-item-active");
  document.getElementById("mobileapp").classList.remove("cbp-filter-item-active");
  document.getElementById("development").classList.remove("cbp-filter-item-active");
  document.getElementById("photographing").classList.remove("cbp-filter-item-active");
  if (!document.getElementById("drawing").classList.contains("cbp-filter-item-active")) {
    document.getElementById("drawing").classList.toggle("cbp-filter-item-active");


  }
}


function dendin() {
  console.log("mh");

  document.getElementById("webdesign").classList.remove("cbp-filter-item-active");
  document.getElementById("logodesign").classList.remove("cbp-filter-item-active");
  document.getElementById("mobileapp").classList.remove("cbp-filter-item-active");
  document.getElementById("development").classList.remove("cbp-filter-item-active");
  document.getElementById("photographing").classList.remove("cbp-filter-item-active");
  document.getElementById("drawing").classList.remove("cbp-filter-item-active");
  if (!document.getElementById("all").classList.contains("cbp-filter-item-active")) {
    document.getElementById("all").classList.toggle("cbp-filter-item-active");


  }
}