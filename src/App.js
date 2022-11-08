import "./App.css";
import React from 'react';
import ContactForm from "./components/contactSection/ContactForm";
import NavBar from "../src/components/Navbar";
import {Grid} from "@mui/material";

const App = () => {

    return (
        <div className="App">
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <NavBar />
                </Grid>
                <Grid item>
                    <ContactForm />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
