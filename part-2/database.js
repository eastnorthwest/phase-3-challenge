"use strict";
const connect = {
  host: 'localhost',
  port: 5432,
  database: 'grocery_store'
};
const pg = require('pg-promise')();
const db = pg(connect);

let pgDb = function() {};

pgDb.prototype.allItems = function() {
  return (new Promise((resolve, reject) => {
      const items = db.any('SELECT * FROM items')
      .then((d) => {
        resolve(d);
      })
      .catch ( (reason) => {
        reject(reason);
      })
  }))
}

pgDb.prototype.itemsInSection = function(section) {
  return (new Promise((resolve, reject) => {
    const items = db.any('SELECT * FROM items WHERE section = $1', [section])
    .then((d) => {
      resolve(d);
    })
    .catch ( (reason) => {
      reject(reason);
    })
  }))
}

pgDb.prototype.cheapItems = function() {
  return (new Promise((resolve, reject) => {
    const items = db.any('SELECT * FROM items WHERE price < 10 ORDER BY price')
    .then((d) => {
      resolve(d);
    })
    .catch ( (reason) => {
      reject(reason);
    })
  }))
}

pgDb.prototype.countItemsInSection = function(section) {
  return (new Promise((resolve, reject) => {
    const items = db.any('SELECT COUNT(*) FROM items WHERE section = $1', [section])
    .then((d) => {
      resolve(d);
    })
    .catch ( (reason) => {
      reject(reason);
    })
  }))
}

pgDb.prototype.mostRecentOrders = function(section) {
  return (new Promise((resolve, reject) => {
    const items = db.any('SELECT COUNT(*) FROM items WHERE section = $1', [section])
    .then((d) => {
      resolve(d);
    })
    .catch ( (reason) => {
      reject(reason);
    })
  }))
}
module.exports = new pgDb();