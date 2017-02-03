import { expect } from 'chai';

import { getLists, getListDetail } from '../../src/actions';

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
  describe('getListDetail', () => {
    it('should return an object with the proper type', () => {
      expect(getListDetail().type).to.equal('GET_LIST_DETAIL');
    });
    it('Should return a list detail', () => {
      const obj = { domains: 'nassir.lol' };
      expect(getListDetail(obj).listDetail).to.equal(obj);
    });
  });
});