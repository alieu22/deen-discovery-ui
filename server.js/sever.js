import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import path from 'path';


const app = express();
const port = 5173;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'thought-of-the-day-app/build')));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'deen_app',
});

connection.connect();

// Serve the React app
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'thought-of-the-day-app/build', 'index.html'));
});

// Fetch ThoughtOfTheDay from the database
app.get('/api/thought-of-the-day', (req, res) => {
  connection.query('SELECT thought FROM ThoughtOfTheDayTable ORDER BY RAND() LIMIT 1', (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json({ thought: results[0].thought });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to database:', error);
  } else {
    console.log('Connected to database');
  }
});

