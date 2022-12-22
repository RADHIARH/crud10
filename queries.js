const Pool = require("pg").Pool;
const pool = new Pool({
  host: "isilo.db.elephantsql.com",
  port: "5432",
  user: "dwfpxsdr",
  password: "gP0ZeQUkCH4Sti_2fb8tT4Ey0xEo4oUZ",
  database: "dwfpxsdr",
});

const getUsers = (request, response) => {
  pool.query("SELECT * FROM quote ", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers,
};
