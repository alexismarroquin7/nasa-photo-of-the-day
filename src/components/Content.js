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
                <br />
                Today's image was taken by 
                <br />
                <span>
                    {apod.copyright}
                </span>
                !
            </h3>
        )
    }

    const Mid = () => {
        return (
            <div className="Mid">
                <div className="img-container">
                    <img src={apod.url}/>
                </div>
                <p>
                    {apod.title} || 
                    <span>
                        Date: {apod.date}
                    </span>
                    <span>
                        Credit: {apod.copyright}
                    </span>
                </p>
            </div>
        )
    }

    const Lower = () => {
        return (
            <div className="Lower">
                <h2>{apod.explanation}</h2>
            </div>
        )
    }

    return (
        <div className="Content">
            <Top />
            <Mid />
            <Lower />
        </div>
    );
}

export default Content;