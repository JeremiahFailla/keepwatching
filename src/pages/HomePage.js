import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.user);
  useEffect(() => {
    console.log(user);
  }, []);
  return <div>Hello {user?.displayName}</div>;
}

export default Home;
