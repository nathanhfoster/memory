import React from 'react'
import PropTypes from 'prop-types'
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

Image.propTypes = {
  id: PropTypes.string.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  imageKey: PropTypes.string,
  src: PropTypes.string,
}

export default React.memo(Image)
