import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
      <>
          <h1>내 체질에 맞는 음식고르기</h1>
          <Link to="/test">시작하기</Link>
      </>
  );
}

export default Home;
