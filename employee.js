import pg from 'pg';

const { Client } = pg;




//View all employee in database by connecting to database and extacting the information

const emlpoyee = ()=>{
    const client = new Client({
        host:'localhost',
        user:'postgres',
        port:5432,
        database: 'postgres',
        password:"Jm-25-25"
    })
    
    client.connect();
    client.query('Select * from employee',(err,res)=>{
    
    if(!err){
        const display = []
        
    
         for(let i=0;i<res.rows.length;i++){
            const AddToarr ={
                ID:res.rows[i].id,
                First_name:res.rows[i].first_name,
                Last_name:res.rows[i].last_name,
            }

            if(res.rows[i].role_id == 1234){
                AddToarr['role'] = 'Front_office'
                AddToarr['Manager'] = 'Arlo Massey'
            }else if(res.rows[i].role_id == 4567){
                AddToarr['role'] = 'Maintenace'
                AddToarr['Manager'] = 'Jordan Wells'
            }else if(res.rows[i].role_id == 1788){
                AddToarr['role'] = 'Housekeeping'
                AddToarr['Manager'] = 'Jordan Wells'
            }else if(res.rows[i].role_id == 9356){
                AddToarr['role'] = 'Food_and_Bevarage'
                AddToarr['Manager'] = 'Boone Gill'}
            else if(res.rows[i].role_id == 8903){
                AddToarr['role'] = 'Engineering'
                AddToarr['Manager'] = 'Addilynn Vincent'
            }else if(res.rows[i].role_id == 4034){
                    AddToarr['role'] = 'Houseman'
                    AddToarr['Manager'] = 'Jordan Wells'
            }else if(res.rows[i].role_id == 5784){
                AddToarr['role'] = 'Front_office_manager'
                AddToarr['Manager'] = 'GM'
            }else if(res.rows[i].role_id == 5437){
                AddToarr['role'] = 'Maintenace_manager'
                AddToarr['Manager'] = 'GM'
            }else if(res.rows[i].role_id == 253){
                AddToarr['role'] = 'F&B_manager'
                AddToarr['Manager'] = 'GM'
            }else if(res.rows[i].role_id == 1673){
                AddToarr['role'] = 'Engineering_manager'
                AddToarr['Manager'] = 'GM'
            }else{
                AddToarr['role'] = res.rows.role_id
                AddToarr['Manager'] = res.rows.manager_id
            }
            display.push(AddToarr)
           
         }
         console.log(`\n`)
         console.table(display)
    }else{
        console.log(err.message);
    }

    client.end;
    
})
return;
}


export default emlpoyee;
