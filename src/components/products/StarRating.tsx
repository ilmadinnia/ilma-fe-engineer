/**
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */
import React from 'react';

type StarRatingProps = {
    rating: number;
    maxStars: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars }) => {
    const roundedRating = Math.round(rating);
    const stars = Array.from({ length: maxStars }, (_, index) => (
        <span key={index} className={index < roundedRating ? 'star-filled' : 'star-empty'}></span>
    ));

    return <div className="star-rating">{stars}</div>;
};

export default StarRating;