import { Box, Button, Container, createTheme, CssBaseline, Grid, Paper, TextField, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function Login() {

    let navigate = useNavigate();
    const loginBtn = () => {
        navigate('/trades');
    }

    const signupBtn = () => {
        navigate('/trades');
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Container sx={{ py: 0 }} maxWidth="md">
                    {/* End hero unit */}
                    <Box sx={{ my: 6, fontSize: 35 }}>Citadel</Box>
                    <Grid container my={1}>
                        <Grid item xs={12} px={4} sm={8} md={5} mr={6} component={Paper} sx={{ height: 330 }} elevation={1} square>
                            <Box
                                sx={{
                                    my: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Typography sx={{ fontSize: 12, letterSpacing: 1 }} py={2}>
                                    LOGIN TO YOUR ACCOUNT
                                </Typography>
                                <Box component="form" noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        fullWidth
                                        hiddenLabel
                                        placeholder="Email"
                                        id="standard-basic"
                                        variant="standard"
                                        size="small"
                                    />
                                    <TextField
                                        sx={{ mt: 2 }}
                                        fullWidth
                                        hiddenLabel
                                        placeholder="Password"
                                        id="standard-basic"
                                        variant="standard"
                                        size="small"
                                    />
                                    <TextField
                                        sx={{ mt: 2 }}
                                        fullWidth
                                        hiddenLabel
                                        placeholder="2-factor code"
                                        id="standard-basic"
                                        variant="standard"
                                        size="small"
                                    />
                                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                        <Button
                                            text
                                            type="submit"
                                            variant="contained"
                                            sx={{ mt: 3, mb: 1 }}
                                            onClick={loginBtn}
                                        >
                                            Log In
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={1} square>
                            <Box
                                sx={{
                                    my: 3,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Typography py={2}>
                                    SIGNUP
                                </Typography>
                                <Typography sx={{ fontSize: 13 }}>
                                    The maxWidth property determines the max-width of the container. The container width grows with the size.
                                </Typography>
                                <Box component="form" noValidate sx={{ mt: 2 }}>
                                    <TextField
                                        fullWidth
                                        hiddenLabel
                                        placeholder="Email"
                                        id="standard-basic"
                                        variant="standard"
                                        size="small"
                                    />
                                    <TextField
                                        sx={{ mt: 2 }}
                                        fullWidth
                                        hiddenLabel
                                        placeholder="Name"
                                        id="standard-basic"
                                        variant="standard"
                                        size="small"
                                    />
                                    <TextField
                                        sx={{ mt: 2 }}
                                        fullWidth
                                        hiddenLabel
                                        placeholder="Paxful Name"
                                        id="standard-basic"
                                        variant="standard"
                                        size="small"
                                    />
                                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                            onClick={signupBtn}
                                        >
                                            REQUEST INVITE
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}












