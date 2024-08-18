import React from 'react';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

function InputAPI({ handleSearch, handleSubmit }) {
    return (
        <form style={{ display: 'flex', width: "100vm", justifyContent: "center", paddingBottom: 75 }} onSubmit={handleSubmit}>
            <TextField sx={{ width: 400 }} label="@ do Github" id="fullWidth" onChange={handleSearch} />
            <Button variant="contained" size="large" onClick={handleSubmit}>
                <SearchIcon />
            </Button>
        </form>
    );
}

export default InputAPI;
