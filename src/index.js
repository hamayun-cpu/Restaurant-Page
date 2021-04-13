import css from "./style.css";
import tabs from './tabs.js'; 
import pageLoad from './page_load.js'; 
import cont from './contact.js'; 

const contact = document.getElementById('contactt');
const home = document.getElementById('homee');
const heading = document.getElementById('heading-container');
const para = document.getElementById('para-container');
const mainDiv = document.getElementById('bg-col-container');
let counter = 0;

contact.addEventListener('click', (e) => {
  heading.classList.add('dis-none');
  para.classList.add('dis-none');
  cont('bg-col-container')
});

home.addEventListener('click', (e) => {
  heading.classList.remove('dis-none');
  para.classList.remove('dis-none');
});
