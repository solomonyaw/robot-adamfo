import React from "react";
import { robots } from "./robots";


const Card =({name,id,email,country})=>{
    return(
        <div className=" tc bg-green hover-bg-light-yellow b--solid-ns dib items-baseline pa3 ma2 grow shadow-5 bw2">
        <img src={`https://robohash.org/${id}200x200`} alt="robots"/>
        <div>
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{country}</p>
        </div>
        </div>
    );
}

export default Card;


