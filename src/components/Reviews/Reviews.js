import React from 'react';
import useReview from '../hooks/ViewReview';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css'
const Reviews = () => {
    const [reviews] = useReview();
    return (
        <div >
            <h1>What our well-wisher say</h1>
            <div className='lol'>
                 {reviews.map(review => <SingleReview
            key={review.id}
            review={review}
            ></SingleReview> )}; 
            </div>
          
        </div>
    );
};

export default Reviews;