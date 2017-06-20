/* SHOPPERS */

/* Jane Smith */

WITH shopper_insert AS (
  INSERT INTO shoppers (name) VALUES ('Jane Smith') RETURNING shopper_id
  ),
    order_insert AS (
    INSERT INTO orders (shopper_id, date) VALUES (shopper_id, NOW()) RETURNING order_id
  )
INSERT INTO orderItemQtyPrice (order_id, item_id, qty, price)
VALUES  (order_id, 1, 2, (SELECT price FROM items WHERE id = 1)),
  (order_id, 3, 1, (SELECT price FROM items WHERE id = 3)),
  (order_id, 5, 1, (SELECT price FROM items WHERE id = 5));

WITH order_insert AS (
  INSERT INTO orders (shopper_id, date) VALUES (shopper_id, NOW()) RETURNING id AS order_id
);
INSERT INTO orderItemQtyPrice (order_id, item_id, qty, price)
VALUES  (order_id, 10, 10, (SELECT price FROM items WHERE id = 10)),
  (order_id, 5, 1, (SELECT price FROM items WHERE id = 5)),
  (order_id, 8, 1, (SELECT price FROM items WHERE id = 8));

/* John Smith */

WITH shopper_insert AS (
  INSERT INTO shoppers (name) VALUES ('Jane Smith') RETURNING id AS shopper_id
),
    order_insert AS (
    INSERT INTO orders (shopper_id, date) VALUES (shopper_id, NOW()) RETURNING id AS order_id
  )
INSERT INTO orderItemQtyPrice (order_id, item_id, qty, price)
VALUES  (order_id, 11, 5, (SELECT price FROM items WHERE id = 11)),
  (order_id, 13, 1, (SELECT price FROM items WHERE id = 13)),
  (order_id, 15, 1, (SELECT price FROM items WHERE id = 15));

WITH order_insert AS (
  INSERT INTO orders (shopper_id, date) VALUES (shopper_id, NOW()) RETURNING id AS order_id
)
INSERT INTO orderItemQtyPrice (order_id, item_id, qty, price)
VALUES  (order_id, 3, 1, (SELECT price FROM items WHERE id = 3)),
  (order_id, 4, 1, (SELECT price FROM items WHERE id = 4)),
  (order_id, 5, 1, (SELECT price FROM items WHERE id = 5));

/* Fred Jones */

WITH shopper_insert AS (
  INSERT INTO shoppers (name) VALUES ('Jane Smith') RETURNING id AS shopper_id
),
    order_insert AS (
    INSERT INTO orders (shopper_id, date) VALUES (shopper_id, NOW()) RETURNING id AS order_id
  )
INSERT INTO orderItemQtyPrice (order_id, item_id, qty, price)
VALUES  (order_id, 20, 1, (SELECT price FROM items WHERE id = 20)),
  (order_id, 5, 1, (SELECT price FROM items WHERE id = 5));

WITH order_insert AS (
  INSERT INTO orders (shopper_id, date) VALUES (shopper_id, NOW()) RETURNING id AS order_id
)
INSERT INTO orderItemQtyPrice (order_id, item_id, qty, price)
VALUES  (order_id, 28, 1, (SELECT price FROM items WHERE id = 28)),
  (order_id, 25, 1, (SELECT price FROM items WHERE id = 25)),
  (order_id, 22, 1, (SELECT price FROM items WHERE id = 22)),
  (order_id, 21, 1, (SELECT price FROM items WHERE id = 21)),
  (order_id, 20, 1, (SELECT price FROM items WHERE id = 20)),
  (order_id, 18, 1, (SELECT price FROM items WHERE id = 18));

WITH order_insert AS (
  INSERT INTO orders (shopper_id, date) VALUES (shopper_id, NOW()) RETURNING id AS order_id
)
INSERT INTO orderItemQtyPrice (order_id, item_id, qty, price)
VALUES  (order_id, 33, 10, (SELECT price FROM items WHERE id = 33)),
  (order_id, 20, 1, (SELECT price FROM items WHERE id = 20)),
  (order_id, 15, 4, (SELECT price FROM items WHERE id = 15));

/* Mary Johnson */

WITH shopper_insert AS (
  INSERT INTO shoppers (name) VALUES ('Mary Johnson') RETURNING id AS shopper_id
),
    order_insert AS (
    INSERT INTO orders (shopper_id, date) VALUES (shopper_id, NOW()) RETURNING id AS order_id
  )
INSERT INTO orderItemQtyPrice (order_id, item_id, qty, price)
VALUES  (order_id, 30, 1, (SELECT price FROM items WHERE id = 30)),
  (order_id, 31, 1, (SELECT price FROM items WHERE id = 31)),
  (order_id, 32, 1, (SELECT price FROM items WHERE id = 32));


