import React from "react";
import styles from "../Login.module.css";
import Grid from "@mui/material/Grid2";

// side image
import sideImg from "../assets/images/additional/sideImg1.png";
// side image

// logo image
import logo from "../assets/images/logos/ceylonTrail_logo.png";
import sl_Logo from "../assets/images/logos/sl_Logo.png";
// logo image

export default function Login() {
  return (
    <div className={styles.mainBackground}>
      <Grid container>
        <Grid size={12}>
          <div className={styles.mainLoginBox}>
            <Grid container>
              <Grid
                size={4}
                padding={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "90vh",
                }}
              >
                {/* side image */}
                <div className={styles.sideImgHolder}>
                  <h3>Eco-Friendly and Green Tourism</h3>
                  <h4>Let's take Sri Lankan Tourism to the Next Level</h4>
                  <img alt="side_image" src={sideImg} width={500} />
                </div>
                {/* side image */}
              </Grid>
              <Grid container size={8} sx={{ height: "90vh" }}>
                <Grid
                  size={8}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    flexDirection: "column",
                    height: "40vh",
                    gap: 1,
                  }}
                >
                  <img
                    src={logo}
                    alt="logo"
                    width={50}
                    style={{ marginTop: "140px" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      gap: 10,
                    }}
                  >
                    <span style={{ fontWeight: "450", fontSize: "2.2rem" }}>
                      Ceylon Trail
                    </span>
                    <span> LK</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "start",
                    }}
                  >
                    <span style={{ fontWeight: "250", fontSize: "2.1rem" }}>
                      Dashboard Log In
                    </span>
                  </div>
                </Grid>
                <Grid
                  size={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "40vh",
                  }}
                >
                  <img src={sl_Logo} alt="sl logo" width={140} />
                </Grid>
                <Grid size={1} />
                {/* login fields */}
                <Grid size={10} sx={{ height: "300px" }}>
                  <div className={styles.inputField}></div>
                  <div className={styles.passportField}></div>
                </Grid>
                {/* login fields */}
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
