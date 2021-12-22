import { getCommentsOf, postCommentWith } from './interactionServer.js';


function getCardsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('card.list')) || [];
}

function getCard(id) {
  const numID = Number(id);
  const cards = getCardsFromLocalStorage()
  return cards.find((card) => card.id === numID);
}

function displayBlock(element) {
  element.style.display = 'block';
  return true;
}

function textContentWith(ele, value) {
  ele.textContent = value;
  return ele;
}

export default function displayPopup(cardId) {
  const card = getCard(cardId);
  const [popup, popupBody] = ['appPopup', 'popup-body'].map((id) => document.getElementById(id));
  const [cardImg, cardTitle, cardDesc, cardType, cardATK, cardDEF, cardAttr, cardInfo, cardComments] = ['img', 'h2', 'div', 'span', 'span', 'span', 'span', 'span', 'div'].map((tag) => document.createElement(tag));

  cardComments.id = 'cardComments';
  cardDesc.className = 'desc';
  cardImg.src = card.card_images[0].image_url;
  textContentWith(cardTitle, `${card.name}`);
  textContentWith(cardType, `Type : ${card.type}`);
  textContentWith(cardATK, `Attack : ${(card.type === 'Spell Card') ? '-' : card.atk}`);
  textContentWith(cardAttr, `Attribute : ${(card.type === 'Spell Card') ? '-' : card.attribute}`);
  textContentWith(cardDEF, `Defence : ${(card.type === 'Spell Card') ? '-' : card.def}`);
  textContentWith(cardInfo, `Description : ${card.desc}`);
  textContentWith(popupBody, '');

  // >>>>>>>show comments section>>>>>>>>
  const commentHead = document.createElement('h4');
  const commentsDisplay = document.createElement('div');
  commentHead.id = 'commentHead';
  commentsDisplay.id = 'commentsDisplay';

  getCommentsOf(cardId).then((commentsArr) => {
    commentHead.textContent = commentsArr.length === undefined ? 'No comments' : `Comments (${commentsArr.length})`;
    commentsArr.forEach((comment) => {
      commentsDisplay.innerHTML
        += `<div>${comment.creation_date} (${comment.username}) : ${comment.comment}</div>`;
    });
  });
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  // >>>>>>>>>>>>>>>add comment>>>>>>>>>>
  const addComment = document.createElement('div');
  const addCommentHead = document.createElement('h4');
  const addCommentForm = document.createElement('form');
  const inputUsername = document.createElement('input');
  const inputComment = document.createElement('textarea');
  const commentBtn = document.createElement('input');
  addComment.id = 'addComment';

  addCommentHead.textContent = 'Add a comment';
  addCommentForm.id = 'commentForm';
  addCommentForm.setAttribute('data-id', cardId);

  inputUsername.type = 'text';
  inputUsername.placeholder = 'Your name';
  inputUsername.id = 'inputUsername';
  inputUsername.required = true;

  inputComment.placeholder = 'Your comment';
  inputComment.id = 'inputComment';
  inputComment.required = true;

  commentBtn.type = 'submit';
  commentBtn.value = 'Post';
  commentBtn.id = 'commentBtn';

  addCommentForm.append(inputUsername, inputComment, commentBtn);
  addComment.append(addCommentHead, addCommentForm);
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  cardComments.append(commentHead, commentsDisplay);
  cardDesc.append(cardType, cardATK, cardAttr, cardDEF);
  popupBody.append(cardImg, cardTitle, cardDesc, cardInfo, cardComments, addComment);
  displayBlock(popup);
  return popup;
}

document.addEventListener('submit', (e) => {
  const commentHead = document.getElementById('commentHead');
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;

  const username = e.target[0].value;
  const comment = e.target[1].value;
  const id = Number(e.target.getAttribute('data-id'));
  const commentsDisplay = document.getElementById('commentsDisplay');
  postCommentWith(id, username, comment);

  commentsDisplay.innerHTML += `<div>${today} (${username}) : ${comment}</div>`;
  commentHead.innerHTML = `Comments (${commentsDisplay.childElementCount})`;

  e.target.reset();
  e.preventDefault();
});

// EXTRA FEATURE <<<<<<<<<<<<<<<<<<<<<<<<
// function showLoading() {
//   const loading = document.getElementById('ring');
//   loading.style.display = 'block';
// }

// function disableLoading() {
//   const loading = document.getElementById('ring');
//   loading.style.display = 'none';
// }
