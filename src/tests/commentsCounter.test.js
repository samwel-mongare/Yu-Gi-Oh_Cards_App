/**
 * @jest-environment jsdom
 */

import commentsCounter from '../modules/commentsCounter.js';
import { fakeComments } from '../utl/mockData.js';

describe('Unit Tests', () => {
  describe('commentsCounter()', () => {
    test('returns number of comments per card', () => {
      expect(commentsCounter(fakeComments)).toEqual(2);
    });
  });
});
