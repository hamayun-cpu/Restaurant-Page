const createMenu = (content) => {
  const container = document.getElementById(content);
  const menuItemContainer = document.createElement('div');
  menuItemContainer.id = 'menu-container';
  menuItemContainer.className = 'container-fluid dis-none mt-5';

  const row1 = document.createElement('div');
  row1.id = 'r-1';
  row1.className = 'row';

  const col11 = document.createElement('div');
  col11.id = 'c-1';
  col11.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center p-0';
  col11.style.backgroundImage = "url('/src/img/menu1.jpg')";
  const div1 = document.createElement('div');
  div1.className = 'col-white h-100 w-100 bg-color-menu';
  div1.innerHTML = `
    <div class = 'm-auto dis-none' id = '1'>
      <div class = "lrg-font bold-font m-auto">Salad Bun</div>
      <div class='d-flex justify-content-center med-font bold-font'>$5</div>
    </div>
  `;
  col11.appendChild(div1);

  const col12 = document.createElement('div');
  col12.id = 'c-2';
  col12.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center p-0';
  col12.style.backgroundImage = "url('/src/img/menu2.jpg')";
  const div2 = document.createElement('div');
  div2.className = 'col-white h-100 w-100 bg-color-menu';
  div2.innerHTML = `
    <div class = 'm-auto dis-none' id = '2'>
      <div class = "lrg-font bold-font m-auto">Deviled eggs</div>
      <div class='d-flex justify-content-center med-font bold-font'>$3</div>
    </div>
  `;
  col12.appendChild(div2);

  const col13 = document.createElement('div');
  col13.id = 'c-3';
  col13.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center p-0';
  col13.style.backgroundImage = "url('/src/img/menu3.jpg')";
  const div3 = document.createElement('div');
  div3.className = 'col-white h-100 w-100 bg-color-menu';
  div3.innerHTML = `
    <div class = 'm-auto dis-none' id = '3'>
      <div class = "lrg-font bold-font m-auto">Beef Burger</div>
      <div class='d-flex justify-content-center med-font bold-font'>$9</div>
    </div>
  `;
  col13.appendChild(div3);


  const row2 = document.createElement('div');
  row2.id = 'r-2';
  row2.className = 'row';

  const col21 = document.createElement('div');
  col21.id = 'c-4';
  col21.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center p-0';
  col21.style.backgroundImage = "url('/src/img/menu4.jpg')";
  const div4 = document.createElement('div');
  div4.className = 'col-white h-100 w-100 bg-color-menu';
  div4.innerHTML = `
    <div class = 'm-auto dis-none' id = '4'>
      <div class = "lrg-font bold-font m-auto">Spanish Salad</div>
      <div class='d-flex justify-content-center med-font bold-font'>$5</div>
    </div>
  `;
  col21.appendChild(div4);

  const col22 = document.createElement('div');
  col22.id = 'c-5';
  col22.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center p-0';
  col22.style.backgroundImage = "url('/src/img/menu5.jpg')";
  const div5 = document.createElement('div');
  div5.className = 'col-white h-100 w-100 bg-color-menu';
  div5.innerHTML = `
    <div class = 'm-auto dis-none' id = '5'>
      <div class = "lrg-font bold-font m-auto">Mixed fruit</div>
      <div class='d-flex justify-content-center med-font bold-font'>$7</div>
    </div>
  `;
  col22.appendChild(div5);

  const col23 = document.createElement('div');
  col23.id = 'c-6';
  col23.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center p-0';
  col23.style.backgroundImage = "url('/src/img/menu6.jpg')";
  const div6 = document.createElement('div');
  div6.className = 'col-white h-100 w-100 bg-color-menu';
  div6.innerHTML = `
    <div class = 'm-auto dis-none' id = '6'>
      <div class = "lrg-font bold-font m-auto">Vegetables</div>
      <div class='d-flex justify-content-center med-font bold-font'>$3</div>
    </div>
  `;
  col23.appendChild(div6);


  const row3 = document.createElement('div');
  row3.id = 'r-3';
  row3.className = 'row';

  const col31 = document.createElement('div');
  col31.id = 'c-7';
  col31.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center p-0';
  col31.style.backgroundImage = "url('/src/img/menu7.jpg')";
  const div7 = document.createElement('div');
  div7.className = 'col-white h-100 w-100 bg-color-menu';
  div7.innerHTML = `
    <div class = 'm-auto dis-none' id = '7'>
      <div class = "lrg-font bold-font m-auto">Mac burger</div>
      <div class='d-flex justify-content-center med-font bold-font'>$7</div>
    </div>
  `;
  col31.appendChild(div7);

  const col32 = document.createElement('div');
  col32.id = 'c-8';
  col32.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center p-0';
  col32.style.backgroundImage = "url('/src/img/menu8.jpg')";
  const div8 = document.createElement('div');
  div8.className = 'col-white h-100 w-100 bg-color-menu';
  div8.innerHTML = `
    <div class = 'm-auto dis-none' id = '8'>
      <div class = "lrg-font bold-font m-auto">Beef Roll</div>
      <div class='d-flex justify-content-center med-font bold-font'>$4</div>
    </div>
  `;
  col32.appendChild(div8);

  const col33 = document.createElement('div');
  col33.id = 'c-9';
  col33.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center p-0';
  col33.style.backgroundImage = "url('/src/img/menu9.jpg')";
  const div9 = document.createElement('div');
  div9.className = 'col-white h-100 w-100 bg-color-menu';
  div9.innerHTML = `
    <div class = 'm-auto dis-none' id = '9'>
      <div class = "lrg-font bold-font m-auto">Chicken Burger</div>
      <div class='d-flex justify-content-center med-font bold-font'>$6</div>
    </div>
  `;
  col33.appendChild(div9);


  const row4 = document.createElement('div');
  row4.id = 'r-4';
  row4.className = 'row';

  const col41 = document.createElement('div');
  col41.id = 'c-10';
  col41.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center p-0';
  col41.style.backgroundImage = "url('/src/img/menu10.jpg')";
  const div10 = document.createElement('div');
  div10.className = 'col-white h-100 w-100 bg-color-menu';
  div10.innerHTML = `
    <div class = 'm-auto dis-none' id = '10'>
      <div class = "lrg-font bold-font m-auto">Meat Salad</div>
      <div class='d-flex justify-content-center med-font bold-font'>$5</div>
    </div>
  `;
  col41.appendChild(div10);

  const col42 = document.createElement('div');
  col42.id = 'c-11';
  col42.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center p-0';
  col42.style.backgroundImage = "url('/src/img/menu11.jpg')";
  const div11 = document.createElement('div');
  div11.className = 'col-white h-100 w-100 bg-color-menu';
  div11.innerHTML = `
    <div class = 'm-auto dis-none' id = '11'>
      <div class = "lrg-font bold-font m-auto">Chicken steak</div>
      <div class='d-flex justify-content-center med-font bold-font'>$10</div>
    </div>
  `;
  col42.appendChild(div11);

  const col43 = document.createElement('div');
  col43.id = 'c-12';
  col43.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center p-0';
  col43.style.backgroundImage = "url('/src/img/menu12.jpg')";
  const div12 = document.createElement('div');
  div12.className = 'col-white h-100 w-100 bg-color-menu';
  div12.innerHTML = `
    <div class = 'm-auto dis-none' id = '12'>
      <div class = "lrg-font bold-font m-auto">Garlic Fries</div>
      <div class='d-flex justify-content-center med-font bold-font'>$2</div>
    </div>
  `;
  col43.appendChild(div12);


  row1.appendChild(col11);
  row1.appendChild(col12);
  row1.appendChild(col13);

  row2.appendChild(col21);
  row2.appendChild(col22);
  row2.appendChild(col23);

  row3.appendChild(col31);
  row3.appendChild(col32);
  row3.appendChild(col33);

  row4.appendChild(col41);
  row4.appendChild(col42);
  row4.appendChild(col43);

  menuItemContainer.appendChild(row1);
  menuItemContainer.appendChild(row2);
  menuItemContainer.appendChild(row3);
  menuItemContainer.appendChild(row4);
  container.appendChild(menuItemContainer);
};

export default createMenu;
