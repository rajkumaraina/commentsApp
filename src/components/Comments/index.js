import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

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

  render() {
    const {commentsList, name, comment, count} = this.state
    return (
      <div className="bgContainer">
        <div>
          <h1 className="heading">Comments</h1>
          <div className="mainContainer">
            <div className="commentsContainer">
              <p className="para">Say something about 4.0 Technologies</p>
              <form onSubmit={this.submitItems} className="form">
                <input
                  type="text"
                  className="name"
                  placeholder="Name"
                  onChange={this.nameChange}
                />
                <textarea rows="8" cols="45" placeholder="Your Comment">
                  {comment}
                </textarea>
              </form>
              <button className="button">Add Comment</button>
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
          <span className="span">{count}</span> <span>comments</span>
        </div>
      </div>
    )
  }
}
export default Comments
