import React from 'react'
import RatingButton, { RatingButtonProps } from '../RatingButton/RatingButton'
import RatingContent, { RatingContentProps } from '../RatingContent/RatingContent'
import RatingRadio from '../RatingRadio'


type Props =  RatingContentProps & RatingButtonProps

const MyRatingComponent = ({contentTitle, contentText, buttonLabel}: Props) => {
  return (
    <div className='rating-card'>
      <img src="" alt="" />
      <RatingContent contentTitle={contentTitle} contentText={contentText} />
      <RatingRadio />
      <RatingButton buttonLabel={buttonLabel} />
    </div>
  )
}

export default MyRatingComponent