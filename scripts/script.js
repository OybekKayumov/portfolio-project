// mobile menu
const menuOpenButton = document.querySelector('#menu-open-icon');
const menuCloseButton = document.querySelector('#menu-close-icon');
const mobileMenuList = document.querySelector('#mobile-menu');
const documentBody = document.querySelector('body');
const menuItems = document.querySelectorAll('.option');

menuOpenButton.addEventListener('click', () => {
  mobileMenuList.style.display = 'block';
  documentBody.style.overflow = 'hidden';
});

menuCloseButton.addEventListener('click', () => {
  mobileMenuList.style.display = 'none';
  documentBody.style.overflow = '';
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    mobileMenuList.style.display = 'none';
    documentBody.style.overflow = '';
  });
});
// mobile menu end

//popup menu
const works = [
  {
    projectTitle: 'Tonic',
    projectClient: 'canopy',
    projectRole: 'Back End Dev',
    projectYear: '2015',
    projectSnapshotDesktop: './images/desk-works1.png',
    projectSnapshotMobile: './images/works1.png',
    projectDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    projectTechnologies: ['html', 'css', 'javascript', 'github', 'ruby', 'bootsrap'],
    livelink: 'https://oybekkayumov.github.io/portfolio-project',
    sourcelink: 'https://github.com/OybekKayumov/portfolio-project',
  },
  {
    projectTitle: 'Multi-post stories',
    projectClient: 'canopy2',
    projectRole: 'Back End Dev',
    projectYear: '2016',
    projectSnapshotDesktop: './images/desk-works2.png',
    projectSnapshotMobile: './images/works2.png',
    projectDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    projectTechnologies: ['html', 'css', 'javascript'],
    livelink: 'https://oybekkayumov.github.io/portfolio-project/',
    sourcelink: 'https://github.com/OybekKayumov/portfolio-project',
  },
  {
    projectTitle: 'Tonic',
    projectClient: 'canopy3',
    projectRole: 'Back End Dev',
    projectYear: '2017',
    projectSnapshotDesktop: './images/desk-works3.png',
    projectSnapshotMobile: './images/works3.png',
    projectDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    projectTechnologies: ['html', 'css', 'javascript'],
    livelink: 'https://oybekkayumov.github.io/portfolio-project/',
    sourcelink: 'https://github.com/OybekKayumov/portfolio-project',
  },
  {
    projectTitle: 'Multi-post stories',
    projectClient: 'canopy4',
    projectRole: 'Back End Dev',
    projectYear: '2018',
    projectSnapshotDesktop: './images/desk-works4.png',
    projectSnapshotMobile: './images/works4.png',
    projectDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    projectTechnologies: ['html', 'css', 'javascript', 'Bootsrap'],
    livelink: 'https://oybekkayumov.github.io/portfolio-project/',
    sourcelink: 'https://github.com/OybekKayumov/portfolio-project',
  },
];

const worksContainer = document.querySelector('.works-container');

works.forEach((work, index) => {
  let newIndex = index + 1;
  let item = document.createElement('div');
  let card = document.createElement('div');
  item.className = 'item';
  card.className = 'card';
  card.innerHTML = `<div class="card-body">
              <div  class="card-featured-image-container">
                <img
                  src=${work.projectSnapshotMobile}
                  class="image1"
                  alt="Tonic website screenshot"
                />
                <img
                  src=${work.projectSnapshotDesktop}
                  class="image2"
                  alt="Nature website screenshot"
                />
              </div>

              <div class="card-info">
                <h3 class="card-title">${work.projectTitle}</h3>

                <div class="canopy-part">
                  <div class="canopy">
                    <h3 class="desktop-facebook">${work.projectClient}</h3>
                    <h3 class="canopy-mobile">${work.projectClient}</h3>
                  </div>
                 
                  <ul class="roles-ul">
                    <li class="role">${work.projectRole}</li>
                    <li class="role">${work.projectYear}</li>
                  </ul>
                  
                </div>

                <div>
                  <p class="desktop-p-experiment">
                   ${work.projectDescription}
                  </p>
                  <p class="p-deskribe mobile-p-deskribe">
                    ${work.projectDescription}
                  </p>
                </div>

                <div>
               <ul class="project-card-technologies tags-ul"> </ul>
                </div>
                <div>
                  <button
                    class="btn btn-enabled-tonic1 see-project"
                    id=${'project' + newIndex}
                  >
                    See Project
                  </button>
                </div>
              </div>
            </div>`;
  item.appendChild(card);
  worksContainer.appendChild(item);
});

