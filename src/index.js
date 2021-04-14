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

const contact = document.getElementById('contactt');
const home = document.getElementById('homee');
const heading = document.getElementById('heading-container');
const para = document.getElementById('para-container');
cont('bg-col-container');
const contactHeading = document.getElementById('contact-container');
const contactMedia = document.getElementById('media-container');
const contactNumber = document.getElementById('number-container');
const handle = document.getElementById('handles-container');

function displayContact () {
  contactHeading.classList.remove('dis-none');
  contactMedia.classList.remove('dis-none');
  contactNumber.classList.remove('dis-none');
  handle.classList.remove('dis-none');
}

function hideContact () {
  contactHeading.classList.add('dis-none');
    contactMedia.classList.add('dis-none');
    contactNumber.classList.add('dis-none');
    handle.classList.add('dis-none');
}

contact.addEventListener('click', (e) => {
  heading.classList.add('dis-none');
  para.classList.add('dis-none');
  displayContact();
});

home.addEventListener('click', (e) => {
    heading.classList.remove('dis-none');
    para.classList.remove('dis-none');
    hideContact();
});
