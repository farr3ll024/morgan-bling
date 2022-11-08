import React from 'react';
import {Button, Grid, TextField} from "@mui/material";
import {Form, Formik} from "formik";

const ContactForm = () => {
    return (
        <Grid container>
            <Formik
                initialValues={{}}
                onSubmit={() => console.log('submitting...')}
            >
                {({
                    values,
                    errors,
                    touched,
                    isSubmitting
                }) => (
                    <Form>
                        <Grid container direction="column" spacing={1} minWidth="300px">
                            <Grid item>
                                <TextField label="First Name" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item>
                                <TextField label="Last Name" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item>
                                <TextField label="Email" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item>
                                <TextField label="Message" variant="outlined" multiline rows={5} fullWidth />
                            </Grid>
                            <Grid item>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Send!</Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Grid>
    )
}

export default ContactForm;
