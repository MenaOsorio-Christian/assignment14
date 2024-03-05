// ReviewForm.js
import React from 'react';

const ReviewForm = ({ reviewText, onReviewTextChange, onReviewSubmit }) => {
  return (
    <form onSubmit={onReviewSubmit}>
      <textarea
        value={reviewText}
        onChange={onReviewTextChange}
        placeholder="Leave a review..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
