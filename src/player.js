import Gameboard from './gameboard';

export default function Player(turn) {
    const board = Gameboard(10, 10);
    let hasTurn = turn;
    const getBoard = () => board;
    const checkTurn = () => hasTurn;
    const takeTurn = () => {
        hasTurn = !hasTurn;
    };
    return { getBoard, checkTurn, takeTurn };
}
