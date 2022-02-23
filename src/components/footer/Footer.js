import React from "react";
import * as Styled from "./FooterStyles";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Styled.Container>
      <div style={{ flexGrow: 1, background: "#003366" }}>
        <Styled.Foot>
          <div>
            <Styled.Title>Developed By</Styled.Title>
            <Styled.Info>Jeremiah Failla</Styled.Info>
          </div>
          <div>
            <Link to="/home">
              <Styled.Info style={{ padding: "0" }}>KeepWatching</Styled.Info>
            </Link>
            <Styled.Info>&copy; 2022</Styled.Info>
          </div>
          <div>
            <Styled.Title>Customer Support</Styled.Title>
            <Styled.Info>123-456-7890</Styled.Info>
            <Styled.Info>kwsupport@gmail.com</Styled.Info>
          </div>
        </Styled.Foot>
      </div>
    </Styled.Container>
  );
};
