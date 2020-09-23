import React, { useCallback, useState, useMemo, useLayoutEffect } from 'react'
import { Image } from 'components'
import { getInitialState } from './utils'
import './styles.css'

const ImageContainer = () => {
  const [imagesFlipped, setImagesFlipped] = useState(0)

  const [state, setState] = useState(getInitialState())

  const handleOnImageClick = useCallback(id => {
    setImagesFlipped(prevCount => ++prevCount)
    setState(prevState => ({
      ...prevState,
      [id]: { ...prevState[id], isFlipped: !prevState[id].isFlipped },
    }))
  }, [])

  const imageMatchMap = useMemo(
    () =>
      Object.values(state).reduce((map, value) => {
        const { imageKey, isFlipped } = value
        const isFilppedNumber = Number(isFlipped)

        if (map[imageKey] === undefined) {
          map[imageKey] = isFilppedNumber
        } else {
          map[imageKey] = map[imageKey] + isFilppedNumber
        }

        return map
      }, {}),
    [state],
  )

  useLayoutEffect(() => {
    if (imagesFlipped > 1) {
      setTimeout(() => {
        setImagesFlipped(0)
        setState(prevState =>
          Object.entries(prevState).reduce(
            (nextState, [key, value]) => {
              const isFlipped = imageMatchMap[value.imageKey] === 2
              nextState[key].isFlipped = isFlipped
              return nextState
            },
            { ...prevState },
          ),
        )
      }, [600])
    }
  }, [imagesFlipped])

  const gameWon = useMemo(() => Object.values(imageMatchMap).every(v => v > 1), [imageMatchMap])

  const renderImages = Object.entries(state).map(([key, image]) => (
    <Image
      key={key}
      id={key}
      isDisabled={imagesFlipped > 1}
      onClick={handleOnImageClick}
      {...image}
    />
  ))

  return gameWon ? (
    <div className='won-game'>YOU WON!</div>
  ) : (
    <div className='ImageContainer'>{renderImages}</div>
  )
}

export default ImageContainer
