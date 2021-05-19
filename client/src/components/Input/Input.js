import React from 'react'
import { Grid, TextField, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const Input = ({name, handleChange, label, half, autoFocus, type, handleShowPassword}) => {
    return (
        <div>
            <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField 
            name={name} 
            label={label} 
            onChange={handleChange} 
            autoFocus={autoFocus}
            type={type}
            variant="standard"
            required
            fullWidth
            InputProps={name === 'password' ? {
                endAdornment: (
                    <InputAdornment postion="end">
                        <IconButton onClick={handleShowPassword}>
                            {type === "password" ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )
            } : null } 
            />
            </Grid>  
        </div>
    )
}

export default Input;
