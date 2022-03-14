import React, { useState, useEffect } from "react";
import * as Styled from "./ReviewsStyles";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "./../../firebase/firebase";

const Reviews = ({ id, title }) => {
  const user = useSelector((state) => state.user);
  const allReviews = useSelector((state) => state.allReviews);
  const userReviews = useSelector((state) => state.reviews);

  const [review, setReview] = useState("");
  const [reviewsToShow, setReviewsToShow] = useState([]);
  const dispatch = useDispatch();

  const addReview = async (e) => {
    e.preventDefault();
    const d = new Date();
    let reviewId = `${d.getTime()}${user.uid}`;
    const createDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
    await addDoc(collection(db, "entertainment"), {
      name: user.displayName,
      review: review,
      id: id,
      createDate: createDate,
      reviewId: reviewId,
      userId: user.uid,
      title: title,
    });

    const userRef = doc(db, "users", user?.uid);
    await setDoc(
      userRef,
      {
        reviews: [
          {
            name: user.displayName,
            review: review,
            id: id,
            createDate: createDate,
            reviewId: reviewId,
            userId: user.uid,
            title: title,
          },
          ...userReviews,
        ],
      },
      { merge: true }
    );

    dispatch({
      type: "ADD_TO_BOTH_REVIEWS",
      review: {
        name: user.displayName,
        review: review,
        id: id,
        userId: user.uid,
      },
    });
    setReview("");
  };

  useEffect(() => {
    setReviewsToShow(
      allReviews.filter((r) => {
        if (r.id === id) return r;
      })
    );
  }, [allReviews]);

  return (
    <Styled.Container>
      <Styled.ReviewInputContainer onSubmit={addReview}>
        <Styled.SubmitButton>Submit</Styled.SubmitButton>
        <Styled.ReviewInput
          placeholder="Add Review"
          onChange={(e) => setReview(e.target.value)}
          value={review}
        />
      </Styled.ReviewInputContainer>
      <Styled.ReviewsContainer>
        {reviewsToShow.length === 0 && (
          <Styled.NoReviews>No Reviews</Styled.NoReviews>
        )}
        {reviewsToShow.length > 0 &&
          reviewsToShow.map((r) => (
            <Styled.Review key={Math.random() * 1000}>
              <Styled.IconNameContainer>
                <Styled.Icon />
                <Styled.Name>{r.name}</Styled.Name>
              </Styled.IconNameContainer>
              <Styled.Wording>{r.review}</Styled.Wording>
            </Styled.Review>
          ))}
      </Styled.ReviewsContainer>
    </Styled.Container>
  );
};

export default Reviews;
