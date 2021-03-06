import Player from "./../src/dice.js";

describe("Player", () => {
  test("should correctly create a Player object with two attributes", () => {
    const playerTest = new Player(5, 10);
    expect(playerTest.roundPoints).toEqual(5);
    expect(playerTest.gamePoints).toEqual(10);
  });
  test("should correctly set roundPoints and gamePoints attributes to zero", () => {
    const newGame = new Player(5, 10);
    newGame.startNewGame();
    expect(newGame.roundPoints).toEqual(0);
    expect(newGame.gamePoints).toEqual(0);
  });
  test("should correctly end the turn by tallying up round points into player's total game points", () => {
    const addRoundPointstoTotal = new Player(5, 10);
    expect(addRoundPointstoTotal.roundPoints).toEqual(5);
    expect(addRoundPointstoTotal.gamePoints).toEqual(10);
    addRoundPointstoTotal.tallyPoints();
    expect(addRoundPointstoTotal.roundPoints).toEqual(0);
    expect(addRoundPointstoTotal.gamePoints).toEqual(15);
  });
  test("should correctly check if the Player is the winner of the game -- 100 or more gamePoints.", () => {
    const gameWinner = new Player(0, 111);
    expect(gameWinner.checkWinner()).toEqual(true);
    const gameNotWinner = new Player(0, 90);
    expect(gameNotWinner.checkWinner()).toEqual(false);
  });
});
