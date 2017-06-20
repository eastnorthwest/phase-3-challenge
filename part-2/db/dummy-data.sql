/* SHOPPERS */

TRUNCATE TABLE orderItemQtyPrice, orders, shoppers;

/* Jane Smith */

WITH shopper_insert AS (
  INSERT INTO shoppers (name) VALUES ('Jane Smith') RETURNING id
  ),
    order_insert AS (
    INSERT INTO orders (shopper_id, date) VALUES ( ( SELECT id FROM shopper_insert) , NOW()) RETURNING id
  )
INSERT INTO orderItemQtyPrice (order_id, item_id, qty, price)
VALUES  (( SELECT id FROM order_insert), 1, 2, (SELECT price FROM items WHERE id = 1)),
  (( SELECT id FROM order_insert), 3, 1, (SELECT price FROM items WHERE id = 3)),
  (( SELECT id FROM order_insert), 5, 1, (SELECT price FROM items WHERE id = 5));

WITH order_insert AS (
  INSERT INTO orders (shopper_id, date) VALUES (( SELECT id FROM shoppers ORDER BY id DESC LIMIT 1), NOW()) RETURNING id
)
INSERT INTO orderItemQtyPrice (order_id, item_id, qty, price)
VALUES  (( SELECT id FROM order_insert ), 10, 10, (SELECT price FROM items WHERE id = 10)),
  (( SELECT id FROM order_insert ), 5, 1, (SELECT price FROM items WHERE id = 5)),
  (( SELECT id FROM order_insert ), 8, 1, (SELECT price FROM items WHERE id = 8));


/* John Smith */

WITH shopper_insert AS (
  INSERT INTO shoppers (name) VALUES ('John Smith') RETURNING id
),
    order_insert AS (
    INSERT INTO orders (shopper_id, date) VALUES (( SELECT id from shopper_insert ), NOW()) RETURNING id
  )
INSERT INTO orderItemQtyPrice (order_id, item_id, qty, price)
VALUES  (( SELECT id FROM order_insert ), 11, 5, (SELECT price FROM items WHERE id = 11)),
  (( SELECT id FROM order_insert ), 13, 1, (SELECT price FROM items WHERE id = 13)),
  (( SELECT id FROM order_insert ), 15, 1, (SELECT price FROM items WHERE id = 15));

WITH order_insert AS (
  INSERT INTO orders (shopper_id, date) VALUES (( SELECT id from shoppers ORDER BY id DESC LIMIT 1), NOW()) RETURNING id
)
INSERT INTO orderItemQtyPrice (order_id, item_id, qty, price)
VALUES  (( SELECT id FROM order_insert ), 3, 1, (SELECT price FROM items WHERE id = 3)),
  (( SELECT id FROM order_insert ), 4, 1, (SELECT price FROM items WHERE id = 4)),
  (( SELECT id FROM order_insert ), 5, 1, (SELECT price FROM items WHERE id = 5));

/* Fred Jones */

WITH shopper_insert AS (
  INSERT INTO shoppers (name) VALUES ('Fred Jones') RETURNING id
),
    order_insert AS (
    INSERT INTO orders (shopper_id, date) VALUES (( SELECT id FROM shopper_insert ), NOW()) RETURNING id
  )
INSERT INTO orderItemQtyPrice (order_id, item_id, qty, price)
VALUES  (( SELECT id FROM order_insert ), 20, 1, (SELECT price FROM items WHERE id = 20)),
  (( SELECT id FROM order_insert ), 5, 1, (SELECT price FROM items WHERE id = 5));

WITH order_insert AS (
  INSERT INTO orders (shopper_id, date) VALUES ( ( SELECT id from shoppers ORDER BY id DESC LIMIT 1 ), NOW()) RETURNING id
)
INSERT INTO orderItemQtyPrice (order_id, item_id, qty, price)
VALUES  (( SELECT id FROM order_insert ), 28, 1, (SELECT price FROM items WHERE id = 28)),
  (( SELECT id FROM order_insert ), 25, 1, (SELECT price FROM items WHERE id = 25)),
  (( SELECT id FROM order_insert ), 22, 1, (SELECT price FROM items WHERE id = 22)),
  (( SELECT id FROM order_insert ), 21, 1, (SELECT price FROM items WHERE id = 21)),
  (( SELECT id FROM order_insert ), 20, 1, (SELECT price FROM items WHERE id = 20)),
  (( SELECT id FROM order_insert ), 18, 1, (SELECT price FROM items WHERE id = 18));

WITH order_insert AS (
  INSERT INTO orders (shopper_id, date) VALUES (( SELECT id from shoppers ORDER BY id DESC LIMIT 1 ), NOW()) RETURNING id
)
INSERT INTO orderItemQtyPrice (order_id, item_id, qty, price)
VALUES  (( SELECT id FROM order_insert ), 33, 10, (SELECT price FROM items WHERE id = 33)),
  (( SELECT id FROM order_insert ), 20, 1, (SELECT price FROM items WHERE id = 20)),
  (( SELECT id FROM order_insert ), 15, 4, (SELECT price FROM items WHERE id = 15));

/* Mary Johnson */

WITH shopper_insert AS (
  INSERT INTO shoppers (name) VALUES ('Mary Johnson') RETURNING id
),
    order_insert AS (
    INSERT INTO orders (shopper_id, date) VALUES (( SELECT id FROM shopper_insert ), NOW()) RETURNING id
  )
INSERT INTO orderItemQtyPrice (order_id, item_id, qty, price)
VALUES  (( SELECT id FROM order_insert ), 30, 1, (SELECT price FROM items WHERE id = 30)),
  (( SELECT id FROM order_insert ), 31, 1, (SELECT price FROM items WHERE id = 31)),
  (( SELECT id FROM order_insert ), 32, 1, (SELECT price FROM items WHERE id = 32));
