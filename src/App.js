import { useState } from 'react';
import './index.css';
import Employee from './components/Employee.js';
import {v4 as uuidv4} from 'uuid'

function App() {
  const [role, setRole] = useState('default');
  const [employees, setEmployee] =useState(
    [
      {id:1, name: "Caleb", role: 'Senior', img:"https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=600"},
      {id:2, name: "Emily", role: 'Intern', img:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"},
      {id:3, name: "Camilla", role: 'developer', img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=400"},
      {id:4, name: "John", role: 'manager', img:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"},

    ]
  )

  const showEmployee = true;
  return (
    <div  className="app"> 
      <input type='text' onChange={(e)=>
        setRole(e.target.value)
      }/>
    {showEmployee?(

      <div className='flex flex-wrap justify-center'>
        { employees.map((employee) => {
          console.log(uuidv4())
          return(
        <Employee
            key={uuidv4()}
            name={employee.name}
            role={employee.role}
            img={employee.img}
        />
          )
        })}
        

      </div>
      ): (
      <p>you cannot view the employees</p>
      )}
    </div>
  );
}

export default App;
