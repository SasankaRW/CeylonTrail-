import React from "react";
import styles from "../Submissions.module.css";
import Grid from "@mui/material/Grid2";

// images
import logo from "../assets/images/logos/ceylonTrail_logo.png";
// import profilePic from "../assets/images/additional/profilePic.JPG";
import profilePic2 from "../assets/images/additional/profilePic2.png";

import { Avatar } from "@mui/material";

export default function Submission() {
  return (
    <div>
      <Grid container>
        {/* navbar */}
        <Grid
          size={12}
          container
          sx={{ height: "8vh", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
        >
          {/* logo and name */}
          <Grid size={3}>
            <div className={styles.logoName}>
              <img src={logo} alt="logo" width={30} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "baseline",
                  gap: 5,
                }}
              >
                <span style={{ fontWeight: "550", fontSize: "1.2rem" }}>
                  Ceylon Trail
                </span>
                <span style={{ fontWeight: "750", fontSize: "0.6rem" }}>
                  {" "}
                  LK
                </span>
              </div>
            </div>
          </Grid>
          {/* logo and name */}
          {/* welcome text */}
          <Grid size={6}>
            <div className={styles.welcomeTxt}>
              <span>Welcome to the Dashboard</span>
            </div>
          </Grid>
          {/* welcome text */}
          {/* admin profile */}
          <Grid size={3}>
            <div className={styles.adminDetails}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "end",
                }}
              >
                <span style={{ fontSize: "1rem" }}>Dinul Perera</span>
                <span
                  style={{ fontSize: "0.9rem", color: "rgb(170, 170, 170)" }}
                >
                  admin
                </span>
              </div>
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src={profilePic2}
                  sx={{ width: 46, height: 46 }}
                />
              </div>
            </div>
          </Grid>
          {/* admin profile */}
        </Grid>
        {/* navbar */}
      </Grid>
    </div>
  );
}
