# Book-Notes
# 📚 Book Review Library

A web application that allows users to view book ratings and personal notes stored in a PostgreSQL database. Each book has a separate page where detailed notes are displayed. Book covers are retrieved using the Open Library API.

## 🚀 Features

- 📖 **Book Database:** Information about books (title, rating, review date, and review description) is stored in PostgreSQL.  
- 📝 **Notes for Each Book:** Each book has personal notes stored in the database and displayed on a separate page.  
- 🖼️ **Book Covers from API:** The cover images are fetched dynamically from the Open Library API.  
- 🔍 **Sorting:** Books can be sorted by **Title**, **Newest**, or **Best** rating.  

## 🛠️ Technologies Used

- **Frontend:** HTML, CSS, EJS  
- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL  
- **API:** Open Library Covers API  


## 🏗️ Database Structure

The project uses two PostgreSQL tables



## 📂 Project Structure
📂 project-folder ┣ 📂 public # CSS and static assets ┣ 📂 views # EJS templates ┣ 📜 index.js # Main server file ┣ 📜 books.sql # SQL script to create tables ┣ 📜 notes.csv # Sample data for notes ┣ 📜 books.csv # Sample data for books ┗ 📜 README.md # Project documentation

## Steps TO DO 

1️⃣ Navigate to your folder with

 "cd YOUR_FOLDER_PATH"

2️⃣ Install Dependencies

npm install

3️⃣ Set Up PostgreSQL Database
Create a new PostgreSQL database named book_notes.
Change the password in the code;

use tables.sql file to create needed tables. After insert data with books.csv and notes.csv ( You can add more info in notes.csv);

4️⃣ Run the Server

node index.js

5️⃣ Open in Browser
Go to: http://localhost:3000

✨ Author
Developed by Ravilya Rafikova 🎨💻
