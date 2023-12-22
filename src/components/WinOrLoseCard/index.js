// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {clickedEmojisList, emojisList} = props

  const displayGameWon = () => {
    return (
      <div className="gameWonCard-container">
        <div>
          <h1>You Won</h1>
          <p>Best Score</p>
          <button className="playAgain-btn">Play Again</button>
        </div>
        <img src="https://assets.ccbp.in/frontend/react-js/won-game-img.png" />
      </div>
    )
  }

  const displayLostTheGame = () => {
    return (
      <div className="lostGame-container">
        <div>
          <h1>You Lose</h1>
          <p>Score</p>
          <button className="playAgain-btn">Play Again</button>
        </div>
        <img src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png" />
      </div>
    )
  }

  const checkForWinOrLoose = () => {
    if (clickedEmojisList.length === emojisList.length) {
      displayGameWon()
    } else {
      displayLostTheGame()
    }
  }

  return checkForWinOrLoose()
}

export default WinOrLoseCard
