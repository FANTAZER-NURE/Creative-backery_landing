'use strict';

const icon = document.getElementById('header-burger');
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');

icon.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
  document.getElementById('body').classList.toggle('page--menu');
});

item1.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item2.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item3.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item4.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});
