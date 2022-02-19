import React from "react";
import * as Styled from "./TabStyles";

const ReviewsTab = () => {
  return (
    <Styled.Tab>
      <Styled.ReviewTitle>Reviews</Styled.ReviewTitle>
      <Styled.ReviewContainer>
        <Styled.Review>"This movie was great"</Styled.Review>
        <Styled.Container>
          <Styled.ContentTitle>Sports Night</Styled.ContentTitle>
          <Styled.ContentTitle>2/15/2022</Styled.ContentTitle>
          <Styled.RemoveButton>Delete</Styled.RemoveButton>
        </Styled.Container>
      </Styled.ReviewContainer>
    </Styled.Tab>
  );
};

export default ReviewsTab;
