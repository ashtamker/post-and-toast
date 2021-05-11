import React, { useState } from 'react'
import { Typography, Paper, Avatar, Container, Button, Grid} from '@material-ui/core';
import useStyles from './authStyle.js';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Input from '../Input/Input';

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const classes = useStyles();
    const isSignup = false;
    
    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword ); 
    
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus part />
                                <Input name="firstName" label="First Name" handleChange={handleChange} part />
                            </>
                            )}
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;
