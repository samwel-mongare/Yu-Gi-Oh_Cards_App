/**
 * @jest-environment jsdom
 */

import { displayBlock, getCard } from "../../modules/popup.js";
import getCardsFromLocalStorage from "../../utl/__mocks__/funcs.js";

jest.mock('../../utl/funcs.js');

describe('Unit Tests', () => {
    describe('getCard()', () => {
        test('return card object bassed on id', () => {
            const cards = getCardsFromLocalStorage();
            let card = cards[1];

            let resault = getCard(42431843)

            expect(42431843).toEqual(card.id);
            expect(resault).toEqual(card);
        });
    });

    describe('displayBlock()', () => {
        let element = document.createElement('div')
        test('changes an element\'s display rule to block', () => {
            element.style.display = 'none';

            displayBlock(element);

            expect(element.style.display).toBe('block')
        })
    });
})
