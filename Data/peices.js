// black peices
function blackPawn(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/black/pawn.png",
    }
}
function elephantBlack(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/black/rook.png",
    }
}
function horseBlack(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/black/knight.png",
    }
}
function camelBlack(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/black/bishop.png",
    }
}
function queenBlack(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/black/queen.png",
    }
}
function kingBlack(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/black/king.png",
    }
}

//white peices
function whitePawn(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/white/pawn.png",
    }
}
function elephantWhite(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/white/rook.png",
    }
}
function horseWhite(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/white/knight.png",
    }
}
function camelWhite(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/white/bishop.png",
    }
}
function queenWhite(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/white/queen.png",
    }
}
function kingWhite(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/white/king.png",
    }
}


export {whitePawn,elephantWhite,horseWhite,camelWhite,queenWhite,kingWhite};
export {blackPawn,elephantBlack,horseBlack,camelBlack,queenBlack,kingBlack};
