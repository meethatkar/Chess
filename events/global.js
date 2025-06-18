import { ROOT_DIV } from "../helper/constants.js";
import { globalState } from "../index.js";
import { renderHighlight, clearHighlight, movePeice } from "../render/render.js";
import { opponenetExits } from "../helper/commonHelper.js";

// MOVE STATE
let isMove = null;
var selfHighlight = null;

// function getSelfHighlight(){
//     return selfHighlight;
// }
function setSelfHighlight(val){
    selfHighlight = val;
    //MADE THIS FUNCTION SO, 2ND TIME WHEN CLICKED THE CODE WORKS PERFECTLY    
}

//Function that will be executed when white pawn is clicked
function whitePawnClicked(elem) {        
    //HERE {PEICE} TAKE AS ARGS IS KNOW AS DESTRUCTURING
    let peice = elem.peice;    
    var curr_pos = peice.current_pos;
    if(peice == selfHighlight){        
    document.getElementById(curr_pos).classList.remove("whiteHighlight") ;
    clearHighlight();
    selfHighlight = null;
    return;         //WROTE TO STOP FUNCTION EXECUTION HERE ONLY.
    }    

    clearHighlight();
    // debugger;
    selfHighlight = peice;    
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
        
        let col1Num = curr_pos[0].charCodeAt(0);
        
        if(col1Num>=98 && col1Num<=103){            
            let col1 = `${String.fromCharCode(curr_pos[0].charCodeAt(0) - 1)}${Number(curr_pos[1]) + 1}`;
            //curr_pos[0] will return alphabets  & curr_pos[1] returns row number.
            let col2 = `${String.fromCharCode(curr_pos[0].charCodeAt(0) + 1)}${Number(curr_pos[1]) + 1}`
            console.log(opponenetExits(col1, "white"));
            ;      //passing current_pos OR square ID and color
            console.log(opponenetExits(col2, "white"));
            ;
        }
        else if(col1Num==97){           // if peice is on first colum then
            let col1 = `${String.fromCharCode(curr_pos[0].charCodeAt(0) + 1)}${Number(curr_pos[1]) + 1}`;
            opponenetExits(col1, "white");      //passing current_pos OR square ID and color

        }
        else if(col1Num==104){
            let col2 = `${String.fromCharCode(curr_pos[0].charCodeAt(0) - 1)}${Number(curr_pos[1]) + 1}`
            opponenetExits(col2, "white");      //passing current_pos OR square ID and color

        }

        // console.log(col1,col2);

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
    
    var curr_pos = peice.current_pos;
    if(peice == selfHighlight){        
    document.getElementById(curr_pos).classList.remove("whiteHighlight") ;
    clearHighlight();
    selfHighlight = null;
    return;         //WROTE TO STOP FUNCTION EXECUTION HERE ONLY.
    }    

    clearHighlight();
    // debugger;
    selfHighlight = peice;
    
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