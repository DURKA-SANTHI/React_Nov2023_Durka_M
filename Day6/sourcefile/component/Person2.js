import UpdateComponent from "./HOC";

function Person2({money,handleIncrease}) {
    return (
        <div>
            <h2> Jack is offering ${money}</h2>
            <button onClick={handleIncrease}>Increase Offering</button>
        </div>
    );
}

export default UpdateComponent(Person2);