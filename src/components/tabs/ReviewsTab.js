import React from "react";
import * as Styled from "./TabStyles";
import { useSelector, useDispatch } from "react-redux";
import { db } from "./../../firebase/firebase";
import { doc, setDoc, deleteDoc } from "firebase/firestore";

const ReviewsTab = () => {
  const userReviews = useSelector((state) => state.reviews);
  const allReviews = useSelector((state) => state.allReviews);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const deleteReview = async (item) => {
    const newUserReviews = userReviews.filter(
      (i) => i.reviewId !== item.reviewId
    );
    const newAllReviews = allReviews.filter(
      (i) => i.reviewId !== item.reviewId
    );
    dispatch({
      type: "REMOVE_REVIEW",
      newUserReviews: newUserReviews,
      newAllReviews: newAllReviews,
    });

    const userRef = doc(db, "users", user?.uid);
    await setDoc(
      userRef,
      {
        reviews: [...newUserReviews],
      },
      { merge: true }
    );

    await deleteDoc(
      doc(
        db,
        "entertainment",
        allReviews.find((i) => i.reviewId === item.reviewId).docId
      )
    );
  };

  return (
    <Styled.Tab>
      <Styled.ReviewTitle>Reviews</Styled.ReviewTitle>
      {userReviews.map((item) => (
        <Styled.ReviewContainer key={item.reviewId}>
          <Styled.Review>"{item.review}"</Styled.Review>
          <Styled.ReviewTitleButtonContainer>
            <Styled.ContentTitle>{item.title}</Styled.ContentTitle>
            <Styled.ContentTitle>{item.createDate}</Styled.ContentTitle>
            <Styled.RemoveButton onClick={() => deleteReview(item)}>
              Delete
            </Styled.RemoveButton>
          </Styled.ReviewTitleButtonContainer>
        </Styled.ReviewContainer>
      ))}
    </Styled.Tab>
  );
};

export default ReviewsTab;
