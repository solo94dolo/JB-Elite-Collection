//Hamburger Menu
let openMenu = document.querySelector('.menu-toggler');
let navList = document.querySelector('.nav-list');
let navLink = document.querySelector('.nav-link');

openMenu.addEventListener('click', function(){
  navList.classList.toggle('active');

});

$('.nav-link').on('click', function(){
  navList.toggle('active');
})