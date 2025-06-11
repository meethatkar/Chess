import { ROOT_DIV } from "../helper/constants.js";
import { globalState } from "../index.js";
import { renderHighlight, clearHighlight } from "../render/render.js";


function whitePawnClicked({ peice }) {             //HERE {PEICE} TAKE AS ARGS IS KNOW AS DESTRUCTURING
    var curr_pos = peice.current_pos;
    clearHighlight();
    document.getElementById(curr_pos).classList.add("whiteHighlight");
    if (curr_pos[1] == "2") {
        var highlightSquareIds = [
            `${curr_pos[0]}${Number(curr_pos[1]) + 1}`,              //THEY ARE TEMPLATE 
            `${curr_pos[0]}${Number(curr_pos[1]) + 2}`               //NEED TO TYPECAST IN NUMBER AS, OTHERWISE IT WILL CONCATE IT WITH STRING
        ]
    }
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
                        whitePawnClicked(elem);
                    }
                }
            })
        }
    })
}

export { globalEvent };