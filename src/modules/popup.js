import { getCommentsOf } from "./interactionServer.js";

const LOCAL_STORAGE_LIST_KEY = 'card.list';
const cards = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

const commentsArr = [
  { creation_date: "2021-12-22", comment: "How much it cost?", username: "Mr. Joe" },
  { creation_date: "2021-12-22", comment: "How much it cost?", username: "Mr. Joe" },
  { creation_date: "2021-12-22", comment: "How much it cost?", username: "Mr. Joe" },
  { username: "Mr. Joe", creation_date: "2021-12-22", comment: "How much it cost?" },
  { username: "Mr. Joe", creation_date: "2021-12-22", comment: "How much it cost?" },
]

function getCard(id) {
  const numID = Number(id)
  return cards.find(card => card.id === numID);
}

function displayBlock(element) {
  element.style.display = 'block';
  return true;
}

function textContentWith(ele, value) {
  ele.textContent = value;
  return ele;
}

export function displayPopup(cardId) {
  let card = getCard(cardId);
  const [popup, popupBody] = ['appPopup', 'popup-body'].map((id) => document.getElementById(id));
  const [cardImg, cardTitle, cardDesc, cardType, cardATK, cardDEF, cardAttr, cardComments] =
    ['img', 'h2', 'div', 'span', 'span', 'span', 'span', 'div'].map((tag) => document.createElement(tag));

  cardComments.id = 'cardComments';
  cardDesc.className = 'desc';
  cardImg.src = card.card_images[0].image_url;
  textContentWith(cardTitle, `${card.name}`);
  textContentWith(cardType, `Type : ${card.type}`);
  textContentWith(cardATK, `Attack : ${(card.type === 'Spell Card') ? '-' : card.atk}`);
  textContentWith(cardAttr, `Attribute : ${(card.type === 'Spell Card') ? '-' : card.attribute}`);
  textContentWith(cardDEF, `Defence : ${(card.type === 'Spell Card') ? '-' : card.def}`);
  textContentWith(popupBody, '')

  // >>>>>>>show comments section>>>>>>>>
  let newCommentsArr = [];
  let commentHead = document.createElement('h4');
  let commentsDisplay = document.createElement('div');
  commentsDisplay.id = "commentsDisplay";

  getCommentsOf(cardId).then(commentsArr => {
    commentHead.textContent = commentsArr.length === undefined ? 'No comments' : `Comments (${commentsArr.length})`
    commentsArr.forEach(comment => {
      commentsDisplay.innerHTML +=
        `<div>${comment.creation_date} ${comment.username} : ${comment.comment}</div>`
    })
  })

  cardComments.append(commentHead, commentsDisplay)
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  cardDesc.append(cardType, cardATK, cardAttr, cardDEF);
  popupBody.append(cardImg, cardTitle, cardDesc, cardComments);
  displayBlock(popup);
  return popup;
}

// EXTRA FEATURE <<<<<<<<<<<<<<<<<<<<<<<<
// function showLoading() {
//   const loading = document.getElementById('ring');
//   loading.style.display = 'block';
// }

// function disableLoading() {
//   const loading = document.getElementById('ring');
//   loading.style.display = 'none';
// }
