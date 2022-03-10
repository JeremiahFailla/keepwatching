import React, { useState, useEffect } from "react";
import * as Styled from "./ReviewsStyles";
import { addDoc, collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "./../../firebase/firebase";

const Reviews = ({ id }) => {
  const user = useSelector((state) => state.user);
  const allReviews = useSelector((state) => state.allReviews);
  const [review, setReview] = useState();
  const dispatch = useDispatch();

  const addReview = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "entertainment"), {
      name: user.displayName,
      review: review,
      id: id,
      userId: user.uid,
    });
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
    console.log(allReviews);
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
        {allReviews.length === 0 && (
          <Styled.NoReviews>No Reviews</Styled.NoReviews>
        )}
        {allReviews.length > 0 &&
          allReviews.map((r) => {
            if (r.id === id)
              return (
                <Styled.Review key={Math.random() * 1000}>
                  <Styled.IconNameContainer>
                    <Styled.Icon />
                    <Styled.Name>{r.name}</Styled.Name>
                  </Styled.IconNameContainer>
                  <Styled.Wording>{r.review}</Styled.Wording>
                </Styled.Review>
              );
          })}
      </Styled.ReviewsContainer>
    </Styled.Container>
  );
};

export default Reviews;
