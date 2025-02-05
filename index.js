import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";
import ejs from "ejs";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "book_notes",
  password: "YOUR_PASSWORD",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let books = [];

app.get('/', async (req, res) => {
    const sort = req.query.sort || 'title'; // Получаем параметр сортировки из URL
    
    let queryText = 'SELECT * FROM books';
    
    // Добавляем сортировку в зависимости от параметра
    if (sort === 'title') {
      queryText += ' ORDER BY title';  // Сортировка по названию
    } else if (sort === 'newest') {
      queryText += ' ORDER BY review_date DESC';  // Сортировка по дате
    } else if (sort === 'best') {
      queryText += ' ORDER BY rating DESC';  // Сортировка по рейтингу
    }
    
    try {
      const result = await db.query(queryText);
      const books = result.rows;
  
      // Construct cover image URL for each book
      for (let book of books) {
        book.coverImage = `https://covers.openlibrary.org/b/isbn/${book.cover}-M.jpg`;
      }
  
      res.render('index.ejs', { listOfBooks: books, sort });
    } catch (err) {
      console.log(err);
      res.status(500).send('Database error');
    }
  });

  app.get('/notes/:id', async(req, res) => {
    const bookId = req.params.id;
    const result = await db.query('SELECT * FROM books WHERE id = $1',[bookId]);
    const book = result.rows[0];
    const noteResult = await db.query('SELECT * FROM notes WHERE book_id = $1',[bookId]);
    const notes = noteResult.rows;

    book.coverImage = `https://covers.openlibrary.org/b/isbn/${book.cover}-M.jpg`;

    res.render("notes.ejs",{book: book, notes : notes});



   
});
  

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
