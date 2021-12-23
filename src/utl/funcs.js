export default function getCardsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('card.list')) || [];
}
