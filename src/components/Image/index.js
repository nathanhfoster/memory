import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Image = ({ id, isFlipped, isDisabled, onClick, ...imageProps }) => {
  const handleOnClick = () => !isDisabled && onClick(id)

  return (
    <div className='image'>
      {!isFlipped && <span className='not-flipped-id'>{id}</span>}
      <img
        className={`${!isFlipped ? 'not-flipped' : 'flipped'} image`}
        {...imageProps}
        alt={imageProps.id}
        onClick={handleOnClick}
      />
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
