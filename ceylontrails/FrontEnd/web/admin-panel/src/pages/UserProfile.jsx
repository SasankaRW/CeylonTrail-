import React from "react";
import styles from "../UserProfile.module.css";
import Grid from "@mui/material/Grid2";

// images
import logo from "../assets/images/logos/ceylonTrail_logo.png";
import profilePic2 from "../assets/images/additional/profilePic2.png";
import profilePic3 from "../assets/images/additional/profilePic3.png";

// passport icons
import passportBio from "../assets/images/icons/passportBio.png";
import passportPic from "../assets/images/icons/passportPic.png";
// passport icons

// trip history table component
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// trip history table component

import verified from "../assets/images/icons/verified.png";
import left from "../assets/images/icons/left_arrow.png";

import { Avatar, Box, Breadcrumbs, Link } from "@mui/material";

export default function UserProfile() {
  const columns = [
    { id: "country", label: "COUNTRY", minWidth: 170, align: "center" },
    { id: "arrival", label: "ARRIVAL DATE", minWidth: 100, align: "center" },
    {
      id: "departure",
      label: "DEPARTURE DATE",
      minWidth: 170,
      align: "center",
    },
  ];

  function createData(country, arrival, departure) {
    return { country, arrival, departure };
  }

  const rows = [
    createData("India", "2024 / 03 / 18", "2024 / 06 / 20"),
    createData("America", "2024 / 03 / 18", "2024 / 06 / 20"),
    createData("Australia", "2024 / 03 / 18", "2024 / 06 / 20"),
    createData("Australia", "2024 / 03 / 18", "2024 / 06 / 20"),
    createData("Australia", "2024 / 03 / 18", "2024 / 06 / 20"),
    createData("Australia", "2024 / 03 / 18", "2024 / 06 / 20"),
    createData("Australia", "2024 / 03 / 18", "2024 / 06 / 20"),
    createData("Australia", "2024 / 03 / 18", "2024 / 06 / 20"),
    createData("Australia", "2024 / 03 / 18", "2024 / 06 / 20"),
    createData("Australia", "2024 / 03 / 18", "2024 / 06 / 20"),
    createData("Australia", "2024 / 03 / 18", "2024 / 06 / 20"),
    createData("Australia", "2024 / 03 / 18", "2024 / 06 / 20"),
    createData("Australia", "2024 / 03 / 18", "2024 / 06 / 20"),
    createData("Australia", "2024 / 03 / 18", "2024 / 06 / 20"),
    createData("Australia", "2024 / 03 / 18", "2024 / 06 / 20"),
    createData("Australia", "2024 / 03 / 18", "2024 / 06 / 20"),
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
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
              <span style={{ fontWeight: "750", fontSize: "0.6rem" }}> LK</span>
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
              <span style={{ fontSize: "0.9rem", color: "rgb(170, 170, 170)" }}>
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
      {/* topic*/}
      <Grid size={12} container sx={{ height: "10vh" }}>
        <Grid size={3} className={styles.breadcrumbSection}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              submissions
            </Link>
            <Link underline="hover" color="inherit" href="/">
              {"User0001"}
            </Link>
          </Breadcrumbs>
          <span style={{ fontSize: "1.2rem" }}>{"User0001"} - Visa Review</span>
        </Grid>
      </Grid>
      {/* topic*/}
      <Grid size={12} container>
        {/* user details */}
        <Grid size={3} paddingLeft={3} paddingRight={3}>
          <Box className={styles.userDetails}>
            <Grid
              size={12}
              sx={{
                borderBottom: "1px solid rgb(214, 214, 214)",
                paddingBottom: "15px",
              }}
            >
              <div className={styles.userProfile}>
                <Avatar
                  alt="User Image"
                  src={profilePic3}
                  sx={{ width: 76, height: 76 }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <span className={styles.userName}>{"Sasanka Ravindu"}</span>
                  <span className={styles.userId}>{"User0001"}</span>
                </div>
              </div>
            </Grid>
            <Grid
              size={12}
              mt={3}
              paddingLeft={3}
              paddingRight={3}
              sx={{
                display: "flex",
                justifyContent: "start",
                gap: 3,
                flexDirection: "column",
                borderBottom: "1px solid rgb(214, 214, 214)",
                paddingBottom: "20px",
              }}
            >
              {/* name */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "0.9rem",
                }}
              >
                <span style={{ fontWeight: "550" }}>Date of Birth</span>
                <span style={{ fontWeight: "400" }}>{"2024 / 05 / 02"}</span>
              </div>
              {/* dob */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "0.9rem",
                }}
              >
                <span style={{ fontWeight: "550" }}>NIC</span>
                <span style={{ fontWeight: "400" }}>{"200107800263"}</span>
              </div>
              {/* country */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "0.9rem",
                }}
              >
                <span style={{ fontWeight: "550" }}>Country</span>
                <span style={{ fontWeight: "400" }}>{"America"}</span>
              </div>
              {/* address */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "0.9rem",
                }}
              >
                <span style={{ fontWeight: "550" }}>Address</span>
                <span
                  style={{
                    fontWeight: "400",
                    textAlign: "right",
                    width: "50%",
                  }}
                >
                  {"123 Maple StreetSpringfield, IL 62704USA"}
                </span>
              </div>
            </Grid>
            <Grid
              size={12}
              mt={3}
              paddingLeft={3}
              paddingRight={3}
              sx={{
                display: "flex",
                justifyContent: "start",
                gap: 3,
                flexDirection: "column",
                borderBottom: "1px solid rgb(214, 214, 214)",
                paddingBottom: "15px",
              }}
            >
              {/* civil status */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "0.9rem",
                }}
              >
                <span style={{ fontWeight: "550" }}>Civil Status</span>
                <span style={{ fontWeight: "400" }}>{"Married"}</span>
              </div>
              {/* civil status */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "0.9rem",
                }}
              >
                <span style={{ fontWeight: "550" }}>Mobile</span>
                <span style={{ fontWeight: "400" }}>{"(555) 123-4567"}</span>
              </div>
            </Grid>
            <Grid
              size={12}
              mt={6}
              paddingLeft={3}
              paddingRight={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
                flexDirection: "column",
              }}
            >
              <div className={styles.approveBtn}>
                <span>Approve Visa</span>
                <img alt="verifiied_btn" src={verified} width={20} />
              </div>
              <div className={styles.backBtn}>
                <img alt="verifiied_btn" src={left} width={10} />
                <span>Back to Submissions</span>
              </div>
            </Grid>
          </Box>
        </Grid>
        {/* user details */}
        {/* visa and travel history */}
        <Grid size={9} paddingLeft={3} paddingRight={3}>
          {/* visa details */}
          <Grid size={12} container>
            {/* passport details */}
            <Box className={styles.passportDetails}>
              <Grid size={12} container>
                <Grid
                  size={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                  }}
                >
                  {/* passport number */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.9rem",
                    }}
                  >
                    <span style={{ fontWeight: "550" }}>Passport Number</span>
                    <span style={{ fontWeight: "400" }}>{"7700225VH"}</span>
                  </div>
                  {/* issue date */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.9rem",
                    }}
                  >
                    <span style={{ fontWeight: "550" }}>Issue Date</span>
                    <span style={{ fontWeight: "400" }}>
                      {"2017 / 03 / 18"}
                    </span>
                  </div>
                  {/* expire date */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.9rem",
                    }}
                  >
                    <span style={{ fontWeight: "550" }}>Expiry Date</span>
                    <span style={{ fontWeight: "400" }}>
                      {"2017 / 03 / 18"}
                    </span>
                  </div>
                </Grid>
                <Grid
                  size={8}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    gap: "30px",
                  }}
                >
                  <div>
                    <div className={styles.passportPicContainer}>
                      <img src={passportBio} alt="passport bio" width={40} />
                    </div>
                    <span>Passport&nbsp;&nbsp;Bio</span>
                  </div>
                  <div>
                    <div className={styles.passportPicContainer}>
                      <img
                        src={passportPic}
                        alt="passport profile"
                        width={40}
                      />
                    </div>
                    <span>Passport&nbsp;&nbsp;Profile</span>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* visa details */}
          {/* trip history */}
          <Grid size={12} mt={2}>
            <Box className={styles.tripHisotry}>
              <div className={styles.tripHistoryHeader}>
                <span style={{ color: "white", marginLeft: "30px" }}>
                  Trip History
                </span>
              </div>
              {/* trip table */}
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 340 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            sx={{ border: "none" }}
                            key={column.id}
                            align={column.align}
                            style={{
                              minWidth: column.minWidth,
                              fontWeight: "500",
                              fontFamily: "Outfit",
                              color: "#999999",
                            }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                          return (
                            <TableRow
                              role="checkbox"
                              tabIndex={-1}
                              key={row.code}
                              className={styles.tableRowHover}
                            >
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell
                                    sx={{ borderBottom: "none" }}
                                    key={column.id}
                                    align={column.align}
                                    style={{ fontFamily: "Outfit" }}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
              {/* trip table */}
            </Box>
          </Grid>
          {/* trip history */}
        </Grid>
        {/* visa and travel history */}
      </Grid>
    </Grid>
  );
}
