import express from 'express';

const gameData = {
    board: [
      ...Array(9).fill('') 
    ]
};

const game = [
    (req: express.Request, res: express.Response): void => {
        res.json(gameData.board);
    }
]

const gameUpdate = [
    (req: express.Request, res: express.Response): void => {
        gameData.board = req.body.board;
        res.json(req.body.board)
    } 
]

export const gameController = {
    game,
    gameUpdate
}