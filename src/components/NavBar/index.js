// Write your code here.
import './index.css'

const NavBar = () => (
  <nav className="navBar">
    <div className="emojiGameLogo-and-score-container">
      <div className="emojiGameLogo">
        <img src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" />
        <p className="emojiGame-heading">Emoji Game</p>
      </div>
      <div className="emojiGame-score">
        <p className="emojiGame-score">Score:0</p>
        <p className="emojiGame-score">Top Score:0</p>
      </div>
    </div>
  </nav>
)

export default NavBar
