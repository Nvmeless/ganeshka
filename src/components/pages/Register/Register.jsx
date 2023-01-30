import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../app/store'
import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import { Login } from '../Login/Login';

export const Register = ({ ...props }) => {
    const dispatch = useDispatch()

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [showregisterPage, setshowregisterPage] = useState("");


    const generateApp = () => {
        
        if (showregisterPage === false) {
            
          return (
          <Login></Login>
          )
        } else {
            return (<div className="outer">
            <div className="middle">
                <div className="inner"></div>
                
                <div style={{ textAlign: "center" }}>
                <h1>Local Eat</h1>
                    <h2>Page d'inscription</h2>
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
                            setshowregisterPage(false)
                        }} variant="contained" color="primary" style={{ width: "200px", margin: "5px" }}>Se connecter</Button>
  
                        <Button onClick={() => {
                            dispatch(register({
                                email: Email,
                                password: Password
                            }))
                            
                        }} variant="contained" color="primary" style={{ width: "200px", margin: "5px" }}>Inscription</Button>
  
                       
  
  
                    </form>
                </div>
            </div>
        </div>
                
            )
        }
    }


    return generateApp()
}