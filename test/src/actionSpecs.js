import { expect } from 'chai';

import getLists from '../../src/actions';

describe('Actions', () => {
  describe('getLists', () => {
    it('should return an object with the proper type', () => {
      expect(getLists().type).to.equal('GET_LISTS');
    });
  });
});