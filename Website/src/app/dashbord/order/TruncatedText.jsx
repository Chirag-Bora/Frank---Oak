import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TruncatedText = ({ text, wordLimit }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  const getDisplayText = () => {
    if (isExpanded) {
      return text
    }

    const words = text.split(' ')
    if (words.length <= wordLimit) {
      return text
    }

    return words.slice(0, wordLimit).join(' ') + '...'
  }

  return (
    <span onClick={toggleExpansion} style={{ cursor: 'pointer', color: 'black' }}>
      {getDisplayText()} {isExpanded ? '' : 'Read more'}
    </span>
  )
}

TruncatedText.propTypes = {
  text: PropTypes.string.isRequired,
  wordLimit: PropTypes.number,
}

TruncatedText.defaultProps = {
  wordLimit: 8,
}

export default TruncatedText
