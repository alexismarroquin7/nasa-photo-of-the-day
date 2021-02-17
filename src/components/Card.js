import React from "react";
import Content from './Content'
import Form from './Form'

const Card = (props) => {

    const {getCount, apodData} = props;

    return (
        <div className="Card">
            <h1>NASA's A.P.O.D. 🛰</h1>
            <Content />
            <Form getCount={getCount} apodData={apodData}/>
        </div>
    );
}

export default Card;