import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL, API_KEY } from './constants';

const Form = (props) => {

    const {getCount, apodData} = props;

    const getCount = event => {

        const userInput = event.target.value;

        return (
            <div className="apodImages">

            </div>
        )
    }

    return (
        <div className="Form">
            <input type="text" placeholder="Enter a number: (example: 3)"/>
            <button type="submit">Launch</button>
        </div>
    );
}

export default Form;