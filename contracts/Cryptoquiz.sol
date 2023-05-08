// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './Createtokens.sol';

contract CryptoQuiz {
    // Define state variables
    address payable public owner;
    uint256 public minimumWithdrawalAmount;
    uint256 public totalPrize;
    uint256 public currentRound;
    uint256 public currentQuestion;
    mapping(address => uint256) public playerBalances;
    bool public gameStarted;
    bool public gameEnded;
    Createtokens public myToken; // add the custom token contract reference

    // mapping
    mapping(address => mapping(uint256 => uint256)) public gamesPlayedPerDay;
    // Define events
    event GameStarted(uint256 round, uint256 question);
    event AnswerSubmitted(address player, uint256 round, uint256 question, bool correct, uint256 prize);
    event GameEnded();

    // Constructor
    constructor(uint256 _minimumWithdrawalAmount, address _myToken) public{
        owner = payable(msg.sender);
        minimumWithdrawalAmount = _minimumWithdrawalAmount;
        totalPrize = 0;
        currentRound = 1;
        currentQuestion = 1;
        gameStarted = false;
        gameEnded = false;
        myToken = Createtokens(_myToken); // initialize the custom token contract
    }

    // Function to start the game
    function startGame() public payable {
    require(!gameStarted, "The game has already started.");
    require(msg.value >= minimumWithdrawalAmount, "You must send an amount greater than or equal to the minimum withdrawal amount to start the game.");
    require(gamesPlayedPerDay[msg.sender][block.timestamp / 1 days] < 5, "You have already played the maximum number of games for today.");
    gamesPlayedPerDay[msg.sender][block.timestamp / 1 days]++;
    gameStarted = true;
    totalPrize = msg.value;
    // Transfer the custom token from the sender's balance to the contract's balance
    require(myToken.transferFrom(msg.sender, address(this), totalPrize), "Token transfer failed");
    emit GameStarted(currentRound, currentQuestion);
}

    // Function to submit an answer to a question
    function submitAnswer(bool _correct) public {
    require(gameStarted, "The game has not yet started.");
    require(!gameEnded, "The game has already ended.");
    require(currentQuestion <= 10, "The current round has ended.");
    uint256 prizePerQuestion = totalPrize / 10; // Split the total prize evenly among the 10 questions per round
    playerBalances[msg.sender] += prizePerQuestion;
    if (_correct) {
        uint256 prize = prizePerQuestion * 2; // Double the prize for a correct answer
        playerBalances[msg.sender] += prize;
        totalPrize -= prize;
    } else {
        playerBalances -= prizePerQuestion;
    }
    emit AnswerSubmitted(msg.sender, currentRound, currentQuestion, _correct, prizePerQuestion);
    currentQuestion++;
    if (currentQuestion > 10) {
        currentQuestion = 1;
        currentRound++;
    }
    if (currentRound > 5) {
        gameEnded = true;
        emit GameEnded();
    }
}

    // Function to withdraw earnings
    function withdraw() public {
    require(playerBalances[msg.sender] >= minimumWithdrawalAmount, "You have not earned enough to withdraw.");
    require(myToken.balanceOf(address(this)) >= amount, "Contract balance is insufficient to withdraw.");
    uint256 amount = playerBalances[msg.sender];
    playerBalances[msg.sender] = 0;
    myToken.transfer(msg.sender, amount); // Transfer custom tokens to the player's address
}
}