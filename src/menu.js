export default function createMenu(content) {
  const container = document.getElementById(content);
  const menuItemContainer = document.createElement('div');
  menuItemContainer.id = 'menu-container';
  menuItemContainer.className = 'container-fluid dis-none mt-5';

  // menuItemContainer.innerHTML =  `
  //   <div class="row">
  //     <div class="col-sm-4 col-white menu-bg-pic h-250p" id = 'item1'>col-sm-4</div>
  //     <div class="col-sm-4 col-white menu-bg-pic h-250p" id = 'item2'>col-sm-4</div>
  //     <div class="col-sm-4 col-white menu-bg-pic h-250p" id = 'item3'>col-sm-4</div>
  //   </div>
  //   <div class="row">
  //     <div class="col-sm-4 col-white menu-bg-pic h-250p">col-sm-4</div>
  //     <div class="col-sm-4 col-white menu-bg-pic h-250p">col-sm-4</div>
  //     <div class="col-sm-4 col-white menu-bg-pic h-250p">col-sm-4</div>
  //   </div>
  //   <div class="row">
  //     <div class="col-sm-4 col-white menu-bg-pic h-250p">col-sm-4</div>
  //     <div class="col-sm-4 col-white menu-bg-pic h-250p">col-sm-4</div>
  //     <div class="col-sm-4 col-white menu-bg-pic h-250p">col-sm-4</div>
  //   </div>
  //   <div class="row">
  //     <div class="col-sm-4 col-white menu-bg-pic h-250p">col-sm-4</div>
  //     <div class="col-sm-4 col-white menu-bg-pic h-250p">col-sm-4</div>
  //     <div class="col-sm-4 col-white menu-bg-pic h-250p">col-sm-4</div>
  //   </div>
  // `;

  const row1 = document.createElement('div');
  row1.id = 'r-1';
  row1.className = 'row';

  const col11 = document.createElement('div');
  col11.id = 'c-11';
  col11.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-bottom';
  col11.style.backgroundImage = "url('/src/img/menu1.jpg')";
  const div1 = document.createElement('div');
  div1.id = 'one';
  div1.className = 'col-white h-100 w-100 back-color dis-none';
  div1.innerHTML = '300$ is price';
  col11.appendChild(div1);

  const col12 = document.createElement('div');
  col12.id = 'c-12';
  col12.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center';
  col12.innerHTML = 'col12';
  col12.style.backgroundImage = "url('/src/img/menu2.jpg')";

  const col13 = document.createElement('div');
  col13.id = 'c-13';
  col13.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center';
  col13.innerHTML = 'col13';
  col13.style.backgroundImage = "url('/src/img/menu3.jpg')";


  const row2 = document.createElement('div');
  row2.id = 'r-2';
  row2.className = 'row';

  const col21 = document.createElement('div');
  col21.id = 'c-21';
  col21.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center';
  col21.innerHTML = 'col21';
  col21.style.backgroundImage = "url('/src/img/menu4.jpg')";

  const col22 = document.createElement('div');
  col22.id = 'c-22';
  col22.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center';
  col22.innerHTML = 'col22';
  col22.style.backgroundImage = "url('/src/img/menu5.jpg')";

  const col23 = document.createElement('div');
  col23.id = 'c-23';
  col23.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center';
  col23.innerHTML = 'col23';
  col23.style.backgroundImage = "url('/src/img/menu6.jpg')";

  const row3 = document.createElement('div');
  row3.id = 'r-3';
  row3.className = 'row';

  const col31 = document.createElement('div');
  col31.id = 'c-31';
  col31.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-bottom';
  col31.innerHTML = 'col31';
  col31.style.backgroundImage = "url('/src/img/menu7.jpg')";

  const col32 = document.createElement('div');
  col32.id = 'c-32';
  col32.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center';
  col32.innerHTML = 'col32';
  col32.style.backgroundImage = "url('/src/img/menu8.jpg')";

  const col33 = document.createElement('div');
  col33.id = 'c-33';
  col33.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center';
  col33.innerHTML = 'col33';
  col33.style.backgroundImage = "url('/src/img/menu9.jpg')";


  const row4 = document.createElement('div');
  row4.id = 'r-4';
  row4.className = 'row';

  const col41 = document.createElement('div');
  col41.id = 'c-41';
  col41.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-bottom';
  col41.innerHTML = 'col41';
  col41.style.backgroundImage = "url('/src/img/menu10.jpg')";

  const col42 = document.createElement('div');
  col42.id = 'c-42';
  col42.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center';
  col42.innerHTML = 'col42';
  col42.style.backgroundImage = "url('/src/img/menu11.jpg')";

  const col43 = document.createElement('div');
  col43.id = 'c-43';
  col43.className = 'col-sm-4 col-white menu-bg-pic h-250p bac-pos-center';
  col43.innerHTML = 'col43';
  col43.style.backgroundImage = "url('/src/img/menu12.jpg')";


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
}
