import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import {v4 as uuidV4} from 'uuid'

class EmojiGame extends Component {
  state = {clickedEmojisList: []}

  displayWinOrLoose = () => {
      const {clickedEmojisList} = this.state
      const {emojisList} = this.props

      <WinOrLoseCard key={uuidV4()} clickedEmojisList={clickedEmojisList} emojisList={emojisList} />
  }

  checkIsEmojiAlreadyClicked = (clickedEmojiId) => {
      const {clickedEmojisList} = this.state

      clickedEmojisList.map(eachEmojiId => {
          if (eachEmojiId===clickedEmojiId){
              return true
          }
          else{
            return false
          }
          
      })
  }

  emojiClicked = clickedEmojiId => {
      const {clickedEmojisList} = this.state
      const {emojisList} = this.props
      const emojiAlreadyClicked = checkIsEmojiAlreadyClicked(clickedEmojiId)

      if (emojiAlreadyClicked || clickedEmojisList.length===emojisList.length){
          displayWinOrLoose()
      }
      else{
        this.setState(prevState => ({
      clickedEmojisList: [...prevState.clickedEmojisList, clickedEmojiId],
    }))
      }
    
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
