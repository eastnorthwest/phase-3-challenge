const db = require('../database.js');
const chai = require('chai');
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);

const assert = chai.assert;

describe('itemsInSection', () => {
  it('A call to itemsInSection("bulk") returns the items "Flour", "Pasta", and "Rice"', () => {

    return Promise.all([
      db.itemsInSection("bulk").then(
          function (d) {
            assert.containSubset(d, [{'name' : 'Flour'}]);
            assert.containSubset(d, [{'name' : 'Pasta'}]);
            assert.containSubset(d, [{'name' : 'Rice'}]);
          })])
  })
});

describe('cheapItems', () => {
  it('A call to cheapItems() returns the item "Fish" as the first item and "Honey" as the last item', () => {

    return Promise.all([
      db.cheapItems().then(
          function (d) {
            assert.propertyVal(d[0], 'name', 'Fish');
            assert.propertyVal(d[(d.length -1)], 'name', 'Honey');
          })])
  })
});

describe('itemsInSection', () => {
  it('A call to countItemsInSection("packaged") returns 5', () => {

    return Promise.all([
      db.countItemsInSection("packaged").then(
          function (d) {
            assert.equal(d[0].count, 5);
          })])
  })
});