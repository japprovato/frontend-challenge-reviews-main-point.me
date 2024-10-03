import React, { useEffect, useState } from 'react';
import Review from "@/data/Review";
import styles from "./reviewItem.module.css";

const ReviewItem = ({review} : {review: Review}) => {
  console.log('reviewItem: ', review);
  return (
    <div key={review.id} className={styles.reviewItem}>
      <b>Review</b>
      <div><b>Author:</b> {review.author}</div>
      <div><b>Rating:</b> {review.rating}</div>
      {review.review && <div>{review.review}</div>}

    </div>
  );
};

ReviewItem.displayName = "ReviewItem";
export default ReviewItem;
