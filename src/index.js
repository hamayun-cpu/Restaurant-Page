const main_div = document.getElementById("content");

const container = document.createElement('div');
container.id = 'container';
container.className = 'w-100 vh-100 bg-pic';

const parent_div = document.createElement('div');
parent_div.id = 'bg-col-container';
parent_div.className = 'back-color w-100 h-100';

const first_child = document.createElement('div');
first_child.id = 'heading-container';
first_child.className = 'heading col-white mx-auto w-50 pt-5 d-flex justify-content-center';
first_child.textContent = 'Restaurant EatIn';

const second_child = document.createElement('div');
second_child.id = 'para-container';
second_child.className = 'para w-75 mx-auto mt-5 d-flex justify-content-center';
second_child.textContent = "A great restaurant is one that just makes you feel like you're not sure whether you went out or you came home and confuses you. If it can do both of those things at the same time, you're hooked.";

parent_div.appendChild(first_child);
parent_div.appendChild(second_child);
container.appendChild(parent_div);
main_div.appendChild(container);
