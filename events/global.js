import { ROOT_DIV } from "../helper/constants.js";
import { globalState } from "../index.js";

function globalEvent() {
    ROOT_DIV.addEventListener("click", (dets) => {
        
        if(dets.target.localName==="img"){
            var clickedId = dets.target.parentNode.id;          //IMP returns square.id
            const flatArr = globalState.map(rows => rows.squareRowArr).flat();          //made 2D array into 1D array   AND  used .map() to extract squareRowArr from globalState object.    
            // console.log(flatArr);
            flatArr.forEach((elem)=>{
                if(elem.id==clickedId){
                    console.log(elem);              //getting selected block's bgclr, id and peice data☻
                }
            })
        }
    })
}

export {globalEvent};