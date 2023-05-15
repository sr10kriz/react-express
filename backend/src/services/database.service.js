// const mysql = require("mysql");
const mysql2 = require("mysql2");
const databaseConfig = require("../config/database.config");

const query = async (sql, params) => {
  const connection = await mysql2.createConnection(databaseConfig);
  const results = await connection.execute(sql, params);
  return results;
};

module.exports = { query };
