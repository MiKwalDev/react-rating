import React from 'react'
import RatingButton, { RatingButtonProps } from '../RatingButton/RatingButton'
import RatingContent, { RatingContentProps } from '../RatingContent/RatingContent'
import RatingRadio from '../RatingRadio'
import "./MyRatingComponent.css"
import StarIcon from "../../images/icon-star.svg"


type Props =  RatingContentProps & RatingButtonProps

const MyRatingComponent = ({contentTitle, contentText, buttonLabel}: Props) => {
  return (
    <div className='rating-card'>
      <div className="rating-card-content">
      <StarIcon />
      {/* <img src="./../../images/icon-star.svg" alt="star" /> */}
      <RatingContent contentTitle={contentTitle} contentText={contentText} />
      <RatingRadio />
      <RatingButton buttonLabel={buttonLabel} />
      </div>
    </div>
  )
}

export default MyRatingComponent