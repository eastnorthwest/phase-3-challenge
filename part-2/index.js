"use strict";
const express = require('express');
const app = express();
const os = require("os");

const db = require('./database.js');

db.allItems().then(
        (d) => {
          console.log("RUN:allItems", d)
      }).catch(
        (reason) => {
          console.log("ERROR:allItems", reason);
      });

db.itemsInSection("dairy").then(
    (d) => {
      console.log("RUN:itemsInSection", d)
    }).catch(
    (reason) => {
      console.log("ERROR:itemsInSection", reason);
    });

db.cheapItems().then(
    (d) => {
      console.log("RUN:cheapItems", d)
    }).catch(
    (reason) => {
      console.log("ERROR:cheapItems", reason);
    });

db.countItemsInSection("dairy").then(
    (d) => {
      console.log("RUN:countItemsInSection", d)
    }).catch(
    (reason) => {
      console.log("ERROR:countItemsInSection", reason);
    });

db.mostRecentOrders().then(
    (d) => {
      console.log("RUN:mostRecentOrders", d)
    }).catch(
    (reason) => {
      console.log("ERROR:mostRecentOrders", reason);
    });

db.lastShopperName().then(
    (d) => {
      console.log("RUN:lastShopperName", d)
    }).catch(
    (reason) => {
      console.log("ERROR:lastShopperName", reason);
    });

// pull a random order and then show order total
db.mostRecentOrders().then(
    (d) => {
      let randomOrder = parseInt(Math.random() * d.length);
      let randomOrderId = d[randomOrder]['id'];
      db.orderTotal(randomOrderId).then(
          (d) => {
            console.log("RUN:orderTotal for order id: " + randomOrderId, d)
          }).catch(
          (reason) => {
            console.log("ERROR:orderTotal", reason);
          });
    });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Part-2 Listening on http://` + os.hostname() + `:${port}...`)
})