import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentsList = []

class Comments extends Component {
  state = {commentsList: initialCommentsList, name: '', comment: '', count: 0}

  submitItems = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const val = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    const backgroundColor = `spanItem ${initialContainerBackgroundClassNames[val]}`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      backgroundColor,
      isliked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredCommentList = commentsList.filter(each => each.id !== id)
    this.setState(prevState => ({
      commentsList: filteredCommentList,
      count: prevState.count - 1,
    }))
  }

  nameChange = event => {
    this.setState({name: event.target.value})
  }

  commentChange = event => {
    this.setState({comment: event.target.value})
  }

  likeIconCliked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isliked: !each.isliked}
        }
        return each
      }),
    }))
  }

  render() {
    const {commentsList, name, comment, count} = this.state

    return (
      <div className="bgContainer">
        <div className="insideContainer">
          <div>
            <h1 className="heading">Comments</h1>
            <div className="mainContainer">
              <div className="commentsContainer">
                <p className="para">Say something about 4.0 Technologies</p>
                <form onSubmit={this.submitItems} className="form">
                  <input
                    type="text"
                    className="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={this.nameChange}
                  />
                  <textarea
                    rows="7"
                    cols="45"
                    placeholder="Your Comment"
                    value={comment}
                    onChange={this.commentChange}
                  >
                    {comment}
                  </textarea>
                  <button className="button" type="submit">
                    Add Comment
                  </button>
                </form>
              </div>
              <div className="imgContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                  alt="comments"
                  className="commentsImg"
                />
              </div>
            </div>
          </div>
          <div className="horizontalContainer">
            <hr className="horizontalLine" />
          </div>
          <div className="bottomContainer">
            <p className="span">{count}</p>
            <p>comments</p>
          </div>
          <ul className="unordered">
            {commentsList.map(each => (
              <CommentItem
                item={each}
                key={each.id}
                deleteComment={this.deleteComment}
                likeIconCliked={this.likeIconCliked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
