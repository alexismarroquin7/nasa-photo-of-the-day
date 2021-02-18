import React, {useState, useEffect} from "react";
import axios from 'axios';
import {BASE_URL, API_KEY} from "../constants";

import styled from 'styled-components'

const StyledContent = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
    /* font-family: 'Roboto', sans-serif; */
    * {
        font-family: 'Roboto', sans-serif;
        transition: all 0.2s ease-in-out;
    }

    color:${props => props.theme.primaryColor};
    display:${props => props.theme.content.display};
    flex-flow:row wrap;

    header {
        padding:${props => props.theme.content.header.padding};
        display:${props => props.theme.content.display};
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

            &:hover {
            border:10px solid white;
            }
        }
        
    }

    footer {
        width:${props => props.theme.content.footer.width};
        h4 {
            text-indent:4rem;
            
        }
        &:hover {
            background:${props => props.theme.primaryColor};
            color:${props => props.theme.background};
            padding:2%;
            border-radius:7px;
            text-align:center;
        }
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