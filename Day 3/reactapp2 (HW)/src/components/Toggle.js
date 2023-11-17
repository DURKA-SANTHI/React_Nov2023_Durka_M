import React, {useState} from "react";
function Toggle() {
    const [name, setName] = useState("Kaioken");
    const transformationHandler = () => {
        if(name==="Kaioken")
        setName("SuperSaiyan");
    else
    setName("Kaioken");
    };
    return(
        <div>
           
            <h1>{name}</h1>
            <button onClick={transformationHandler}>Toggle</button>
        </div>
    );
}
export default Toggle;