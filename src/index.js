import './style.css';
import './tabs';
import './page_load';
import cont from './contact';
import createMenu from './menu';

const contact = document.getElementById('contactt');
const home = document.getElementById('homee');
const menu = document.getElementById('menuu');
const heading = document.getElementById('heading-container');
const para = document.getElementById('para-container');
const btun = document.getElementById('btn-container');
cont('bg-col-container');
const contactHeading = document.getElementById('contact-container');
const contactMedia = document.getElementById('media-container');
const contactNumber = document.getElementById('number-container');
const handle = document.getElementById('handles-container');
createMenu('bg-col-container');
const menuContainer = document.getElementById('menu-container');

const displayContact = () => {
  contactHeading.classList.remove('dis-none');
  contactMedia.classList.remove('dis-none');
  contactNumber.classList.remove('dis-none');
  handle.classList.remove('dis-none');
};

const hideContact = () => {
  if (!contactHeading.classList.contains('dis-none')) {
    contactHeading.classList.add('dis-none');
    contactMedia.classList.add('dis-none');
    contactNumber.classList.add('dis-none');
    handle.classList.add('dis-none');
  }
};

const hideHomeContact = () => {
  hideContact();
  if (!heading.classList.contains('dis-none')) {
    heading.classList.add('dis-none');
    para.classList.add('dis-none');
    btun.classList.add('dis-none');
  }
};

const showMenu = () => {
  menuContainer.classList.remove('dis-none');
};

const hideMenu = () => {
  if (!menuContainer.classList.contains('dis-none')) {
    menuContainer.classList.add('dis-none');
  }
};

contact.addEventListener('click', () => {
  heading.classList.add('dis-none');
  para.classList.add('dis-none');
  btun.classList.add('dis-none');
  displayContact();
  hideMenu();
});

home.addEventListener('click', () => {
  heading.classList.remove('dis-none');
  para.classList.remove('dis-none');
  btun.classList.remove('dis-none');
  hideContact();
  hideMenu();
});

menu.addEventListener('click', () => {
  hideHomeContact();
  showMenu();
});

for (let i = 1; i <= 12; i += 1) {
  const str = `c-${i}`;
  const str2 = `${i}`;

  const col = document.getElementById(str);
  const q = document.getElementById(str2);

  col.addEventListener('mouseover', () => {
    q.classList.remove('dis-none');
  }, false);


  col.addEventListener('mouseout', () => {
    if (!q.classList.contains('dis-none')) {
      q.classList.add('dis-none');
    }
  }, false);
}