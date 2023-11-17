import React,{useState} from "react";

function ListItems(){
    const[Emp]=useState([
        {
            EmpId:1,
            EmpName:"Mike",
            Dept:"Executive Manager",
            Salary:50000
    
        },
        {
            EmpId:2,
            EmpName:"John",
            Dept:"Assistant Manager",
            Salary:40000
    
        },
        {
            EmpId:2,
            EmpName:"Paul",
            Dept:"Sales",
            Salary:35000
    
        },
        {
            EmpId:4,
            EmpName:"Trinity",
            Dept:"Ceo",
            Salary:Infinity
        },
    ]);

    return(
       
        <div >
            <h1>List of Employee Details</h1>
            <hr></hr>
            
      <p>


           <table style={{border:'2px solid black'}}>
            <tr>
                <td style={{border:'2px solid black'}}>EmpId</td>
                <td style={{border:'2px solid black'}}>EmpName</td>
                <td style={{border:'2px solid black'}}>Dept</td>
                <td style={{border:'2px solid black'}}>Salary</td>
            </tr>
            
           {Emp.map((emp) => (
               <tr key={emp.id}>
                       <td style={{border:'2px solid black'}}> {emp.EmpId}</td>
                       <td style={{border:'2px solid black'}}> {emp.EmpName}</td>
                       <td style={{border:'2px solid black'}}> {emp.Dept}</td>
                       <td style={{border:'2px solid black'}}> {emp.Salary}</td>
                        </tr>
                ))}
            </table>
                </p>
        </div>
    );
}
export default ListItems;