require('dotenv').config();

const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgres://tech_jf4z_user:VYA0pWI7MjvngdZHvqimWYwq43lFXjuD@dpg-cj542uk5kgrc7389m7ig-a/tech_jf4z`;

const pool = new Pool({
    connectionString: connectionString,
    ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = { pool };

