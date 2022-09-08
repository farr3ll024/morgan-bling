import "./App.css";
import Posts from "./components/Posts";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Button from "@mui/material/Button";
import React, {useRef} from 'react';
import ContactForm from "./components/ContactForm";
import Divider from "@mui/material/Divider";

const App = () => {

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="App">
            <Navbar id="navbar"/>
             {/* temp section - add button that scrolls user to posts section */}
            <Button onClick={handleClick} id="test-scroll">Click Me!</Button>
            <Header id="header"/>
            <AboutMe id="about-me"/>
            <Divider sx={{ m: 5 }}/>
            <ContactForm />
             {/* TODO: add three sections of content */}
             {/* TODO: section 1: about (show lorem ipsum next to a photo of a person) */}
             {/* TODO: section 2: products (show some random images) */}
             {/* TODO: section 3: contact me (use email-js) */}
            <div style={{ paddingTop: 900 }} ref={ref}>
                <Posts/>
            </div>
        </div>
    );
}

export default App;
