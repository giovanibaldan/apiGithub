import React from 'react';
import './InputAPI.css';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

function InputAPI({ handleSearch, handleSubmit }) {
    return (
        <form className="inputDiv" onSubmit={handleSubmit}>
            <TextField className='inputForm' label="@ do Github" id="fullWidth" onChange={handleSearch} />
            <Button className="searchButton" variant="contained" size="large" onClick={handleSubmit}>
                <SearchIcon />
            </Button>
        </form>
    );
}

export default InputAPI;
