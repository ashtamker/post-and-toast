import React, { useState } from 'react'
import { Typography, Paper, Avatar, Container, Button, Grid} from '@material-ui/core';
import useStyles from './authStyle.js';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Input from '../Input/Input';
import Icon from './googleIcon';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {signup, signin} from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup) {
            dispatch(signup(formData, history))
        }
        else {
            dispatch(signin(formData, history))  
        }
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const toggleMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    }
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword ); 

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({type: 'AUTH', data: {result, token}});
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    const googleFaliure = () => {
        console.log("An unsuccessful attempt to Sign in ");
    }


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
                                <Input name="lastName" label="Last Name" handleChange={handleChange} part />
                            </>
                            )}
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId="455402096259-pe6chhtfji34v3pi8ddraol5m8qd2fup.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color ="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />}variant="contained">
                                Sign In With Google
                            </Button>
                        )}
                         onSuccess={googleSuccess}
                         onFaliure={googleFaliure}
                         cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={toggleMode}>
                                { isSignup ? 'Have account? Sign In' : 'New here? register now'}
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;
