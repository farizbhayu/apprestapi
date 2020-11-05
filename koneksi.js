var mysql = require('mysql');

// step 3
// koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbrestapi'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('MySQL terkoneksi');
});

module.exports = conn;