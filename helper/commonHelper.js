import { globalState } from "../index.js";

function opponenetExits(id, color){
    console.log(id,color);
    let flatArray = globalState.map(row=>row.squareRowArr).flat();
    for(let i=0;i<=(flatArray.length)-1;i++){
        const elem = flatArray[i];
        if(elem.id == id){
            if(elem.peice){
                // console.log(document.getElementById(id));
                console.log(elem);
                return true;            
            }            
        }
    }    
    return false;
}

export {opponenetExits};