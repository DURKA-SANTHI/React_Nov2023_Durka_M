import React,{useState} from "react";

function ListItems(){
    const[students]=useState([
        {
            id:1,
            name:"John",
            age:18
        },
        {
            id:2,
            name:"Trinity",
            age:18
        },
        {
            id:3,
            name:"Daniel",
            age:18
        }
    ]);

    return(
        <div>
            <h1>List of Items</h1>
            <hr></hr>
            <ul style={{listStyle:"none"}}>
                {students.map((stu) => (
                    <li key={stu.id}>
                        <h2>ID: {stu.id}</h2>
                        <p>NAME: {stu.name}</p>
                        <p>AGE: {stu.age}</p>
                        </li>
                ))}

            </ul>
      
           
    
        </div>
    );
}
export default ListItems;