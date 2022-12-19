import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, updateLikeStatus, deleteCommentsFromList} = props
  const {id, name, comment, isLiked} = commentDetails

  const likeStatusUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeText = isLiked ? 'Liked' : 'Like'

  const updateLikeTextClassNames = isLiked ? 'like-btn' : ' '

  const onClickLike = () => {
    updateLikeStatus(id)
  }

  const onDeleteComments = () => {
    deleteCommentsFromList(id)
  }

  return (
    <li className="card-container">
      <div className="comments-container">
        <p className="name-acronym amber">{name[0]}</p>
        <div className="content-container">
          <div className="profile-name-time-container">
            <h1 className="profile-name">{name}</h1>
            <p className="time-status">{formatDistanceToNow(new Date())} ago</p>
          </div>
          <p className="comments">{comment}</p>
        </div>
      </div>
      <div className="like-delete-button-container">
        <div className="like-button-container">
          <button className="button" type="button" onClick={onClickLike}>
            <img src={likeStatusUrl} alt="like" />
          </button>
          <p className={`like-status ${updateLikeTextClassNames}`}>
            {likeText}
          </p>
        </div>
        <button
          className="button"
          type="button"
          testid="delete"
          onClick={onDeleteComments}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
