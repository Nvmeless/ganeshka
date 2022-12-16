import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Logo } from '../../components/atoms/Logo/Logo';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearMessage } from '../../slices/message';
import { login } from '../../slices/auth';
import {getUserAuth} from "../../slices/user";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
        Squirrel
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {
    let navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const { isLoggedIn,token } = useSelector((state) => state.auth);
    const user  = useSelector((state) => state.users);
    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(clearMessage());
    }, [dispatch]);

    const handleLogin = (e) => {
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;

      setLoading(true);

      dispatch(login({ email , password }))
        .unwrap()
        .then((res) => {

            dispatch(getUserAuth({ token:res.token.data.access_token})).unwrap().then((res) => {
                navigate("/");

            });
        })
        .catch(() => {
          setLoading(false);
        });
    };

    if (isLoggedIn) {
      return <Navigate to="/" />;
    }

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
            sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <Logo width={50}/>
            <Typography component="h1" variant="h5">
            Connexion
            </Typography>
            <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Se souvenir de moi"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Connexion
            </Button>
            {message && (
              <Typography variant="subtitle1" gutterBottom color="error">
                  {message}
              </Typography>
            )}
            <Grid item xs>
                <Link href="#" variant="body2">
                    Mot de passe oublié ?
                </Link>
            </Grid>
            <Grid item >
                <Link href="/register" variant="body2">
                    {"Vous n'avez pas de compte? Inscrivez-vous"}
                </Link>
            </Grid>
            </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}
