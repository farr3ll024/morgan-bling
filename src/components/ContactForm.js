import React from 'react';
import Typography from "@mui/material/Typography";
import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ContactForm = () => {

    const onSubmit = (values) => {
        console.log('submitting...');
        console.log('values: ', values)
    }

    return (
        <Container>
            <Box>
                <Typography>CONTACT ME</Typography>
                <div>FIRST NAME</div>
                <div>LAST NAME</div>
                <div>EMAIL</div>
                <div>PHONE NUMBER</div>
                <div>PREFERRED METHOD OF CONTACT</div>
                <div>MESSAGE</div>
                <Button onClick={onSubmit}>Submit</Button>
            </Box>
        </Container>
    )
}

export default ContactForm;
