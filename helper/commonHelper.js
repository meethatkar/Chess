import { globalState } from "../index.js";
import { highlightOpponent } from "../render/render.js";
import { setopponentHighlightState, getopponentHighlightState } from "../events/global.js";



function opponenetExits(id, color){
    // console.log(id,color);
    const opponentColor = color === "white" ? "Black" : "White";        //if whtie then opponent is black and vice versa.
    let flatArray = globalState.map(row=>row.squareRowArr).flat();
    for(let i=0;i<=(flatArray.length)-1;i++){
        const elem = flatArray[i];
        if(elem.id == id){
            if(elem.peice && elem.peice.peice_name.includes(opponentColor)){        //include method check for the string passed as argument.
                // console.log(document.getElementById(id));
                elem.highlightOpponent = true;
                console.log(elem);
                
                // console.log(document.getElementById(elem.id));
                // let state = getopponentHighlightState()
                console.log(getopponentHighlightState());
                
                if(getopponentHighlightState()){
                    setopponentHighlightState(false);       //highlighting done by this function
                }
                else{
                    setopponentHighlightState(true);
                }
                // document.getElementById(elem.id).classList.add("capture-highlight");
                return true;            
            }            
        }
    }    
    return false;
}

function captureOpponent(){

}
export {opponenetExits};