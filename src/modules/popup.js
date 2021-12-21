
const cards = [{}, {}, {}]
export const card = {
  id: 12321,
  name: 'Tornado Dragon',
  type: 'XYZ Monster',
  desc: '2 Level 4 monsters\nOnce per turn (Quick Effect): You can detach 1 material from this card, then target 1 Spell/Trap on the field; destroy it.',
  atk: 2100,
  def: 2000,
  attribute: 'WIND',
  card_images: [
    {
      image_url: 'https://storage.googleapis.com/ygoprodeck.com/pics/6983839.jpg',
      image_url_small: 'https://storage.googleapis.com/ygoprodeck.com/pics_small/6983839.jpg',
    },
  ],
  card_prices: [
    {
      cardmarket_price: '0.42',
      tcgplayer_price: '0.48',
      ebay_price: '2.99',
      amazon_price: '0.77',
      coolstuffinc_price: '0.99',
    },
  ],
};

// function getCard(id) {
//   return cards.find(object => object.id === id);
// }

function displayBlock(element) {
  element.style.display = 'block';
  return true;
}

function textContentWith(ele, value) {
  ele.textContent = value;
  return ele;
}

export function displayPopup(cardId) {
  // let idOrCardObj = getCard(cardId);
  const [popup, popupBody] = ['appPopup', 'popup-body'].map((id) => document.getElementById(id));
  const [cardImg, cardTitle, cardDesc, cardType, cardATK, cardDEF, cardAttr] = 
  ['img', 'h2', 'div', 'span', 'span', 'span', 'span'].map((tag) => document.createElement(tag));
  
  cardDesc.className = 'desc';
  cardImg.src = cardId.card_images[0].image_url;
  textContentWith(cardTitle, `${cardId.name}`);
  textContentWith(cardType, `Type : ${cardId.type}`);
  textContentWith(cardATK, `Attack : ${cardId.atk}`);
  textContentWith(cardAttr, `Attribute : ${cardId.attribute}`);
  textContentWith(cardDEF, `Defence : ${cardId.def}`);
  textContentWith(popupBody, '')
  
  cardDesc.append(cardType, cardATK, cardAttr, cardDEF);
  popupBody.append(cardImg, cardTitle, cardDesc);
  
  displayBlock(popup);
}
