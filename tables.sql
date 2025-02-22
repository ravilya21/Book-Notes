CREATE TABLE books(
id SERIAL PRIMARY KEY,
cover VARCHAR(20),
title TEXT,
review_date TEXT,
rating INTEGER,
review_description TEXT
);

CREATE TABLE notes (
id SERIAL PRIMARY KEY,
note TEXT,
book_id INTEGER,
FOREIGN KEY (book_id) REFERENCES books(id)
);