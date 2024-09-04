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

// icons
import envelopIcon from "../assets/images/icons/envelop.png";
import lockIcon from "../assets/images/icons/lock.png";
// icons

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
              <Grid
                container
                size={8}
                sx={{ height: "90vh"}}
              >
                <Grid
                  size={8}
                  sx={{
                    display: "flex",
                    justifyContent: "end",
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
                    alignItems: "end",
                    height: "40vh",
                  }}
                >
                  <img src={sl_Logo} alt="sl logo" width={140} />
                </Grid>
                {/* login fields */}
                <Grid
                  size={12}
                  sx={{
                    gap: 3,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div className={styles.inputField}>
                    <div className={styles.userInputContainer}>
                      <label>EMAIL ADDRESS</label>
                      <input className={styles.userInput} type="email" />
                    </div>
                    <div className={styles.iconContainer}>
                      <img src={envelopIcon} width={25} />
                    </div>
                  </div>
                  <div className={styles.inputField}>
                    <div className={styles.userInputContainer}>
                      <label>PASSWORD</label>
                      <input className={styles.userInput} type="password" />
                    </div>
                    <div className={styles.iconContainer}>
                      <img src={lockIcon} width={20} />
                    </div>
                  </div>
                </Grid>
                {/* login fields */}
                {/* login button section */}
                <Grid size={11}>
                  <div className={styles.loginBtnSection}>
                    <div className={styles.loginBtn}>Login</div>
                  </div>
                </Grid>
                {/* login button section */}
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
