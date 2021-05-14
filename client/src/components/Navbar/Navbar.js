import React,{useState, useEffect} from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button} from '@material-ui/core';
import useStyles from './navbarStyle';
import homeImg from '../../img/home.jpg';
import {Link, useHistory, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Navbar = () => {

    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({type: 'LOGOUT'});
        history.push('/');

        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));  
    }, [location])



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
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
        </div>
    ) : (
        <Button className='btn' component={Link} to="/auth" variant="contained" color='secondary'>Sign In</Button>
    
    )}
</Toolbar>
  </AppBar>
)
}


export default Navbar;