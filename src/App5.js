import React from "react";

export default function App5(){
    let names = ["John", "Cathy", "Mike"];
    return(
        <ul>
            {names.map((e,i) => (
                <li key={i}>{e}</li>
            ))}
        </ul>
    )
}