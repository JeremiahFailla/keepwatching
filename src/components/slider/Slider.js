import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./SliderStyles";

const Slider = ({ content, showContent }) => {
  const [position, setPosition] = useState(0);
  const [count, setCount] = useState(0);
  const container = useRef();

  const movePrev = () => {
    if (position >= 0) return;
    setPosition((prevPos) => prevPos + 280);
  };

  const moveNext = () => {
    if (
      container.current?.clientWidth >
      count * 150 + (count - 1) * 10 + position - 100
    )
      return;
    setPosition((prevPos) => prevPos - 280);
  };

  const getCount = () => {
    let newCount = 0;
    content.forEach((item) => {
      if (item.titleType === "movie" || item.titleType === "tvSeries") {
        newCount++;
      }
    });
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
      <div style={{ overflow: "hidden" }}>
        <Styled.CardsContainer
          style={{ left: `${position}px` }}
          ref={container}
        >
          {content.map((item, i) => {
            if (item.titleType === "movie" || item.titleType === "tvSeries") {
              return (
                <Styled.Image
                  key={Math.random() * 1000}
                  src={item.image.url}
                  onClick={() => showContent(item)}
                />
              );
            }
          })}
        </Styled.CardsContainer>
      </div>
    </div>
  );
};

export default Slider;
