import React from 'react';
import Review from "@/data/Review";
import Star from "@/components/Star";
import styles from "./reviewItem.module.css";

const ReviewItem = ({review} : {review: Review}) => {
  return (
    <div key={review.id} className={styles.reviewItem}>
      <div><b>Author:</b> {review.author}</div>
      <div><b>Rating:</b> 
        {Array.from({ length: 5 }).map((_, index) => (
            <Star starId={index} marked={review.rating > index} />
        ))}
      </div>
      {review.review && <div>{review.review}</div>}
    </div>
  );
};

ReviewItem.displayName = "ReviewItem";
export default ReviewItem;
