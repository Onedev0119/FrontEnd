"use client";
//82 177,22
import React, { useState } from "react";
import styles from "./page.module.css";
import { Grid, Typography, TextField, Box, Button } from "@mui/material";
export default function Page() {
  const [selectOne, setSelectOne] = useState(-1);
  const [selectTwo, setSelectTwo] = useState(-1);
  const [errors, setError] = useState({ firstname: "", lastname: "", username: "For security purposes, your username must be unique", email: "Sorry, no faposte, net, free.fr, or numbericable.fr, addresses", password: "", repassword: "" });
  return (
    <React.Fragment>
      <Grid container spacing={2} className={styles.padding10}>
        <Grid item xs={12} md={5} lg={5} sx={{ height: "75vh", backgroundColor: "rgba(0,0,0,0.2)" }}>
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <Grid container mb={2} >
            <Grid item xs={6} sm={6} md={6} >
              <Box sx={{ml:4}}>
                <Typography sx={{ fontWeight: "bold" }}>
                  First Name
                </Typography>
                <TextField
                  placeholder="Your First name"
                  sx={{ width: "90%", marginTop: 1 }}
                ></TextField>
                <Typography sx={{ fontSize: 15, color: "#e31c76", fontStyle: "italic" }}>
                  {errors.firstname}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={6} >
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>
                  Last Name
                </Typography>
                <TextField
                  placeholder="Your Last name"
                  sx={{ width: "90%", marginTop: 1 }}
                ></TextField>
                <Typography sx={{ fontSize: 15, color: "#e31c76", fontStyle: "italic" }}>
                  {errors.lastname}
                </Typography>
              </Box>
            </Grid>
          </Grid>



          <Grid container mb={2}>
            <Grid item xs={6} sm={6} md={6}>
              <Box sx={{ml:4}}>
                <Typography sx={{ fontWeight: "bold" }}>
                  User Name
                </Typography>
                <TextField
                  placeholder="Enter a Username"
                  sx={{ width: "90%", marginTop: 1 }}
                ></TextField>
                <Typography sx={{ fontSize: 15, color: "#e31c76", fontStyle: "italic" }}>
                  {errors.username}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={6} >
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>
                  Email
                </Typography>
                <TextField
                  placeholder="Enter Your Email."
                  sx={{ width: "90%", marginTop: 1 }}
                ></TextField>
                <Typography sx={{ fontSize: 15, color: "#e31c76", fontStyle: "italic" }}>
                  {errors.email}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container mb={2}>
            <Grid item xs={6} sm={6} md={6}>
              <Box sx={{ml:4}}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Password
                </Typography>
                <TextField
                  placeholder="Enter a Password"
                  sx={{ width: "90%", marginTop: 1 }}
                ></TextField>
                <Typography sx={{ fontSize: 15, color: "#e31c76", fontStyle: "italic" }}>
                  {errors.password}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={6} >
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>
                  Confirm Password
                </Typography>
                <TextField
                  placeholder="Reenter Your Password"
                  sx={{ width: "90%", marginTop: 1 }}
                ></TextField>
                <Typography sx={{ fontSize: 15, color: "#e31c76", fontStyle: "italic" }}>
                  {errors.repassword}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ml:4}}>
            <Typography sx={{ fontSize: 23 }}>
              Are you a resident or citizen of the United States or its territories?
            </Typography>
            <Box>
              <Button variant={(selectOne === 0) ? "outlined" : ""} color="primary" sx={{ width: 100 }} onClick={(e) => setSelectOne(0)}>Yes</Button>&nbsp;&nbsp;
              <Button variant={(selectOne === 1) ? "outlined" : ""} color="primary" sx={{ width: 100 }} onClick={(e) => setSelectOne(1)}>No</Button>&nbsp;&nbsp;

            </Box>

            <Typography mt={2} sx={{ fontSize: 23}}>
              Are you a resident or citizen of the United States or its territories?
            </Typography>
            <div>
              <Button variant={(selectTwo === 0) ? "outlined" : ""}  color="primary" sx={{ width: 100 }} onClick={(e) => setSelectTwo(0)}>Yes</Button>&nbsp;&nbsp;
              <Button variant={(selectTwo === 1) ? "outlined" : ""} color="primary" sx={{ width: 100 }} onClick={(e) => setSelectTwo(1)}>No</Button>&nbsp;&nbsp;
            </div>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
              <Box>
                <Button variant="contained" color="primary" sx={{ width: 350, fontSize: 20 }}>Sign Up</Button>
                <Box mt={1}>
                  <Typography sx={{ fontSize: 18, textAlign: 'center' }}>Already have an account? <strong><a className={styles.cursor}>Log In</a></strong></Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment >
  );
}
