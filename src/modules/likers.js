import { cards, clearElement, save } from './module1.js';
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
likey.addEventListener('mousedown', (e) => {
  if (e.target.tagName.toLowerCase() === 'i') {
    e.target.classList.add('open');
    const dataId = Number(e.target.getAttribute('data-id'));
    thisIsIt();
    if (!clicked) {
      clicked = true;
      postLikesWith(dataId);
    } else {
      clicked = false;
    }
  }
  save();
});
