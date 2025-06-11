// black peices
function blackPawn(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/black/pawn.png",
        peice_name: "pawn_Black"
    }
}
function elephantBlack(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/black/rook.png",
        peice_name: "elephant_Black"
    }
}
function horseBlack(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/black/knight.png",
        peice_name: "horse_Black"
    }
}
function camelBlack(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/black/bishop.png",
        peice_name: "camel_Black"
    }
}
function queenBlack(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/black/queen.png",
        peice_name: "queen_Black"
    }
}
function kingBlack(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/black/king.png",
        peice_name: "king_Black"
    }
}

//white peices
function whitePawn(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/white/pawn.png",
        peice_name: "pawn_White"
    }
}
function elephantWhite(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/white/rook.png",
        peice_name: "elephant_White"
    }
}
function horseWhite(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/white/knight.png",
        peice_name: "horse_White"
    }
}
function camelWhite(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/white/bishop.png",
        peice_name: "camel_White"
    }
}
function queenWhite(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/white/queen.png",
        peice_name: "queen_White"
    }
}
function kingWhite(current_pos){
    return {
        current_pos,
        img: "assets/images/pieces/white/king.png",
        peice_name: "king_White"
    }
}


export {whitePawn,elephantWhite,horseWhite,camelWhite,queenWhite,kingWhite};
export {blackPawn,elephantBlack,horseBlack,camelBlack,queenBlack,kingBlack};
