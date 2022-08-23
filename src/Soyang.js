import React from 'react';
import { Link } from "react-router-dom";

function Soyang() {
    return (
        <>
            <h1>결과</h1>
            <h2>당신은 소양인입니다</h2>
            <h2>당신에게 맞는 음식은</h2>
            <h4>----입니다</h4>
            <Link to="/">다시하기</Link>
        </>
    );
}

export default Soyang;
