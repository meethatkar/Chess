// import { blackPawn } from "../Data/peices.js";
// import { whitePawn } from "../Data/peices.js";

import * as peices from "../Data/peices.js"     //this is easy, as if not done this then nee dot write import statement 12 times
import { ROOT_DIV } from "../helper/constants.js"

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
export {initGameRender};
export {peiceRender};