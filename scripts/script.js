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

// popup menu
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
  const newIndex = index + 1;
  const projectId = `project${newIndex}`;
  const item = document.createElement('div');
  const card = document.createElement('div');
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
                    <h3 class="project-client">${work.projectClient}</h3>
                  </div>
                  <ul class="roles-ul">
                    <li class="project-role">${work.projectRole}</li>
                    <li class="project-year">${work.projectYear}</li>
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
                    id=${projectId}
                  >
                    See Project
                  </button>
                </div>
              </div>
            </div>`;
  item.appendChild(card);
  worksContainer.appendChild(item);
});

const technologyList = document.querySelectorAll('.project-card-technologies');
const technologyListArray = Array.from(technologyList);

technologyListArray.forEach((projectTechnologyList, index) => {
  let listItem;
  works[index].projectTechnologies.map((technology) => {
    listItem = document.createElement('li');
    listItem.className = 'tag';
    listItem.innerHTML = `<a href="#">${technology}</a>`;
    technologyList[index].appendChild(listItem);
    return 0;
  });
});

function createModal(index) {
  const popupCover = document.createElement('div');
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
                  <ul class="project-modal-technologies tags-ul" id="project-technologies"></ul>
                </div>
                <div class="modal-see-btn">
                
                  <button class="btn project-live" id="project-live">
                    <a href=${works[index].livelink}>
                      See live
                      <img src="./images/popup-work/Live-icon.svg" alt="live icon" />
                    </a>

                  </button>

                  <button class="btn project-source" id="project-source">
                  <a href=${works[index].sourcelink}>
                      See Source
                      <img src="./images/popup-work/Github-icon.svg" alt="github icon" />
                    </a>                    
                  </button>
                </div>
              </div>
            </div>`;
  worksContainer.appendChild(popupCover);
}

function populateModalTechnologyList(index) {
  const modalTechnology = document.querySelector('.project-modal-technologies');
  let listItem;

  works[index].projectTechnologies.map((technology) => {
    listItem = document.createElement('li');
    listItem.className = 'tag';
    listItem.innerHTML = `<a href="#">${technology}</a>`;
    modalTechnology.appendChild(listItem);
    return 0;
  });
}

function isCloseButtonClicked(modalCover) {
  if (modalCover.style.display === 'block') {
    const modalCloseButton = document.querySelector('#modal-close-icon');
    const modalTechnology = document.querySelector('.project-modal-technologies');

    modalCloseButton.addEventListener('click', () => {
      modalCover.style.display = 'none';
      modalTechnology.innerHTML = '';
      documentBody.style.overflow = '';
      worksContainer.removeChild(modalCover);
    });
  }
}

const seeProjectBtns = document.querySelectorAll('.see-project');

seeProjectBtns.forEach((seeProjectBtn) => {
  seeProjectBtn.addEventListener('click', () => {
    const projectId = seeProjectBtn.id;
    const index = parseInt(projectId.substring(projectId.length - 1), 10) - 1;
    createModal(index);

    const modalCover = document.querySelector('.popup-cover');
    modalCover.style.display = 'block';
    populateModalTechnologyList(index);
    isCloseButtonClicked(modalCover);
    documentBody.style.overflow = 'hidden';
  });
});

// end popup

// form validation

const form = document.querySelector('#form-contact');
const labelError = document.querySelector('.error-messages');

const EMAIL_INVALID = 'Please enter email address in lower case letters';

function validateEmail(email) {
  const emailValue = email.value.trim();
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;

  if (!emailRegex.test(emailValue)) {
    return false;
  }
  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { email } = form.elements;
  const isValidEmail = validateEmail(email);

  if (isValidEmail) {
    labelError.style.display = 'none';
  } else {
    labelError.style.display = 'block';
    labelError.textContent = `${EMAIL_INVALID}!\n`;
  }
});
