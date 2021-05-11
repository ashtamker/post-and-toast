import React from 'react'
import { Grid, TextField, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const Input = ({part, name, handleChange, label, autoFocus, type, handleShowPassword}) => {
    return (
        <div>
            <Grid item xs={12} sm={part ? 6 : 12}>
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
                    <InputAdornment postion="emd">
                        <IconButton onClick={handleShowPassword}>
                            {type === "passwprd" ? <Visibility /> : <VisibilityOff />}
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
