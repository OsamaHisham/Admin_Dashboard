// Adding the hovered class in selected list items
const list = document.querySelectorAll('.navigation li');

function activeLink() {
  list.forEach((link) => 
  link.classList.remove('hovered'));
  this.classList.add('hovered');
}

list.forEach((link) => 
link.addEventListener('mouseenter', activeLink));

// Menu Toggle
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('.main');

toggle.onclick = function() {
  navigation.classList.toggle('active');
  main.classList.toggle('active');
}