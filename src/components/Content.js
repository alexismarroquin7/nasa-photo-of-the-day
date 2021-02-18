import React, {useState, useEffect} from "react";
import axios from 'axios';
import {BASE_URL, API_KEY} from "../constants";

// import styled from 'styled-components'

// const StyledTop = styled.h3`
//             color:${props => props.theme.primaryColor};
//             background:black;
//         `

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
            <div>Everyday a new image of the sky is taken.
                <br />
                Today's image was taken by 
                <br />
                <span>
                    {apod.copyright}
                </span>
                !
            </div>
        )
    }

    const Mid = () => {
        return (
            <div className="Mid">
                <div className="img-container">
                    <img src={apod.url}/>
                </div>
                <p>{apod.title}
                <br />
                <span>{apod.date}</span>
                <br />
                <span>{apod.copyright}</span>
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