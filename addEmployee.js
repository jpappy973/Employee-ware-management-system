import inquirer from 'inquirer';

import pg from 'pg';

const { Client } = pg;

import init from './index.js';


// addes information to my postgres table 
async function addEmployee(){
    const client = new Client({
        host:'localhost',
        user:'postgres',
        port:5432,
        database: 'postgres',
        password:"Jm-25-25"
    })

    client.connect();

    await inquirer.
    prompt([
    {
    type:"input",
    message:'Enter employee first name?',
    name:'first_name'
    },
    {
        type:"input",
        message:'Enter employee last name?',
        name:'last_name'
        
    },
    {
        type:"checkbox",
        message:'Choice employee role?',
        choices:['Front_office','Maintenace','Housekeeping','Food_and_bevarage','Engineering','Houseman'],
        name:'role'
        
    },
    {
        type:"checkbox",
        message:'Choice manager?',
        choices:['Jordan','Arlo','Aaray','Boone','Addilynn'],
        name:'Manager'
        
    },

]).then((resp)=>{
   const RanNum =  Math.floor(Math.random() * 100) + 1;

   if(resp.role == 'Front_office'){
    
 
    const res = client.query(`INSERT INTO employee(id,first_name,last_name,role_id,manager_id) VALUES (${RanNum}, '${resp.first_name}','${resp.last_name}',1234,4567) RETURNING * `, (res,err)=>{
        if(!err){
           console.log(res)
           console.log('employee is added to the database')
           
        }else{
            console.log(err.message);
        }
        client.end()
    })}
//----------------------------------
    if(resp.role == 'Maintenace'){
        
     
        const res =client.query(`INSERT INTO employee(id,first_name,last_name,role_id,manager_id) VALUES (${RanNum}, '${resp.first_name}','${resp.last_name}',4567,5437) RETURNING * `, (res,err)=>{
            if(!err){
               console.log(res)
               console.log('employee is added to the database')
               
            }else{
                console.log(err.message);
            }
            client.end()
        })}
    //----------------------------------
        if(resp.role == 'Housekeeping'){
            
         
            const res =client.query(`INSERT INTO employee(id,first_name,last_name,role_id,manager_id) VALUES (${RanNum}, '${resp.first_name}','${resp.last_name}',1788,9843) RETURNING * `, (res,err)=>{
                if(!err){
                   console.log(res)
                   console.log('employee is added to the database')
                   
                }else{
                    console.log(err.message);
                }
                
                client.end()
            })}
        //----------------------------------
        if(resp.role == 'Food_and_bevarage'){
            
         
            const res =client.query(`INSERT INTO employee(id,first_name,last_name,role_id,manager_id) VALUES (${RanNum}, '${resp.first_name}','${resp.last_name}',9356,253) RETURNING * `, (res,err)=>{
                if(!err){
                   console.log(res)
                   console.log('employee is added to the database')
                   
                }else{
                    console.log(err.message);
                }
                client.end()
            })}
        //----------------------------------
        if(resp.role == 'Engineering'){
           
            const res =client.query(`INSERT INTO employee(id,first_name,last_name,role_id,manager_id) VALUES (${RanNum}, '${resp.first_name}','${resp.last_name}',8903,1673) RETURNING * `, (res,err)=>{
                if(!err){
                   console.log(res)
                   console.log('employee is added to the database')
                   
                }else{
                    console.log(err.message);
                }
                client.end()
            })}
        
            //----------------------------------
        if(resp.role == 'Houseman'){
           
            const res =client.query(`INSERT INTO employee(id,first_name,last_name,role_id,manager_id) VALUES (${RanNum}, '${resp.first_name}','${resp.last_name}',4034,9843) RETURNING * `, (res,err)=>{
                if(!err){
                   console.log(res)
                   console.log('employee is added to the database')
                   
                }else{
                    console.log(err.message);
                }
                client.end()
            })}
       
            
})

return
}




export default addEmployee;