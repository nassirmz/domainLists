import { expect } from 'chai';

import { getLists } from '../../src/actions';

describe('Actions', () => {
  describe('getLists', () => {
    it('should return an object with the proper type', () => {
      expect(getLists().type).to.equal('GET_LISTS');
    });
    it('Should return a list of domains', () => {
      const array = ['lists1', 'list2'];
      expect(getLists(array).lists).to.equal(array);
    });
  });
});