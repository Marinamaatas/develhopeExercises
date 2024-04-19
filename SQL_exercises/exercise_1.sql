CREATE TABLE Books (
  book_id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT,
  genre TEXT,
  published_year INTEGER,
  isbn INTEGER NOT NULL,
  price REAL,
  rating REAL,
  stock_count INTEGER
)