import React, {Component} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import {dividerClasses} from "@mui/material";

function Paperr() {
    return (
        <div id="section-paper">
            <div class="section-paper-inline">
                <Box
                    sx={{
                        display: "flex",

                        "& > :not(style)": {
                            m: 0.5,
                            width: 150,
                            height: 150,
                            backgroundColor: '#121212',
                        }
                    }}
                >
                    <Paper elevation={0} />
                </Box>
                <Box
                    sx={{
                        display: "flex",

                        "& > :not(style)": {
                            m: 0.5,
                            width: 150,
                            height: 150,
                            backgroundColor: '#1e1e1e',
                        }
                    }}
                >
                    <Paper />
                </Box>
                <Box
                    sx={{
                        display: "flex",

                        "& > :not(style)": {
                            m: 0.5,
                            width: 150,
                            height: 150,
                            backgroundColor: '#252525',
                        }
                    }}
                >
                    <Paper elevation={3} />
                </Box>

            </div>
            <h1>Variants</h1>
            <div className="section-paper-inline">
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                            m: 0.5,
                            width: 150,
                            height: 150,
                            backgroundColor: 'black'
                        },
                    }}
                >
                    <Paper variant="outlined" />
                    <Paper variant="outlined" square />
                </Box>
            </div>
            <h1>Elevation</h1>
            <p>Je souhaitais m'occuper de cette partie à ma façon suite à une perte excessive de temps j'ai abandonné.</p>
            <h1>Container Fluid</h1>
            <Container maxWidth="sm">
                <Box sx={{
                    backgroundColor: '#1e1e1e', width: '500px', height: '500px' }}
                />
            </Container>
            <h1>Fixed</h1>
            <Container maxWidth="sm" fixed>
                <Box sx={{
                    backgroundColor: '#1e1e1e', width: '500px', height: '500px' }}
                />
            </Container>
        </div>

    );
}

export default Paperr;