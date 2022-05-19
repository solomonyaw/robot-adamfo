import React from "react";


const Searchbox =({searchfield,onsearchchange})=>{

    return(
        <div className="p2">
        <input
         className="pa3 ba b--blue bg-light-silver hover-hot-black"
          type="search" name="searchrobot" 
          placeholder="serach for a robot"
          onChange={onsearchchange}
          />
          
       </div>
    );
}

export default Searchbox;