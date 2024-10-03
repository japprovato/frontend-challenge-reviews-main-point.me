import React, { useEffect, useState } from 'react';
import ReviewItem from './ReviewItem';
import Review from "@/data/Review";
import StarRating from "@/components/StarRating";

const ReviewApp = () => {
  // Tip: You can grab data with fetch or an HTTP client of your choice:
  //      await fetch("http://localhost:3000/api/reviews")
  //      await axios.get("http://localhost:3000/api/reviews")

  const [ reviews, setReviews ] = useState<Review[]>([])

  useEffect(() => {
    fetch("http://localhost:3000/api/reviews")
    .then((data) => data.json())
    .then((res) => {
      console.log('res: ', res);
      setReviews(res);
    })
  }, [])
  return (
    <div>
      <StarRating />
      {reviews.map((review) => <ReviewItem review={review}/>)}
    </div>
  );
};

ReviewApp.displayName = "ReviewApp";
export default ReviewApp;
