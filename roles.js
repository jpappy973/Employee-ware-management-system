import pg from 'pg';

const { Client } = pg;





//this function connects to the batabase and displays the information. 


function role(){ 

const client = new Client({
    host:'localhost',
    user:'postgres',
    port:5432,
    database: 'postgres',
    password:"Jm-25-25"
})
client.connect();
client.query('Select * from role',(err,res)=>{
    let MainArr = [];

    if(!err){
        
        for(let i = 0;i<res.rows.length;i++){

        const AddtoArr = {}
        
        AddtoArr["title"] = res.rows[i].title
        AddtoArr["salary"] =`$${res.rows[i].salary}`
        AddtoArr["departmentID"]= res.rows[i].department_id
        MainArr.push(AddtoArr)
            
        }
    console.log(`\n`)
    console.table(MainArr)
    }else{
        console.log(err.message);
    }
    

    client.end;
})
return
}

export default role;