import React from 'react'
import './styles.css'

const Image = ({ id, isFlipped, isDisabled, onClick, ...imageProps }) => {
  const handleOnClick = () => !isDisabled && onClick(id)

  return isFlipped ? (
    <img className='image' {...imageProps} alt={imageProps.id} onClick={handleOnClick} />
  ) : (
    <div className='image not-flipped' onClick={handleOnClick}>
      {id}
    </div>
  )
}

export default React.memo(Image)
