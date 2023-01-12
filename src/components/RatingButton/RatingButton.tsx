import React from 'react'

export interface RatingButtonProps {
  buttonLabel: string
}

const RatingButton = ({ buttonLabel }: RatingButtonProps) => {
  return (
    <button type="submit">{buttonLabel}</button>
  )
}

export default RatingButton