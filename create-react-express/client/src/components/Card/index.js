import React from "react";

function Card({cardName, children}){
    return(
        <div className="card">
            <div className="card-header">
                {cardName}
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default Card;