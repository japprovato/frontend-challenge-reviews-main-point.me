import React, { useEffect, useState } from 'react';
import ReviewItem from './ReviewItem';
import Review from "@/data/Review";
import StarRating from "@/components/StarRating";

const ReviewApp = () => {
  const [ reviews, setReviews ] = useState<Review[]>([])

  useEffect(() => {
    fetch("http://localhost:3000/api/reviews")
    .then((data) => data.json())
    .then((res) => {
      setReviews(res);
    })
  }, []);

  return (
    <div>
      <StarRating />
      {reviews.map((review) => <ReviewItem review={review}/>)}
    </div>
  );
};

ReviewApp.displayName = "ReviewApp";
export default ReviewApp;
