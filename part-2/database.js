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
    const count = db.any('SELECT COUNT(*) FROM items WHERE section = $1', [section])
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
    const orders = db.any('SELECT id, date FROM orders ORDER BY date DESC LIMIT 10')
    .then((d) => {
      resolve(d);
    })
    .catch ( (reason) => {
      reject(reason);
    })
  }))
}


pgDb.prototype.lastShopperName = function() {
  return (new Promise((resolve, reject) => {
    const shopper = db.any('SELECT name FROM shoppers s JOIN orders o ON s.id = o.shopper_id ORDER BY o.date DESC LIMIT 1')
    .then((d) => {
      resolve(d);
    })
    .catch ( (reason) => {
      reject(reason);
    })
  }))
}

pgDb.prototype.orderTotal = function(id) {
  return (new Promise((resolve, reject) => {
    const total = db.any('SELECT SUM(ROUND((qty * price)::DECIMAL, 2)) as total FROM orderItemQtyPrice WHERE order_id = $1', [id])
    .then((d) => {
      resolve(d);
    })
    .catch ( (reason) => {
      reject(reason);
    })
  }))
}

module.exports = new pgDb();