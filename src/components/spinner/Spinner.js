import React from "react";
import * as Styled from "./SpinnerStyles";

const Spinner = (props) => {
  return <Styled.Spinner style={{ ...props.style }} />;
};

export default Spinner;
