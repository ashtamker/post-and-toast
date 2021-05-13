import React from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button} from '@material-ui/core';
import useStyles from './navbarStyle';
import homeImg from '../../img/home.jpg';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const classes = useStyles();
    const user = null;
return (    
    <AppBar className={classes.appBar} position="static" color="inherit">
    <div className={classes.brandContainer}>
    <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Post&Toast</Typography>
    <img className={classes.image} src={homeImg} alt="icon" height="60"/>
    </div>   
<Toolbar className={classes.toolbar}>
    {user ? (
        <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.user} variant="h6">{user.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
        </div>
    ) : (
        <Button className='btn' component={Link} to="/auth" variant="contained" color='secondary'>Sign In</Button>
    
    )}
</Toolbar>
  </AppBar>
)
}


export default Navbar;