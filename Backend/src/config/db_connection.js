const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT, 
});

async function queryDB(){
    try{
    const res = await  pool.query('SELECT NOW() ');
    console.log(res[0]);
    }catch (err){
        console.log("error",err.stack);
    }
}

queryDB();