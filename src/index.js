import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab) 

dom.i2svg() 
import css from "./style.css";
import tabs from './tabs.js'; 
import pageLoad from './page_load.js'; 
import cont from './contact.js'; 
import createMenu from './menu.js'

const contact = document.getElementById('contactt');
const home = document.getElementById('homee');
const menu = document.getElementById('menuu');
const heading = document.getElementById('heading-container');
const para = document.getElementById('para-container');
cont('bg-col-container');
const contactHeading = document.getElementById('contact-container');
const contactMedia = document.getElementById('media-container');
const contactNumber = document.getElementById('number-container');
const handle = document.getElementById('handles-container');
createMenu('bg-col-container');
const menuContainer = document.getElementById('menu-container');

function displayContact () {
  contactHeading.classList.remove('dis-none');
  contactMedia.classList.remove('dis-none');
  contactNumber.classList.remove('dis-none');
  handle.classList.remove('dis-none');
}

function hideContact () {
  if (! contactHeading.classList.contains('dis-none')) {
    contactHeading.classList.add('dis-none');
    contactMedia.classList.add('dis-none');
    contactNumber.classList.add('dis-none');
    handle.classList.add('dis-none');
  }
}

function hideHomeContact () {
  hideContact();
  if (! heading.classList.contains('dis-none')) {
    heading.classList.add('dis-none');
    para.classList.add('dis-none');
  }
}

function showMenu() {
  menuContainer.classList.remove('dis-none');
}

function hideMenu() {
  if (! menuContainer.classList.contains('dis-none')) {
    menuContainer.classList.add('dis-none');
  }
}

function logMouseOver() {
  document.getElementById('one').classList.remove('dis-none');
}

function logMouseOut() {
  const q = document.getElementById('one');
  if (! q.classList.contains('dis-none')) {
    q.classList.add('dis-none');
  }
}

contact.addEventListener('click', (e) => {
  heading.classList.add('dis-none');
  para.classList.add('dis-none');
  displayContact();
  hideMenu();
});

home.addEventListener('click', (e) => {
    heading.classList.remove('dis-none');
    para.classList.remove('dis-none');
    hideContact();
    hideMenu();
});

menu.addEventListener('click', (e) => {
  hideHomeContact();
  showMenu();
});


const col1 = document.getElementById('c-11');
col1.addEventListener("mouseover", logMouseOver, false);
col1.addEventListener("mouseout", logMouseOut, false);