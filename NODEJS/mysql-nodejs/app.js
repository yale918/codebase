const mysql = require('mysql2');
const uuid = require('uuid')

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'yale918',
  password: 'yeah31212',
  database: 'qnote'
})
conn.connect()
conn.query('SELECT 12 + 34 AS result', function(err,rows,fields){
  if(err) throw err;
  console.log('result:', rows[0].result, "(db connected)")
})

//const uid = uuid.v4()

const sql = "INSERT INTO message (name,title,time) VALUES ('yale918','titleFromNodejs',NOW())"
conn.query(sql,function(err,result){
  if(err) throw err;
  console.log("1 record inserted")
})

conn.end(function(err){
  if(err){
    return console.log(err.message)
  }
})
