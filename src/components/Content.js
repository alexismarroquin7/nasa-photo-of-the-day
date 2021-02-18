import React, {useState, useEffect} from "react";
import axios from 'axios';
import {BASE_URL, API_KEY} from "../constants";

import styled from 'styled-components'

const StyledContent = styled.div`
    color:${props => props.theme.primaryColor};
    display:flex;
    flex-flow:row wrap;

    header {
        padding:2%;
        border:1px solid red;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    footer {
        width:80%;
    }
`

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
            <header>
                <p>Everyday a new image of the sky is taken.
        
                Today's image was taken by 
            
                <span>
                    {` ` + apod.copyright}
                </span>
                !</p>
            </header>
        )
    }

    const Mid = () => {
        return (
            <section className="Mid">
                <div className="img-container">
                    <img src={apod.url}/>
                </div>
                <p>{apod.title}
                <br />
                <span>{apod.date}</span>
                <br />
                <span>{apod.copyright}</span>
                </p>
            </section>
        )
    }

    const Lower = () => {
        return (
            <footer className="Lower">
                <h2>{apod.explanation}</h2>
            </footer>
        )
    }

    return (
        <StyledContent>
            <Top />
            <Mid />
            <Lower />
        </StyledContent>
    );
}

export default Content;