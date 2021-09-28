import menuCards from '../menu.json';
// console.log(menuCards);
import cardTemplate from '../templates/menu-card.hbs';
// console.log(cardTemplate);

const menu = document.querySelector('.js-menu');

menu.insertAdjacentHTML('beforeend', cardTemplate(menuCards));