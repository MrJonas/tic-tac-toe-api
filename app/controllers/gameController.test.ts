const fetchNode = require('node-fetch');

describe('Game controller', () => {
    it('Should update game board', async () => {
        const board = [
            'O', 'O', 'X',
            '', 'X', '',
            'X', '', '',
        ];
        await fetchNode('http://localhost:4000/api/game', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ board })
        })
        const response = await fetchNode('http://localhost:4000/api/game');
        const boardFromApi = await response.json();
        board.forEach((field, i) => {
            expect(field).toBe(boardFromApi[i]);
        });
    })
})