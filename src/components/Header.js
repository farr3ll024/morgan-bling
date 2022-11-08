import React from 'react';
import {Grid} from "@mui/material";

const Header = () => {
    return (
        <header className="App-header">
            <Grid container>
                <Grid item sx={{ color: 'black' }}>
                    <h5>Morgan Smith</h5>
                </Grid>
            </Grid>
        </header>
    );
}

export default Header;
