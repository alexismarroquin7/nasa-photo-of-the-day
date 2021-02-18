import React, {useState, useEffect} from "react";
import axios from 'axios';
import {BASE_URL, API_KEY} from "../constants";

const Content = () => {
    const [apod, setApod] = useState({});

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
            .then(res => {
                setApod(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    const Top = () => {
        return (
            <h3>
                Everyday a new image of the sky is taken.
                Today's image was taken by 
                <br />
                <span>
                    {apod.copyright}
                </span>
                !
            </h3>
        )
    }

    return (
        <div className="Content">
            <Top />
        </div>
    );
}

export default Content;