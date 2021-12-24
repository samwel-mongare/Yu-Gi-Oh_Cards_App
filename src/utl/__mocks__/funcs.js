/* eslint-disable no-plusplus */
import { fakeCards } from '../mockData.js';

export default function getCardsFromLocalStorage() {
  return fakeCards;
}

export function arrayLength(a) {
  let length = 0;
  while (a[length] !== undefined) {
    length++;
  }
  return length;
}
