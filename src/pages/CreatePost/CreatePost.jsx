import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Logo } from '../../components/atoms/Logo/Logo';

export default function CreatePost() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      titre: data.get('titre'),
      desc: data.get('desc'),
    });
  };

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
            Creér un post
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Titre"
                name="title"
                autoComplete="title"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                multiline
                rows={7}
                name="desc"
                label="Description"
                type="desc"
                id="desc"
                autoComplete="current-password"
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Créer
            </Button>
            </Box>
        </Box>
    </Container>
  )
}