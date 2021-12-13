let menuOpenButton = document.querySelector("#menu-open-icon");
let menuCloseButton = document.querySelector("#menu-close-icon");
let mobileMenuList = document.querySelector("#mobile-menu");
let documentBody = document.querySelector("body");

menuOpenButton.addEventListener("click", () => {
  console.log("Display: ", mobileMenuList.style.display);
  mobileMenuList.style.display = "block";
  documentBody.style.overflow = "hidden";
});

menuCloseButton.addEventListener("click", () => {
  console.log("Display: ", mobileMenuList.style.display);
  mobileMenuList.style.display = "none";
  documentBody.style.overflow = "";
});
