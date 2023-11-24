import React from "react";

function PureComponent(props) {
    console.log("Pure Component!");
    return(
        <div>
            <h1>PureComponent{props.data}</h1>
        </div>
    );
}

export default React.memo(PureComponent);