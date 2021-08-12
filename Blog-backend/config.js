const dotenv = require("dotenv");
dotenv.config();

const env_variables = {
  port: process.env.PORT,
  mongo_url: process.env.MONGO_URL,
};

module.exports = env_variables;
