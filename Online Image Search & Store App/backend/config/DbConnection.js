const mysql = require('mysql')

const settings = {

  host: 'localhost',
  port:"3307",
  user: 'root',
  password: 'root',
  database: 'imageStoreDB'

}

let con;

function conectDatabase() {
  if (!con) {
    con = mysql.createConnection(settings)
    con.connect((err) => {
      if (!err) {
        console.log("datatabe connect successfully")
      } else {
        console.log("database not connected :", err)
      }
    })


  }

  return con;
}

module.exports =conectDatabase()
