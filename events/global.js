import { ROOT_DIV } from "../helper/constants.js";
import { globalState } from "../index.js";
import { renderHighlight, clearHighlight, movePeice } from "../render/render.js";

// MOVE STATE
let isMove = null;
var selfHighlight = null;

// function getSelfHighlight(){
//     return selfHighlight;
// }
function setSelfHighlight(val){
    selfHighlight = val;
    console.log("value set");
    //MADE THIS FUNCTION SO, 2ND TIME WHEN CLICKED THE CODE WORKS PERFECTLY    
}

//Function that will be executed when white pawn is clicked
function whitePawnClicked(elem) {        
    //HERE {PEICE} TAKE AS ARGS IS KNOW AS DESTRUCTURING
    let peice = elem.peice;
    console.log("parent: ",elem.parentNode);
    
    var curr_pos = peice.current_pos;
    if(peice == selfHighlight){        
    document.getElementById(curr_pos).classList.remove("whiteHighlight") ;
    clearHighlight();
    selfHighlight = null;
    return;         //WROTE TO STOP FUNCTION EXECUTION HERE ONLY.
    }    
            console.log("1st tame", peice, selfHighlight);

    clearHighlight();
    // debugger;
    selfHighlight = peice;
    console.log("assigned: ",selfHighlight);
    
    document.getElementById(curr_pos).classList.add("whiteHighlight") ;
    isMove = peice;             // this peice should move '
        // selfHighlight = peice
    // for initial position movement only
    if (curr_pos[1] == "2") {
        
        var highlightSquareIds = [
            `${curr_pos[0]}${Number(curr_pos[1]) + 1}`,              //THEY ARE TEMPLATE  LITERALS
            `${curr_pos[0]}${Number(curr_pos[1]) + 2}`               //NEED TO TYPECAST IN NUMBER AS, OTHERWISE IT WILL CONCATE IT WITH STRING
        ]
        highlightSquareIds.forEach((elem) => {                //MADE THIS FOREACH, BECAUSE RENDERHIGHLIGHT() TAKES SINGLE NUMBER AS ARGUMENT, OS CALLING 2 TIMES PASSING SINGLE PARAMETER.
        globalState.forEach((raw) => {
            raw.squareRowArr.forEach((rawSquare) => {
                if (rawSquare.id == elem) {
                    rawSquare.setHighlight(rawSquare);
                }
            })
        })
    })
    }    
    // WEE RUN WHEN PEICES ARE NOT ON INITAL POSITION
    else{        
        var highlightSquareIds = [
            `${curr_pos[0]}${Number(curr_pos[1]) + 1}`,              //THEY ARE TEMPLATE LITERALS 
        ]
        highlightSquareIds.forEach((elem) => {                //MADE THIS FOREACH, BECAUSE RENDERHIGHLIGHT() TAKES SINGLE NUMBER AS ARGUMENT, OS CALLING 2 TIMES PASSING SINGLE PARAMETER.
        globalState.forEach((raw) => {
            raw.squareRowArr.forEach((rawSquare) => {
                if (rawSquare.id == elem) {
                    rawSquare.setHighlight(rawSquare);
                }
            })
        })
    })
    }

}

//Function that will be executed when black pawn is clicked
function blackPawnClicked(elem) {        
    //HERE {PEICE} TAKE AS ARGS IS KNOW AS DESTRUCTURING
    let peice = elem.peice;
    console.log("parent: ",elem.parentNode);
    
    var curr_pos = peice.current_pos;
    if(peice == selfHighlight){        
    document.getElementById(curr_pos).classList.remove("whiteHighlight") ;
    clearHighlight();
    selfHighlight = null;
    return;         //WROTE TO STOP FUNCTION EXECUTION HERE ONLY.
    }    
            console.log("1st tame", peice, selfHighlight);

    clearHighlight();
    // debugger;
    selfHighlight = peice;
    console.log("assigned: ",selfHighlight);
    
    document.getElementById(curr_pos).classList.add("whiteHighlight") ;
    isMove = peice;             // this peice should move '
        // selfHighlight = peice
    // for initial position movement only
    if (curr_pos[1] == "7") {
        
        var highlightSquareIds = [
            `${curr_pos[0]}${Number(curr_pos[1]) - 2}`,              //THEY ARE TEMPLATE  LITERALS
            `${curr_pos[0]}${Number(curr_pos[1]) - 1}`               //NEED TO TYPECAST IN NUMBER AS, OTHERWISE IT WILL CONCATE IT WITH STRING
        ]
        highlightSquareIds.forEach((elem) => {                //MADE THIS FOREACH, BECAUSE RENDERHIGHLIGHT() TAKES SINGLE NUMBER AS ARGUMENT, OS CALLING 2 TIMES PASSING SINGLE PARAMETER.
        globalState.forEach((raw) => {
            raw.squareRowArr.forEach((rawSquare) => {
                if (rawSquare.id == elem) {
                    rawSquare.setHighlight(rawSquare);
                }
            })
        })
    })
    }    
    // WEE RUN WHEN PEICES ARE NOT ON INITAL POSITION
    else{        
        var highlightSquareIds = [
            `${curr_pos[0]}${Number(curr_pos[1]) - 1}`,              //THEY ARE TEMPLATE LITERALS 
        ]
        highlightSquareIds.forEach((elem) => {                //MADE THIS FOREACH, BECAUSE RENDERHIGHLIGHT() TAKES SINGLE NUMBER AS ARGUMENT, OS CALLING 2 TIMES PASSING SINGLE PARAMETER.
        globalState.forEach((raw) => {
            raw.squareRowArr.forEach((rawSquare) => {
                if (rawSquare.id == elem) {
                    rawSquare.setHighlight(rawSquare);
                }
            })
        })
    })
    }

}

//this identifies clicks made on peices.
function globalEvent() {
    ROOT_DIV.addEventListener("click", (dets) => {        
        if (dets.target.localName === "img") {
            var clickedId = dets.target.parentNode.id;          //IMP returns square.id
            const flatArr = globalState.map(rows => rows.squareRowArr).flat();          //made 2D array into 1D array   AND  used .map() to extract squareRowArr from globalState object.    
            // console.log(flatArr);
            flatArr.forEach((elem) => {
                if (elem.id == clickedId) {
                    // console.log(elem);              //getting selected block's bgclr, id and peice data☻
                    if (elem.peice.peice_name == "pawn_White") {
                        // debugger;
                        whitePawnClicked(elem); 
                    }
                    else if(elem.peice.peice_name == "pawn_Black"){
                        blackPawnClicked(elem);
                    }
                }
            })
        }
        else{
            const childElementOfClickedEl = Array.from(dets.target.childNodes);
            //YE CONDITION LIKHA CAUSE, HIGHLIGHTED DIV PE CLICK KARTE HI EK ARRAY OF LENGHT 1 OR SPAN ELEMENT AA RHA HAI.            
            if(childElementOfClickedEl.length==1 || dets.target.localName=="span"){
                if(event.target.localName=="span"){
                    let id = dets.target.parentNode.id;
                    movePeice(isMove,id);
                    isMove = null;
                }
                else{
                    let id = dets.target.id;
                    movePeice(isMove,id);
                    isMove = null;
                }
            }
            else{
                clearHighlight();           //THIS WILL CLEAR ALL SELECTION WHEN CLICKED ON EMPTY BLOCKS (BLOCK WHICH HAS NO PEICE)
            }
        }
    })
}

export { globalEvent,setSelfHighlight };