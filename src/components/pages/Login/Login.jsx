import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../app/store'
import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import './Login.css'
import { Register } from '../Register/Register';

export const Login = ({ ...props }) => {
    const dispatch = useDispatch()

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [showloginPage, setshowloginPage] = useState("");


    const generateApp = () => {
        
        if (showloginPage === false) {
          return (
            <Register></Register>
            
          )
        } else {
            return (<div className="outer">
            <div className="middle">
                <div className="inner"></div>
                
                <div style={{ textAlign: "center" }}>
                <h1>Local Eat</h1>
                    <h2>Page de connexion</h2>
                    <form>
                        <TextField
                            style={{ width: "350px", margin: "5px" }}
                            type="text"
                            label="Email"
                            variant="outlined"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        /><br />
                        <TextField
                            style={{ width: "350px", margin: "5px" }}
                            type="password"
                            label="Password"
                            variant="outlined"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                        /><br />
                        

                        <Button onClick={() => {
                            dispatch(login({
                                email: Email,
                                password: Password
                            }))
                            
                        }} variant="contained" color="primary" style={{ width: "200px", margin: "5px" }}>Connexion</Button>
                        <br /><br /><br /><br /><br /><br />
                        <Button onClick={() => {
                            
                            setshowloginPage(false)
                            
                        }} variant="contained" color="primary" style={{ width: "200px", margin: "5px" }}>S'inscrire</Button>

                        

                    </form>
                </div>
            </div>
        </div>)
        }
    }

    return generateApp()
}