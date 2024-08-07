"use client";
//82 177,22
import React from "react";
import styles from "./page.module.css";
import { Grid, Typography, TextField, Box, Button } from "@mui/material";
export default function Page() {
  return (
    <React.Fragment>
      <Grid container direction="row" spacing={0} className={styles.padding10}>
        <Grid
          item
          xs={5}
          sx={{ height: "75vh", backgroundColor: "rgba(0,0,0,0.2)" }}
        ></Grid>
        <Grid
          item
          container
          xs={7}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                Username or Email
              </Typography>
              <TextField
                placeholder="Enter your username or email."
                sx={{ minWidth: 350, marginTop: 1 }}
              ></TextField>
            </Box>
            <Box mt={3}>
              <Typography sx={{ fontWeight: "bold" }}>Password</Typography>
              <TextField
                placeholder="Enter your password."
                sx={{ minWidth: 350, marginTop: 1 }}
              ></TextField>
            </Box>
            <Box mt={2}>
              <Typography
                sx={{ fontWeight: "bold", textAlign: "center" }}
                color="primary"
              >
                Remember me
              </Typography>
            </Box>
            <Box mt={1}>
              <center>
                <Button variant="contained" color="primary" sx={{width:'90%'}}>
                  {" "}
                  Log In
                </Button>
              </center>
            </Box>
            <Box mt={1}>
              <Typography sx={{fontSize:15,textAlign:'center'}}>Don't have an account? <strong><a className={styles.cursor}>Sign Up</a></strong></Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
