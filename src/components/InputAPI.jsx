import React from 'react';
import { TextField } from '@mui/material';
import './InputAPI.css';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

function InputAPI(props) {
    return (
        <div className="inputDiv">
            <TextField className='inputForm' label="@ do Github" id="fullWidth" />
            <Button className="searchButton" variant="contained" size="large">
                <SearchIcon />
            </Button>
        </div>
    );
}

export default InputAPI;
