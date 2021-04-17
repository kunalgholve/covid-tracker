const {pool}=require('pg');

const pool=new pool({
    user:'postgres',
    password:'root',
    host:'localhost',
    port:5432,
    database:'covid_db'
});

module.exports={pool};