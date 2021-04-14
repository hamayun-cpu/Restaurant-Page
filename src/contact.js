export default function contact(content) {
  const mainDiv = document.getElementById(content);

  const firstChild = document.createElement('div');
  firstChild.id = 'contact-container';
  firstChild.className = 'heading col-white mx-auto w-50 pt-8 d-flex justify-content-center dis-none';
  firstChild.textContent = 'Contact Us at';

  const thirdChild = document.createElement('div');
  thirdChild.id = 'number-container';
  thirdChild.className = 'para w-75 mx-auto mt-5 d-flex justify-content-center dis-none';
  thirdChild.textContent = "+92 (402) 337799";

  const fourthChild = document.createElement('div');
  fourthChild.id = 'handles-container';
  fourthChild.className = 'heading col-white mx-auto w-50 pt-8 d-flex justify-content-center dis-none';
  fourthChild.textContent = 'Our Social Media Handles';

  const secondChild = document.createElement('div');
  secondChild.id = 'media-container';
  secondChild.className = 'para w-75 mx-auto mt-5 d-flex justify-content-center dis-none';
  secondChild.innerHTML = `
    <div>
      <a href='#' class='col-white mr-5'><i class="fab fa-facebook-f fa-3x"></i></a>
    </div>
    <div>
      <a href='#' class='col-white ml-5'><i class="fab fa-twitter fa-3x"></i><a/>
    </div>
  `;

  mainDiv.appendChild(firstChild);
  mainDiv.appendChild(thirdChild);
  mainDiv.appendChild(fourthChild);
  mainDiv.appendChild(secondChild);
}
