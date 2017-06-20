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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Part-2 Listening on http://` + os.hostname() + `:${port}...`)
})