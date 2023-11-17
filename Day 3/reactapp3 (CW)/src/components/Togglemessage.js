import React, {useState} from "react";
function Togglemessage()
{
    const [showMessage,setShowMessage] = useState(false);
    const togglemessage = () =>
    {
        setShowMessage(!showMessage);
    };
    return(
        <div>
            <h1>Dashboard</h1>
            <hr></hr>
            <button onClick={togglemessage}>
                {showMessage ? "Hide Message": "Show Message"}
            </button>
            {showMessage && <p>Hi! How are You!!!</p>}
        </div>
    );
}
export default Togglemessage;