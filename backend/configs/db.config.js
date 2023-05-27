require("dotenv").config();

module.exports = {
  DB_URL: process.env.MONGODB_URI,
};
