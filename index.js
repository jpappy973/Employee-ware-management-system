import emlpoyee from './employee.js';
import department from './departments.js';
import role from './roles.js';
import AddDeparment from './addDepartment.js';
import Addrole from './addRole.js';
import addEmployee from './addEmployee.js';
import inq from 'inquirer'



// tilte display 
console.log(`
 
▗▄▄▄▗▖ ▗▗▖  ▗▖▗▄▄▖
▐▌  ▐▌ ▐▐▛▚▞▜▐▌   
▐▛▀▀▐▌ ▐▐▌  ▐▌▝▀▚▖
▐▙▄▄▐▙█▟▐▌  ▐▗▄▄▞▘
                  
`)

//function for starting app 
function init(){
    inq.prompt([
        {
            type:"list",
            message:'Choice choice a action?',
            choices:['View_all_employee','View_all_departments','View_all_roles','Add_employee','Add_department','Add_role'],
            name:'role'
            
        },
    ]).then(async (resp)=>{
        if(resp.role ==  'View_all_employee'){
            emlpoyee();
            init()
            return;
           
        }

        //
        if(resp.role ==  'View_all_departments'){
            department();
            init()
            return;
        }

        if(resp.role ==  'View_all_roles'){
            role();
            init()
            return;
        }

        if(resp.role ==  'Add_employee'){
            await addEmployee();
            init();

           return
        }

        if(resp.role ==  'Add_department'){
           await AddDeparment();
           init()
            return
        }

        if(resp.role ==  'Add_role'){
            await Addrole();
            init()
            return;
        }
    })
    
}

init();

export default init;