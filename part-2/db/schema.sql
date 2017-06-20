DROP TABLE IF EXISTS items, shoppers, orders, orderItemPrice;

CREATE TABLE shoppers (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(128) NOT NULL
);

CREATE TABLE orders (
  id SERIAL NOT NULL PRIMARY KEY,
  shopper_id INT NOT NULL,
  date TIMESTAMP
);

CREATE TABLE items (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(128) NOT NULL ,
  price FLOAT(2) NOT NULL,
  section VARCHAR(16) NOT NULL
);

CREATE TABLE orderItemPrice (
  order_id INT NOT NULL ,
  item_id INT NOT NULL ,
  price FLOAT(2) NOT NULL
);