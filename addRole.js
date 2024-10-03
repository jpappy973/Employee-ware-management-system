import ing from 'inquirer';

import pg from 'pg';

const { Client } = pg;

//connecting to database and adds information to the table


async function Addrole(){
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
            message:'Enter title?',
            name:'title'
        },
        {
            type:"input",
            message:'Enter salary?',
            name:'salary'
        },
        {
            type:"checkbox",
            message:'Choice Deportment?',
            choices:['Front_office','Maintenace','Housekeeping','Food_and_bevarage','Engineering','Houseman'],
            name:'department'
            
        }
    ]).then((resp)=>{
        const RanNum =  Math.floor(Math.random() * 100) + 1;
        if(resp.department == 'Front_office'){
    
 
    const res = client.query(`INSERT INTO role(id,title,salary,department_id) VALUES (${RanNum}, '${resp.title}','${resp.salary}',1234) RETURNING * `, (res,err)=>{
        if(!err){
           console.log(res)
           console.log('Role is added to the database')
           
        }else{
            console.log(err.message);
        }
        client.end()
    })}
//----------------------------------
    if(resp.role == 'Maintenace'){
        
     
        const res =client.query(`INSERT INTO role(id,title,salary,department_id) VALUES (${RanNum},'${resp.title}','${resp.salary}',4567) RETURNING * `, (res,err)=>{
            if(!err){
               console.log(res)
               console.log('Role is added to the database')
               
            }else{
                console.log(err.message);
            }
            client.end()
        })}
    //----------------------------------
        if(resp.role == 'Housekeeping'){
            
         
            const res =client.query(`INSERT INTO role(id,title,salary,department_id) VALUES (${RanNum}, '${resp.title}','${resp.salary}',1788) RETURNING * `, (res,err)=>{
                if(!err){
                   
                   console.log('Role is added to the database')
                   
                }else{
                    console.log(err.message);
                }
                
                client.end()
            })}
        //----------------------------------
        if(resp.role == 'Food_and_bevarage'){
            
         
            const res =client.query(`INSERT INTO role(id,title,salary,department_id) VALUES (${RanNum}, '${resp.title}','${resp.salary}',9356) RETURNING * `, (res,err)=>{
                if(!err){
                   console.log(res)
                   console.log('Role is added to the database')
                   
                }else{
                    console.log(err.message);
                }
                client.end()
            })}
        //----------------------------------
        if(resp.role == 'Engineering'){
           
            const res =client.query(`INSERT INTO role(id,title,salary,department_id) VALUES (${RanNum}, '${resp.title}','${resp.salary}',8903) RETURNING * `, (res,err)=>{
                if(!err){
                   console.log(res)
                   console.log('Role is added to the database')
                   
                }else{
                    console.log(err.message);
                }
                client.end()
            })}
        
            //----------------------------------
        if(resp.role == 'Houseman'){
           
            const res =client.query(`IINSERT INTO role(id,title,salary,department_id) VALUES (${RanNum}, '${resp.title}','${resp.salary}',4034) RETURNING * `, (res,err)=>{
                if(!err){
                   console.log(res)
                   console.log('Role is added to the database')
                   
                }else{
                    console.log(err.message);
                }
                client.end()
            })}
       
            
})


return
}





export default Addrole
