/* eslint-disable no-plusplus */
import displayPopup from './popup.js';

const LOCAL_STORAGE_LIST_KEY = 'card.list';
export const cards = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

export const clearElement = ((element) => {
  element.innerHTML = '';
});

export const save = (() => {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(cards));
});

const displayElements = () => {
  const blueEyes = document.getElementById('card_list');
  clearElement(blueEyes);
  for (let i = 0; i < cards.length; i++) {
    blueEyes.innerHTML += `
        <li>
        <div class="image_holder"><img class="card_image" src="${cards[i].card_images[0].image_url_small}" alt=""></div>
        <div class="card_details"><h2 class"card_title">${cards[i].name}</h2>
        <div class="likes-section">
        <i class="far fa-heart" data-id="${cards[i].id}"></i><br><span id="${cards[i].id}" class="likes"></span> likes</div>
        </div>
        <button id="commentBtn" class="card_comments" data-id="${cards[i].id}" >Comments</button>
        </li>`;
  }
  save();
};

async function getCards() {
  const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes');
  const allcards = await response.json();
  const cardData = allcards.data;
  cards.length = 0;
  cards.push(...cardData.slice(0, 12));
  save();
  displayElements();
}

document.addEventListener('click', (e) => {
  const popup = document.getElementById('appPopup');

  if (e.target === popup || e.target.id === 'close') popup.style.display = 'none';
  if (e.target.id === 'commentBtn') displayPopup(e.target.getAttribute('data-id'));
});

getCards();
