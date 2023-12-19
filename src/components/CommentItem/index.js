import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {item, deleteComment, likeIconCliked} = props
  const {id, name, comment, isliked, backgroundColor} = item
  const letter = name.slice(0, 1)
  const deleteIcon = () => {
    deleteComment(id)
  }
  const likeButton = () => {
    likeIconCliked(id)
  }
  const likeClassName = isliked ? `likeButton activeLike` : 'likeButton'
  const imageElement = isliked ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
      className="likes"
      alt="like"
      onClick={likeButton}
    />
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
      className="likes"
      alt="like"
      onClick={likeButton}
    />
  )
  const time = formatDistanceToNow(new Date())
  return (
    <li className="eachItem">
      <div className="topContainer">
        <p className={backgroundColor}>{letter}</p>
        <div className="insideContainerItem">
          <div className="timeContainer">
            <h1 className="headingItem">{name}</h1>
            <p className="time">{time}</p>
          </div>
          <p className="paraItem">{comment}</p>
        </div>
      </div>
      <div className="bottomContainerItem">
        <div className="likeContainer">
          {imageElement}
          <button className={likeClassName} type="button" onClick={likeButton}>
            Like
          </button>
        </div>
        <button
          className="deleteButton"
          onClick={deleteIcon}
          data-testid="delete"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
      <hr className="hr" />
    </li>
  )
}
export default CommentItem
