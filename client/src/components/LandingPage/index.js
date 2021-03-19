import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import FocusLogo from "../../images/focus-logo.svg";
import styles from "./style.module.scss";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root": {
            borderRadius: 15,
        },
        "& .MuiInputLabel-root": {
            fontSize: "1.25rem",
            color: "#7D7D7D",
            fontFamily: "'Ropa Sans', sans-serif",
        },
    },
    buttonRoot: {
        background: "#30A0F5",
        borderRadius: 50,
        padding: "4px 25px",
        width: "100%",
    },
    label: {
        textTransform: "capitalize",
        fontFamily: "'Ropa Sans', sans-serif",
        fontSize: "1.75rem",
    },
});

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={styles.container}>
            <div className={styles.focusIntro}>
                <img className={styles.focusLogo} src={FocusLogo} alt="FOCUS" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit in mauris
                    eget aliquam. Proin dictum orci a diam tincidunt. Donec sed magna neque.
                </p>
            </div>
            <div className={styles.signUpContainer}>
                <h1>Create new account!</h1>

                <TextField
                    style={{ paddingBottom: 20 }}
                    classes={{ root: classes.root }}
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    label="Email address"
                />

                <TextField
                    style={{ paddingBottom: 20 }}
                    classes={{ root: classes.root }}
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    label="Password"
                />

                <Button
                    variant="contained"
                    color="primary"
                    classes={{ root: classes.buttonRoot, label: classes.label }}
                >
                    Sign Up
                </Button>

                <p>Already have an account? Sign in</p>
            </div>
        </div>
    );
}
