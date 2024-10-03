import pg from 'pg';

const { Client } = pg;








function department(){ 
    const client = new Client({
        host:'localhost',
        user:'postgres',
        port:5432,
        database: 'postgres',
        password:"Jm-25-25"
    })

    client.connect();

    client.query('Select * from department',(err,res)=>{
    if(!err){
        console.log(`\n`)
        console.table(res.rows);
        console.log(`\n`)
    }else{
        console.log(err.message);
    }

    client.end;
})
return;
}

export default department;