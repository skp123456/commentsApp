import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

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
  state = {
    commentsList: initialCommentsList,
    userName: '',
    userComment: '',
    commentCount: 0,
  }

  onAddComment = event => {
    event.preventDefault()
    const {userName, userComment} = this.state
    const newComment = {
      id: uuidv4(),
      name: userName,
      comment: userComment,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      userName: '',
      userComment: '',
      commentCount: prevState.commentCount + 1,
    }))
  }

  updateLikeStatus = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComments => {
        if (eachComments.id === id) {
          return {...eachComments, isLiked: !eachComments.isLiked}
        }
        return eachComments
      }),
    }))
  }

  deleteCommentsFromList = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComments => eachComments.id !== id,
      ),
      commentCount: prevState.commentCount - 1,
    }))
  }

  onChangeName = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onChangeComment = event => {
    this.setState({
      userComment: event.target.value,
    })
  }

  render() {
    const {userName, userComment, commentsList, commentCount} = this.state
    return (
      <>
        <div className="comments-bg-container">
          <div>
            <h1 className="main-heading">Comments</h1>
            <p className="descreption">Say something about 4.0 Technologies</p>
            <form onSubmit={this.onAddComment}>
              <input
                type="text"
                placeholder="Your Name"
                className="input-element"
                value={userName}
                onChange={this.onChangeName}
              />
              <br />
              <textarea
                className="textarea-element"
                placeholder="Your Comment"
                rows="7"
                cols="30"
                value={userComment}
                onChange={this.onChangeComment}
              />
              <br />
              <button className="add-button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comment-image"
            alt="comments"
          />
        </div>
        <hr className="seperator" />
        <div className="count-container">
          <p className="comment-count">{commentCount}</p>
          <p className="count-comment">Comments</p>
        </div>
        <ul className="list-item-container">
          {commentsList.map(eachComments => (
            <CommentItem
              commentDetails={eachComments}
              key={eachComments.id}
              updateLikeStatus={this.updateLikeStatus}
              deleteCommentsFromList={this.deleteCommentsFromList}
              initialContainerBackgroundClassNamesDetails={
                initialContainerBackgroundClassNames
              }
            />
          ))}
        </ul>
      </>
    )
  }
}

export default Comments
