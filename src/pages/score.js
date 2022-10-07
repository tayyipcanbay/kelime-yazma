import React from "react";

function Score(){
    var score=localStorage.getItem("lastScore");
    return (
        <div className="scoreMain">
            <h3 style={{color:'white'}}>Your Score is:</h3>
            <h1 style={{color:'white'}}>
                {score}
            </h1>
        </div>
    )
}
export default Score;