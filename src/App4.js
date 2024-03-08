import React from "react";
import Sqr from "./sqr";

export default function App4(){
    const sqrFunction = (num) =>{
        return num * num;
    };
    return <div><Sqr n={7} f={sqrFunction}/></div>;
}
