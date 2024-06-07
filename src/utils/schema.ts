const { query } = require("./db");
// const dotenv = require("dotenv");

// dotenv.config({ path: "../../env.local" });

console.log("* Creating Postgres tables from schemas");

// User interface to be specified on account creation
interface User {
  id: number;
  name: string;
  username: string;
  password: string;
  role: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
}

const createTables = async () => {
  try {
    const userTable: string = `CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(60) NOT NULL,
      username VARCHAR(30) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL,
      role VARCHAR(50) NOT NULL
    );`;

    const leetCodeUserTable: string = `CREATE TABLE IF NOT EXISTS leetCodeUsers (
      leetcode_user_id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL,
      username VARCHAR(30) UNIQUE NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );`;

    const leetCodeTable: string = `CREATE TABLE IF NOT EXISTS leetCodeSubmissions (
      submission_id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL,
      submission_date VARCHAR(30) NOT NULL,
      accepted_submissions INTEGER NOT NULL,
      CONSTRAINT unique_user_submission_date UNIQUE (user_id, submission_date),
      FOREIGN KEY (user_id) REFERENCES users(id)
    );`;

    await query(userTable);
    console.log(" - Users table created or already exists.");

    await query(leetCodeTable);
    console.log(" - Leet Code Submissions table created or already exists.");
  } catch (err) {
    console.error(" - Error creating tables:", err);
  }
};

createTables();
