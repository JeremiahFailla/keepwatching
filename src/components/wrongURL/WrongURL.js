import React, { useEffect, useState } from "react";
import * as Styled from "./WrongURLStyles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const WrongURL = () => {
  const [time, setTime] = useState(5);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setTime((t) => t - 1), 1000);
    let home, login;

    if (user) {
      home = setTimeout(() => {
        navigate("/home", { replace: true });
      }, 5000);
    } else {
      login = setTimeout(() => {
        navigate("/", { replace: true });
      }, 5000);
    }
    return () => {
      clearInterval(timer);
      clearTimeout(home);
      clearTimeout(login);
    };
  }, [user]);

  return (
    <Styled.Container>
      <Styled.Logo>KeepWatching</Styled.Logo>
      <Styled.Card>
        <Styled.Message>
          Oh No! It looks like something went wrong. We are gonna send you back
          to the {user ? "home" : "login"} page.
        </Styled.Message>
        <Styled.Message>In {time}</Styled.Message>
      </Styled.Card>
    </Styled.Container>
  );
};

export default WrongURL;
