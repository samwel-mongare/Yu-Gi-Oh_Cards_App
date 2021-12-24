import getCardsFromLocalStorage from '../utl/funcs.js';
import commentsCounter from './commentsCounter.js';
import { getCommentsOf, postCommentWith } from './interactionServer.js';

export function getCard(id) {
  const cards = getCardsFromLocalStorage();
  return cards.find((card) => card.id === id);
}

export function displayBlock(element) {
  element.style.display = 'block';
  return true;
}

export function textContentWith(ele, value) {
  ele.textContent = value;
  return ele;
}

export function getDate() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;
  return today;
}

export default function displayPopup(cardId) {
  const card = getCard(Number(cardId));
  const [popup, popupBody] = ['appPopup', 'popup-body'].map((id) => document.getElementById(id));
  const [cardImg, cardTitle, cardDesc, cardType, cardATK, cardDEF, cardAttr, cardInfo, cardComments,
    commentHead, commentsDisplay, addComment, addCommentHead, addCommentForm, inputUsername, inputComment, commentBtn] = ['img', 'h2', 'div', 'span', 'span', 'span', 'span', 'span', 'div', 'h4', 'div', 'div', 'h4', 'form', 'input', 'textarea', 'input'].map((tag) => document.createElement(tag));

  cardComments.id = 'cardComments';
  commentHead.id = 'commentHead';
  commentsDisplay.id = 'commentsDisplay';
  cardDesc.className = 'desc';
  cardInfo.className = 'highlight';
  cardImg.src = card.card_images[0].image_url;

  textContentWith(cardTitle, `${card.name}`);
  textContentWith(cardType, `Type : ${card.type}`);
  textContentWith(cardATK, `Attack : ${(card.type === 'Spell Card') ? '-' : card.atk}`);
  textContentWith(cardAttr, `Attribute : ${(card.type === 'Spell Card') ? '-' : card.attribute}`);
  textContentWith(cardDEF, `Defence : ${(card.type === 'Spell Card') ? '-' : card.def}`);
  textContentWith(cardInfo, `Description : ${card.desc}`);
  textContentWith(popupBody, '');

  getCommentsOf(cardId).then((commentsArr) => {
    commentHead.textContent = commentsCounter(commentsArr) === undefined ? 'No comments' : `Comments (${commentsCounter(commentsArr)})`;
    commentsArr.forEach((comment) => {
      commentsDisplay.innerHTML
        += `<div>${comment.creation_date} (${comment.username}) : ${comment.comment}</div>`;
    });
  });

  addComment.id = 'addComment';
  inputUsername.id = 'inputUsername';
  addCommentForm.id = 'commentForm';
  inputComment.id = 'inputComment';
  commentBtn.id = 'commentBtn';
  inputUsername.type = 'text';
  commentBtn.type = 'submit';
  addCommentHead.textContent = 'Add a comment';
  inputUsername.placeholder = 'Your name';
  inputComment.placeholder = 'Your comment';
  inputUsername.required = true;
  inputComment.required = true;
  commentBtn.value = 'Post';
  addCommentForm.setAttribute('data-id', cardId);

  addCommentForm.append(inputUsername, inputComment, commentBtn);
  addComment.append(addCommentHead, addCommentForm);
  cardComments.append(commentHead, commentsDisplay);
  cardDesc.append(cardType, cardATK, cardAttr, cardDEF);
  popupBody.append(cardImg, cardTitle, cardDesc, cardInfo, cardComments, addComment);

  displayBlock(popup);

  return popup;
}

document.addEventListener('submit', (e) => {
  const [commentHead, commentsDisplay] = ['commentHead', 'commentsDisplay'].map((id) => document.getElementById(id));
  const [username, comment] = [e.target[0].value, e.target[1].value];
  const id = Number(e.target.getAttribute('data-id'));
  const today = getDate();

  postCommentWith(id, username, comment);

  commentsDisplay.innerHTML += `<div>${today} (${username}) : ${comment}</div>`;
  commentHead.innerHTML = `Comments (${commentsDisplay.childElementCount})`;

  e.target.reset();
  e.preventDefault();
});
