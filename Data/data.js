import { renderHighlight } from "../render/render.js";

function square(color, id, peice, highlight=false) {
    const setHighlight = (highlightData) => {
        // console.log(highlightData);
        highlightData.highlight = true;
        renderHighlight(highlightData.id);
    }
    return { color, id, peice, highlight, setHighlight };            //advance-objects-literals concept
}

//INITIAL SETTING OF BOARD
function squareRow(rowID) {
    const squareRowArr = [];
    const abcdVal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    //if even row then bgClr of first block will be  white
    if (rowID % 2 == 0) {
        //looping throught each element of abcd array, so we can create total of 64 blocks (i.e 8rows and 8cols)
        abcdVal.forEach((Element, index) => {
            if (index % 2 == 0) {
                squareRowArr.push(square("white", Element + rowID, null));        //this will first become white box on a8 position
            }
            else {
                squareRowArr.push(square("black", Element + rowID, null));       //this will first become black box on b8 position
            }
        })
    }
    else {
        abcdVal.forEach((Element, index) => {
            if (index % 2 == 0) {
                squareRowArr.push(square("black", Element + rowID, null));       //for odd row number, first block will be black 
            }
            else {
                squareRowArr.push(square("white", Element + rowID, null));
            }
        })
    }

    return {
        squareRowArr, rowID
    };
}

function gameInit() {
    return [
        squareRow(8),       //in args i have passed rowid/row number
        squareRow(7),
        squareRow(6),
        squareRow(5),
        squareRow(4),
        squareRow(3),
        squareRow(2),
        squareRow(1),
    ]
}

export { gameInit };