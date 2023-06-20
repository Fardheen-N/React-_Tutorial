import React from "react";

const Hello = () =>{
    // return (
    //     <div>
    //         <h1>HEllO world</h1>
    //     </div>
    // )
    return React.createElement('div',{id:'hello',className :'dummy'},React.createElement('h1',null,'Hello meow'))
}

export default Hello