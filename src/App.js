import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import React from 'react';
import ContactForm from "./components/ContactForm";
import Divider from "@mui/material/Divider";

const App = () => {

    return (
        <div className="App">
            <Navbar id="navbar"/>
            <Header id="header"/>
            <AboutMe id="about-me"/>
            <Divider sx={{ m: 5 }}/>
            <ContactForm />
             {/* TODO: add three sections of content */}
             {/* TODO: section 1: about (show lorem ipsum next to a photo of a person) */}
             {/* TODO: section 2: products (show some random images) */}
             {/* TODO: section 3: contact me (use email-js) */}
        </div>
    );
}

export default App;
