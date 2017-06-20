const db = require('../database.js');
const chai = require('chai');
const assert = chai.assert;

describe('allItems', () => {

  it('should be at least one item in length', () => {

    return Promise.all([
      db.itemsInSection("bulk").then(
          function(d) {
            assert.include(d, {name: "Flour"});
          }).catch(
          (reason) => {
            console.log("ERROR:allItems", reason);
          })]);
    })

});