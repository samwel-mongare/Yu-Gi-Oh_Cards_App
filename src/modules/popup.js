const LOCAL_STORAGE_LIST_KEY = 'card.list';
const cards = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

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
  const [cardImg, cardTitle, cardDesc, cardType, cardATK, cardDEF, cardAttr] = 
  ['img', 'h2', 'div', 'span', 'span', 'span', 'span'].map((tag) => document.createElement(tag));
  
  cardDesc.className = 'desc';
  cardImg.src = card.card_images[0].image_url;
  textContentWith(cardTitle, `${card.name}`);
  textContentWith(cardType, `Type : ${card.type}`);
  textContentWith(cardATK, `Attack : ${card.atk}`);
  textContentWith(cardAttr, `Attribute : ${card.attribute}`);
  textContentWith(cardDEF, `Defence : ${card.def}`);
  textContentWith(popupBody, '')
  
  cardDesc.append(cardType, cardATK, cardAttr, cardDEF);
  popupBody.append(cardImg, cardTitle, cardDesc);
  
  displayBlock(popup);
}
