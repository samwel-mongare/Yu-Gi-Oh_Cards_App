const cardObj = {
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

// will use this if the input is id <<<<<<<<<<<<<<<

// function getCard(id) {
//     // get card data from app storge
//     return arrayOfObjs.find(object => object.id === id; );
// }

function displayPopup(idOrCardObj) {
  // let idOrCardObj = getCard(id);  i will use this if the input is id <<<<<<<<<<<<<<<<<
  const [popup, xBtn, popupBody] = ['appPopup', 'close', 'popup-body'].map((id) => document.getElementById(id));
  popup.style.display = 'block';

  const cardImg = document.createElement('img');
  const cardTitle = document.createElement('h2');
  const cardDesc = document.createElement('div');
  const cardType = document.createElement('span');
  const cardATK = document.createElement('span');
  const cardDEF = document.createElement('span');
  const cardAttr = document.createElement('span');

  cardDesc.className = 'desc';
  cardATK.className = 'itemLeft';
  cardDEF.className = 'itemLeft';

  cardImg.src = idOrCardObj.card_images[0].image_url;
  cardTitle.innerText = `${idOrCardObj.name}`;
  cardType.innerText = `Type : ${idOrCardObj.type}`;
  cardATK.innerText = `Attack : ${idOrCardObj.atk}`;
  cardAttr.innerText = `Attribute : ${idOrCardObj.attribute}`;
  cardDEF.innerText = `Defence : ${idOrCardObj.def}`;
  cardDesc.innerText = '';
  cardDesc.append(cardType, cardATK, cardAttr, cardDEF);

  popupBody.innerHTML = '';
  popupBody.append(cardImg, cardTitle, cardDesc);

  xBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
}

const btn = document.getElementById('myBtn');
btn.addEventListener('click', (e) => {
  displayPopup(cardObj);
  e.preventDefault();
});
