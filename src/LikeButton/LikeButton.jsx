import styles from './LikeButton.module.css'
import React, { useState } from 'react'

const LikeButton = () => {
  const [likes, setLikes] = useState(100)
  const [isClicked, setIsClicked] = useState(false)

  const likedStyle = {
    backgroundColor: isClicked ? 'rgba(108, 108, 245, 0.775)' : 'white',
  }

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setIsClicked(!isClicked)
  }
  return (
    <>
      <div className={styles.likeDiv}>
        <button style={likedStyle} onClick={handleClick}>
          <span className={styles.likesCount}>{`Like | ${likes}`}</span>
        </button>
      </div>
    </>
  );
}

export default LikeButton;