const pageLoad = (() => {
  const mainDiv = document.getElementById("content");

  const container = document.createElement('div');
  container.id = 'container';
  container.className = 'w-100 vh-100 bg-pic';

  const parentDiv = document.createElement('div');
  parentDiv.id = 'bg-col-container';
  parentDiv.className = 'back-color w-100 h-100';

  const firstChild = document.createElement('div');
  firstChild.id = 'heading-container';
  firstChild.className = 'heading col-white mx-auto w-50 pt-8 d-flex justify-content-center';
  firstChild.textContent = 'Restaurant EatIn';

  const secondChild = document.createElement('div');
  secondChild.id = 'para-container';
  secondChild.className = 'para w-75 mx-auto mt-5 d-flex justify-content-center';
  secondChild.textContent = "A great restaurant is one that just makes you feel like you're not sure whether you went out or you came home and confuses you. If it can do both of those things at the same time, you're hooked.";

  parentDiv.appendChild(firstChild);
  parentDiv.appendChild(secondChild);
  container.appendChild(parentDiv);
  mainDiv.appendChild(container);
})();

export default pageLoad;
