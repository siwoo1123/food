import React from 'react';
import {Link} from "react-router-dom";

function ERR() {
    return (
        <>
            <h1>ERROR</h1>
            <Link to='/'>돌아가기</Link>
        </>
    );
}

export default ERR;
