import { cards, clearElement } from './module1.js';
import { postLikesWith } from './interactionServer.js';

const likey = document.getElementById('card_list');

const API_URI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const APP_ID = 'eVhYJo21vVPIv4GTCmdX';

async function thisIsIt() {
  const response = await fetch(`${API_URI}/apps/${APP_ID}/likes?item_id=${cards.id}`);
  const scoreLine = await response.json();

  const likeNo = document.querySelectorAll('.likes');

  likeNo.forEach((item) => {
    clearElement(likeNo);
    scoreLine.forEach((likeObj) => {
      if (likeObj.item_id === Number(item.id)) {
        item.innerHTML = `${likeObj.likes}`;
      }
    });
  });
}
thisIsIt();
let clicked = false;
likey.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'i') {
    const dataId = Number(e.target.getAttribute('data-id'));
    thisIsIt();
    e.target.classList.add('open');

    if (!clicked) {
      clicked = true;
      postLikesWith(dataId);
      thisIsIt();
    } else {
      clicked = false;
      thisIsIt();
    }
  }
});
