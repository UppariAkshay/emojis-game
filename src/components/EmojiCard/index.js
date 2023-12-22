// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiResources, emojiClicked} = props
  const {id, emojiName, emojiUrl} = emojiResources

  const clickEmoji = () => {
    emojiClicked(id)
  }

  return (
    <li className="emojiItem">
      <button type="button" className="emojiBtn" onClick={clickEmoji}>
        <img alt="emoji logo" src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
