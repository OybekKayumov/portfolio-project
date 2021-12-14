// mobile menu
const menuOpenButton = document.querySelector("#menu-open-icon");
const menuCloseButton = document.querySelector("#menu-close-icon");
const mobileMenuList = document.querySelector("#mobile-menu");
const documentBody = document.querySelector("body");
const menuItems = document.querySelectorAll(".option");

menuOpenButton.addEventListener("click", () => {
  mobileMenuList.style.display = "block";
  documentBody.style.overflow = "hidden";
});

menuCloseButton.addEventListener("click", () => {
  mobileMenuList.style.display = "none";
  documentBody.style.overflow = "";
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    mobileMenuList.style.display = "none";
    documentBody.style.overflow = "";
  });
});
// mobile menu end

//popup menu
const works = [
  {
    projectTitle: "Tonic",
    projectClient: "canopy",
    projectRole: "Back End Dev",
    projectYear: "2015",
    projectSnapshot: "./images/works1.png",
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    projectTechnologies: ["html", "css", "javascript"],
  },
  {
    projectTitle: "Multi-post stories",
    projectClient: "canopy2",
    projectRole: "Back End Dev",
    projectYear: "2015",
    projectSnapshot: "./images/works2.png",
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    projectTechnologies: ["html", "css", "javascript"],
  },
  {
    projectTitle: "Tonic",
    projectClient: "canopy3",
    projectRole: "Back End Dev",
    projectYear: "2015",
    projectSnapshot: "./images/works3.png",
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    projectTechnologies: ["html", "css", "javascript"],
  },
  {
    projectTitle: "Multi-post stories",
    projectClient: "canopy4",
    projectRole: "Back End Dev",
    projectYear: "2015",
    projectSnapshot: "./images/works4.png",
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    projectTechnologies: ["html", "css", "javascript"],
  },
];
