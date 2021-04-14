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


contact.addEventListener('click', (e) => {
  heading.classList.add('dis-none');
  para.classList.add('dis-none');
  contactHeading.classList.remove('dis-none');
  contactMedia.classList.remove('dis-none');
});

home.addEventListener('click', (e) => {
    heading.classList.remove('dis-none');
    para.classList.remove('dis-none');
    contactHeading.classList.add('dis-none');
    contactMedia.classList.add('dis-none');
});
