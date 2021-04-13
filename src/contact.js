export default function contact(content) {
  const mainDiv = document.getElementById(content);

  const firstChild = document.createElement('div');
  firstChild.id = 'heading-container';
  firstChild.className = 'heading col-white mx-auto w-50 pt-8 d-flex justify-content-center';
  firstChild.textContent = 'Contact Us';

  const secondChild = document.createElement('div');
  secondChild.id = 'para-container';
  secondChild.className = 'para w-75 mx-auto mt-5 d-flex justify-content-center';
  secondChild.textContent = "fb, gmail, +9230309004717";

  mainDiv.appendChild(firstChild);
  mainDiv.appendChild(secondChild);
}
