import React from "react";
import Content from './Content'
import Form from './Form'

const Card = () => {
    return (
        <div className="Card">
            <h1>NASA's A.P.O.D. 🛰</h1>
            <Content />
            <Form />
        </div>
    );
}

export default Card;