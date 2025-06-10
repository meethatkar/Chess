import { gameInit } from "./Data/data.js";
import { initGameRender, peiceRender } from "./render/render.js";
import { globalEvent } from "./events/global.js";

let globalState = gameInit();

initGameRender(globalState); //called as this will return/print total of 64 boxes of chess, with the help of square() method that is called 8 times and inside that it's running extra 8 times, so 8*8=64

peiceRender(globalState);
// console.log(globalState);

globalEvent();

export{globalState};        //used in globalEvent for comparing img.id and square.id