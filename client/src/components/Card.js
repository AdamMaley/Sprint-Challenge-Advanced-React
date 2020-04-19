import React from "react";


import useToggle from "./custom hooks/useToggle.js";

function Card(props) {
    const [isVisable, toggleIsVisible] = useToggle(true);
    return (
        <div>
            <button onClick={toggleIsVisible}>Show Searches</button>
            {props.players.map((player) =>
            <div key={player.id}>
                <h1>{player.name}</h1>
            {isVisable && <p>{player.searches}</p>}
            </div>
            )}
        </div>
    )
}

export default Card;