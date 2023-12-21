import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {clickedEmojisList: []}

  emojiClicked = emojiId => {
    this.setState(prevState => ({
      clickedEmojisList: [...prevState.clickedEmojisList, emojiId],
    }))
  }

  render() {
    const {emojisList} = this.props

    return (
      <div className="emojiGame-container">
        <NavBar />
        <div className="emojiGame-body">
          <ul className="emojisItems-container">
            {emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiResources={eachEmoji}
                emojiClicked={this.emojiClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
