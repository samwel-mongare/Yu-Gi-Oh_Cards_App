/* eslint-disable no-plusplus */
const home = document.getElementById('home_link');

const LOCAL_STORAGE_LIST_KEY = 'card.list';
export const cards = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

const clearElement = ((element) => {
  element.innerHTML = '';
});

const save = (() => {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(cards));
});

home.addEventListener('click', () => {
  async function getCards() {
    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes');
    const allcards = await response.json();
    const cardData = allcards.data;
    cards.length = 0;
    cards.push(...cardData.slice(0, 12));
    save();
  }
  const result = getCards();
  return result;
  
});

const displayElements = (() => {
  const blueEyes = document.getElementById('card_list');
  clearElement(blueEyes);
  for (let i = 0; i < cards.length; i++) {
    blueEyes.innerHTML += `
        <li>
        <div class="image_holder"><img class="card_image" src="${cards[i].card_images[0].image_url_small}" alt=""></div>
        <div class="card_details"><h2 class"card_title">${cards[i].name}</h2>
        <div class="likes-section">
        <i class="far fa-heart"></i><br> 5 likes</div>
        </div>
        <button class="card_comments" data-id="${cards[i].id}" >Comments</button>
        </li>`;
  }
  save();
});

displayElements();