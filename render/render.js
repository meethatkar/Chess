import { blackPawn } from "../Data/peices.js";
import { whitePawn } from "../Data/peices.js";

const rootDive = document.getElementById("root");

function peiceRender(data){
    data.forEach((elem)=>{
        elem.squareRowArr.forEach((square)=>{
            if(square.peice){
                const squarePic = document.getElementById(square.id);       // here id means a7,b7 or a8,b8
                const peiceDiv = document.createElement("img");
                peiceDiv.src = square.peice.img;
                peiceDiv.classList.add("peices");
                squarePic.appendChild(peiceDiv);
                console.log(peiceDiv);
            }
        })
    })
}

function initGameRender(data){
    data.forEach(element => {       //first array and so on
        var rowElem = document.createElement("div");
        element.squareRowArr.forEach((square)=>{     //first element of first array and so on
            if(element.rowID==7){
                // console.log("black"); 
                square.peice = blackPawn(square.id);        //send current pos as paramenter, and returns img path and current pos
            }
            else if(element.rowID==2){
                // console.log("white");
                square.peice = whitePawn(square.id);        
            }
            var squareDiv = document.createElement("div");
            squareDiv.id = square.id;
            squareDiv.classList.add(square.color,"square");
            rowElem.appendChild(squareDiv);
        })      //here elemen is row, thats why it will be runned 8 times
        rowElem.classList.add("squareRow");
        rootDive.appendChild(rowElem);      
    });
}
export {initGameRender};
export {peiceRender};