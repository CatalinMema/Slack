import React from 'react'
import styled from "styled-components"
import {Button} from "@material-ui/core"
import { auth, provider } from '../../firebase';
function Login() {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    }
    return (
        <LoginContainer>
            <InnerLoginContainer>
                <img src="https://eu.wargaming.net/clans/media/clans/emblems/cl_868/500146868/emblem_195x195.png" alt="" />

            <h1>Sign in to RNG-- Fam</h1>
            <p>wot.rng--.com</p>
            <Button

            onClick={signIn}
            >Sign in with Google</Button>
            </InnerLoginContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const InnerLoginContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0 ,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
    > button  {
        margin-top: 50px;
        text-transform:  inherit !important;
        background-color: purple !important;
        color:white;

    } 
     
`;