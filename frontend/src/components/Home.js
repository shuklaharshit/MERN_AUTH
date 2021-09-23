import React, { useState, useEffect } from "react";
import {
    Grid,
    Typography,
    TextField,
    Button,
    CircularProgress,
    Container,
} from "@mui/material";
import PropTypes from "prop-types";
import { loginUser, logoutUser } from "../actions/authAction";
import { withRouter } from "react-router";
import { connect } from 'react-redux';


function Home(props) {
    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            style={{
                paddingBottom: "1rem",
                marginTop: "4.5rem",
                width: "100%",
            }}
        // spacing={2}
        >
            <Grid item xs={12}>
                <Typography align="center" color="secondary" variant="h2">
                    Welcome
                </Typography>

            </Grid>
            <Grid item xs={12}>
                <Typography
                    align="center"
                    display="block"
                    color="secondary"
                    variant="h4"

                >
                    {props.auth.user.name}

                </Typography>
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "1rem", display: "flex", justifyContent: "center", alignItems: "center" }}>

                <Button
                    type="submit"
                    variant="contained"
                    color="error"
                    fullWidth={false}
                    onClick={() => {
                        props.logoutUser()
                    }}
                >
                    LogOut
                </Button>
            </Grid>

        </Grid>

    )
}
const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Home);
