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
    projectSnapshot: './images/works1.png',
    projectDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    projectTechnologies: ['html', 'css', 'javascript'],
  },
  {
    projectTitle: 'Multi-post stories',
    projectClient: 'canopy2',
    projectRole: 'Back End Dev',
    projectYear: '2016',
    projectSnapshot: './images/works2.png',
    projectDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    projectTechnologies: ['html', 'css', 'javascript'],
  },
  {
    projectTitle: 'Tonic',
    projectClient: 'canopy3',
    projectRole: 'Back End Dev',
    projectYear: '2017',
    projectSnapshot: './images/works3.png',
    projectDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    projectTechnologies: ['html', 'css', 'javascript'],
  },
  {
    projectTitle: 'Multi-post stories',
    projectClient: 'canopy4',
    projectRole: 'Back End Dev',
    projectYear: '2018',
    projectSnapshot: './images/works4.png',
    projectDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    projectTechnologies: ['html', 'css', 'javascript'],
  },
];
const seeProjectBtns = document.querySelectorAll('.see-project');
const modalCover = document.querySelector('.popup-cover');
const modalCloseButton = document.querySelector('.close-modal');

const projectTitle = document.querySelector('#project-title');
const projectClient = document.querySelector('#project-client');
const projectRole = document.querySelector('#project-role');
const projectYear = document.querySelector('#project-year');
const projectSnapshot = document.querySelector('#project-snapshot');
const projectDescription = document.querySelector('#project-description');

seeProjectBtns.forEach((seeProjectBtn) => {
  seeProjectBtn.addEventListener('click', () => {
    let projectId = seeProjectBtn.id;
    let projectIndex =
      parseInt(projectId.substring(projectId.length - 1), 10) - 1;

    projectTitle.innerHTML = works[projectIndex].projectTitle;
    projectClient.innerHTML = works[projectIndex].projectClient;
    projectRole.innerHTML = works[projectIndex].projectRole;
    projectYear.innerHTML = works[projectIndex].projectYear;
    projectSnapshot.src = works[projectIndex].projectSnapshot;
    projectDescription.innerHTML = works[projectIndex].projectDescription;

    modalCover.style.display = 'block';
    documentBody.style.overflow = 'hidden';
  });
});

modalCloseButton.addEventListener('click', () => {
  modalCover.style.display = 'none';
  documentBody.style.overflow = '';
});