let technologyList = document.querySelectorAll('.project-card-technologies');
let technologyListArray = Array.from(technologyList);

technologyListArray.forEach((projectTechnologyList, index) => {
  let listItem;
  works[index].projectTechnologies.map((technology) => {
    listItem = document.createElement('li');
    listItem.className = 'tag';
    listItem.innerHTML = `<a href="#">${technology}</a>`;
    technologyList[index].appendChild(listItem);
  });
});

const seeProjectBtns = document.querySelectorAll('.see-project');
let modalCloseButton;
// const modalCover = document.querySelector('.popup-cover');


// const projectTitle = document.querySelector('#project-title');
// const projectClient = document.querySelector('#project-client');
// const projectRole = document.querySelector('#project-role');
// const projectYear = document.querySelector('#project-year');
// const projectSnapshot = document.querySelector('#project-snapshot');
// const projectDescription = document.querySelector('#project-description');
// const projectTechnologies = document.querySelector('#project-technologies');

seeProjectBtns.forEach((seeProjectBtn) => {
  seeProjectBtn.addEventListener('click', () => {
    let projectId = seeProjectBtn.id;

    // populateModalContent(parseInt(projectId.substring(projectId.length - 1), 10) - 1);
    createModal(parseInt(projectId.substring(projectId.length - 1), 10) - 1);

    const modalCover = document.querySelector('.popup-cover');
    modalCloseButton = document.querySelector('#modal-close-icon');
    modalCover.style.display = 'block';
    documentBody.style.overflow = 'hidden';
  });
});

function createModal(index) {
  let popupCover = document.createElement('div');
  popupCover.className = 'popup-cover';
  popupCover.innerHTML = `<div class="modal">
            <button id="modal-close-icon" class="close-modal">
              <i class="bi bi-x"></i>
            </button>
            <h3 class="project-title" id="project-title">${works[index].projectTitle}</h3>

            <div class="modal-header">
              <h3 class="project-client" id="project-client">${works[index].projectClient}</h3>
              <ul class="role-year-ul">
                <li class="project-role" id="project-role">${works[index].projectRole}</li>
                <li class="project-year" id="project-year">${works[index].projectYear}</li>
              </ul>
            </div>
            <div class="featured-image-container">
              <img
                id="project-snapshot"
                class="featured-image"
                src=${works[index].projectSnapshotDesktop}
                alt="professional art printing website screenshot"
              />
            </div>
            <div class="project-details">
              <div class="project-description-div">
                <p class="modal-description" id="project-description">
                  ${works[index].projectDescription}
                </p>
              </div>
              <div class="technologies-buttons">
                <div>
                  <ul class="tags-ul" id="project-technologies"></ul>
                </div>
                <div class="modal-see-btn">
                
                  <button class="btn project-live" id="project-live">
                    <a href="http://www.google.com">
                      See live
                      <img src="./images/popup-work/Live-icon.svg" alt="live icon" />
                    </a>

                  </button>

                  <button class="btn project-source" id="project-source">
                  <a href="http://www.google.com">
                      See Source
                      <img src="./images/popup-work/Github-icon.svg" alt="github icon" />
                    </a>                    
                  </button>
                </div>
              </div>
            </div>`;
  worksContainer.appendChild(popupCover);
  
}


console.log(modalCloseButton)


// function populateModalContent(index) {
//   projectTitle.innerHTML = works[index].projectTitle;
//   projectClient.innerHTML = works[index].projectClient;
//   projectRole.innerHTML = works[index].projectRole;
//   projectYear.innerHTML = works[index].projectYear;
//   projectSnapshot.src = works[index].projectSnapshotDesktop;
//   projectDescription.innerHTML = works[index].projectDescription;

//   let listItem;

//   works[index].projectTechnologies.map((technology) => {
//     listItem = document.createElement('li');
//     listItem.className = 'tag';
//     listItem.innerHTML = '<a href="#">' + technology + '</a>';
//     projectTechnologies.appendChild(listItem);
//   });
// }

modalCloseButton.addEventListener('click', () => {
  projectTechnologies.innerHTML = '';
  modalCover.style.display = 'none';
  documentBody.style.overflow = '';
});

// function createProjectCard(index) {}
