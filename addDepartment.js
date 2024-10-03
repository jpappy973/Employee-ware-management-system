import ing from 'inquirer';

import pg from 'pg';

const { Client } = pg;


//connects to database and adds info to table




async function AddDeparment(){
    const client = new Client({
        host:'localhost',
        user:'postgres',
        port:5432,
        database: 'postgres',
        password:"Jm-25-25"
    })

    client.connect();

    await ing.prompt([
        {
            type:"input",
            message:'Enter department name?',
            name:'department'
        },
    ]).then((resp)=>{
        const RanNum =  Math.floor(Math.random() * 100) + 1;
        const res = client.query(`INSERT INTO department(id,name) VALUES (${RanNum}, '${resp.department}') RETURNING * `, (res,err)=>{
            if(!err){
                console.log('Department added')
                console.log('Department added')
                
             }else{
                 console.log(err.message);
             }
             client.end()

        })
    })

    
    return;
}

export default AddDeparment;