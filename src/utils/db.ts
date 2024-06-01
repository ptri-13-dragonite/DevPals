// import pg package and destrucutre Pool class - manages pool of client connections
import { Pool } from "pg";

console.log("* Accessing db");

// Log environment variables for debugging
console.log("DATABASE_HOST:", process.env.DATABASE_HOST);
console.log("DATABASE_PORT:", process.env.DATABASE_PORT);
console.log("DATABASE_NAME:", process.env.DATABASE_NAME);
console.log("DATABASE_USER:", process.env.DATABASE_USER);
console.log("DATABASE_PASSWORD:", process.env.DATABASE_PASSWORD);

const port = process.env.DATABASE_PORT;
if (port === undefined) {
  throw new Error("DATABASE_PORT environment variable is not set");
}

// create a new pool with db credentials. env is encoded as strings so we need to convert the port to a decimal number
const pool = new Pool({
  host: process.env.DATABASE_HOST,
  port: parseInt(port, 10),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
});

// Attempt to connect to the database
pool.connect((err, client, release) => {
  console.log(" - Inside pool.connect callback");
  if (err) {
    console.error(" - Error connecting to the database:", err);
  } else {
    console.log(" - Connected to the database successfully!");
    // Release the client back to the pool
    release();
  }
  // Additional logging to check if the callback is invoked
});

// export a query function to rest of code
export const query = (text: string, params?: any[]) => pool.query(text, params);
