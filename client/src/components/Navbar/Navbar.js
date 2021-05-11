import React from 'react';
import { AppBar, Typography} from '@material-ui/core';
import useStyles from './navbarStyle';
import homeImg from '../../img/home.jpg';

const Navbar = () => {

    const classes = useStyles();

return (    
    <AppBar className={classes.appBar} position="static" color="inherit">
    <Typography className={classes.heading} variant="h3" align="center">Post&Toast</Typography>
    <img className={classes.image} src={homeImg} alt="icon" height="60"/>
  </AppBar>
)
}


export default Navbar;