import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./SliderStyles";
import { useIntersection } from "../../hooks/useOnScreen";

const Slider = ({ content, showContent }) => {
  const [position, setPosition] = useState(0);
  const [count, setCount] = useState(0);
  const lastItem = useRef();
  const inView = useIntersection(lastItem, "-150px");
  console.log(inView);

  const movePrev = () => {
    if (position >= 0) return;
    setPosition((prevPos) => prevPos + 140);
  };

  const moveNext = () => {
    if (position >= (count + 1) * 150 + count * 10) return;
    setPosition((prevPos) => prevPos - 140);
  };

  const getCount = () => {
    let newCount = 0;
    content.forEach((item) => {
      if (item.titleType === "movie" || item.titleType === "tvSeries") {
        newCount++;
      }
    });
    console.log(count);
    setCount(newCount);
  };

  useEffect(() => {
    getCount();
  }, [content]);

  return (
    <div style={{ position: "relative" }}>
      <Styled.ButtonContainerNext onClick={moveNext}>
        <Styled.NextButton />
      </Styled.ButtonContainerNext>
      <Styled.ButtonContainerPrev onClick={movePrev}>
        <Styled.PrevButton />
      </Styled.ButtonContainerPrev>
      <Styled.CardsContainer style={{ left: `${position}px` }}>
        {content.map((item, i) => {
          if (item.titleType === "movie" || item.titleType === "tvSeries") {
            return (
              <Styled.Image
                key={Math.random() * 1000}
                src={item.image.url}
                onClick={() => showContent(item)}
                ref={lastItem}
              />
            );
          }
        })}
      </Styled.CardsContainer>
    </div>
  );
};

export default Slider;
