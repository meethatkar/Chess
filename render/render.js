// import { blackPawn } from "../Data/peices.js";
// import { whitePawn } from "../Data/peices.js";

import * as peices from "../Data/peices.js"     //this is easy, as if not done this then nee dot write import statement 12 times
import { ROOT_DIV } from "../helper/constants.js"
import { globalState } from "../index.js";
import { setSelfHighlight } from "../events/global.js";

// MOVE PEICE METHOD
function movePeice(peice, id){
    // console.log(peice.current_pos+" "+id);  
    const flatArr = globalState.map(rows => rows.squareRowArr).flat();          //made 2D array into 1D array   AND  used .map() to extract squareRowArr from globalState object.    
    // THIS LOOP IS RUNED TO CHANGED DATA
    flatArr.forEach((sqr)=>{
        // console.log(sqr);
        if(sqr.id==peice.current_pos){
            clearHighlight();           //IF YOU REMOVE THIS, THEN GAME WILL BE MALFUNCTION, CAUSE  newPosition.innerHtml will become " " in clearHighlight(), so need to call this before we assign perviousPosition into newPosition
            delete sqr.peice;
        }
        if(sqr.id==id){
            sqr.peice = peice;
        }
    })

    //THIS IS DONE TO CHANGE HTML
    let previousPosition = document.getElementById(peice.current_pos);
    let newPosition = document.getElementById(id);
    
    newPosition.innerHTML = previousPosition.innerHTML;
    previousPosition.innerHTML = "";
    // console.log(previousPosition, newPosition);
    peice.current_pos = id;                 //THIS IS SET SO FURTHER MOVES CAN BE PLAYED
    setSelfHighlight("null");       
    // ABOVE IS SET SO, FIRST TIME CLICKED WILL NOT EXECUTE "if(peice == selfHighlight)"
    // console.log(globalState);
    
} 


//USE TO SET INTIAL POSITION OF PEICES
function peiceRender(data){
    data.forEach((elem)=>{
        elem.squareRowArr.forEach((square)=>{
            if(square.peice){
                const squarePic = document.getElementById(square.id);       // here id means a7,b7 or a8,b8
                const peiceDiv = document.createElement("img");
                peiceDiv.src = square.peice.img;
                peiceDiv.classList.add("peices");
                squarePic.appendChild(peiceDiv);
                // console.log(peiceDiv);
            }
        })
    })
}

// THIS FUCNTION WILL BE CALLED WHEN GAME STARTS
function initGameRender(data){
    data.forEach(element => {       //first array and so on
        var rowElem = document.createElement("div");
        element.squareRowArr.forEach((square)=>{     //first element of first array and so on
            if(element.rowID==7){
                // console.log("black"); 
                square.peice = peices.blackPawn(square.id);        //send current pos as paramenter, and returns img path and current pos
            }
            else if(element.rowID==2){
                // console.log("white");
                square.peice = peices.whitePawn(square.id);             //RENDER WHITE PAWN
            }
            else if(element.rowID==8){
                // MAIN BLACK PEICES
                if(square.id=="e8"){
                    square.peice = peices.kingBlack(square.id);             //RENDER BLACK KING
                }
                if(square.id=="d8"){
                    square.peice = peices.queenBlack(square.id);             //RENDER BLACK QUEEN
                }
                if(square.id=="c8" || square.id=="f8"){
                    square.peice = peices.camelBlack(square.id);             //RENDER BLACK CAMEL
                }
                if(square.id=="b8" || square.id=="g8"){
                    square.peice = peices.horseBlack(square.id);             //RENDER BLACK HORSE
                }
                if(square.id=="a8" || square.id=="h8"){
                    square.peice = peices.elephantBlack(square.id);             //RENDER BLACK ELEPHANT
                }
            }
            else if(element.rowID==1){
                // MAIN WHITE PEICES
                if(square.id=="e1"){
                    square.peice = peices.kingWhite(square.id);             //RENDER WHITE KING
                }
                if(square.id=="d1"){
                    square.peice = peices.queenWhite(square.id);             //RENDER WHITE QUEEN
                }
                if(square.id=="c1" || square.id=="f1"){
                    square.peice = peices.camelWhite(square.id);             //RENDER WHITE CAMEL
                }
                if(square.id=="b1" || square.id=="g1"){
                    square.peice = peices.horseWhite(square.id);             //RENDER WHITE HORSE
                }
                if(square.id=="a1" || square.id=="h1"){
                    square.peice = peices.elephantWhite(square.id);             //RENDER WHITE ELEPHANT
                }
            }
            var squareDiv = document.createElement("div");
            squareDiv.id = square.id;
            squareDiv.classList.add(square.color,"square");
            rowElem.appendChild(squareDiv);
        })      //here elemen is row, thats why it will be runned 8 times
        rowElem.classList.add("squareRow");
        ROOT_DIV.appendChild(rowElem);      
    });
}

//RENDER HIGHLIGHT CIRCLE
function renderHighlight(squareID){
    // document.getElementById(squareID).style.backgroundColor = "yellow"
    const highlightDiv = document.createElement("span");
    highlightDiv.classList.add("highlight");
    let parentDiv = document.getElementById(squareID);        
    parentDiv.appendChild(highlightDiv);
    
}

function clearHighlight(){
    let flatData = globalState.map(row=>row.squareRowArr).flat();
    // console.log(flatData);
    flatData.forEach((el)=>{
        // console.log(el.highlight);
        if(el.highlight){
            const parentDiv = document.getElementById(el.id);            
            parentDiv.innerHTML=""
            el.highlight=false;
        }
        document.getElementById(el.id).classList.remove("whiteHighlight");
    })
}

export {initGameRender, peiceRender, renderHighlight, clearHighlight, movePeice};
