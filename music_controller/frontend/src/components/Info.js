import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "react-router-dom/Link";
import ButtonAppBar from "./ButtonAppBar";


export default class Info extends Component {
    renderInfo() {
        return (
            <>
                <Grid item xs={12}>
                    <p>House Party is a collaborative music playing system built with React and Django REST. 
                        This app is geared towards having a controlled queue of music with skipping and pausing.
                    </p>
                    <p>
                        To start up a room, visit the home page and create a room and set its parameters. Afterwards,
                        you will be prompted to login with Spotify allowing House Party to see an interact with songs.
                        Guests can join the room from the home page and pause/play/skip songs based on the host's preferences.
                    </p>
                </Grid>
            </>
        );
    }

    render() {
        return (
            <div>
                <ButtonAppBar />
                <Grid container style={{ margin: 0, width: '100%', }} spacing={1} align="center">
                    <Grid item xs={12}>
                        <Typography component="h4" variant="h4">
                            What is House Party?
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            {this.renderInfo()}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="secondary" variant="contained" to="/" component={Link}>
                            Back Home
                    </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}