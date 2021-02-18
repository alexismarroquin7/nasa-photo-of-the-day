import React, {useState, useEffect} from "react";
import axios from 'axios';
import {BASE_URL, API_KEY} from "../constants";

import styled from 'styled-components'

const StyledContent = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
    /* font-family: 'Roboto', sans-serif; */
    * {
        font-family: 'Roboto', sans-serif;
    }

    color:${props => props.theme.primaryColor};
    display:flex;
    flex-flow:row wrap;

    header {
        padding:2%;
        display:flex;
        align-items:center;
        justify-content:center;
        width:50%;
    }

    section {
        display:flex;
        flex-flow:column wrap;
        align-items:flex-end;
        align-content:flex-end;
        justify-content:center;

        img {
            border-radius:10px;
        }
    }

    footer {
        width:70%;
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
                <h4>{apod.explanation}</h4>
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