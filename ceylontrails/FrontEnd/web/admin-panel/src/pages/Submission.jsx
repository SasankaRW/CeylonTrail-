import React from "react";
import styles from "../Submissions.module.css";
import Grid from "@mui/material/Grid2";

// images
import logo from "../assets/images/logos/ceylonTrail_logo.png";
import search from "../assets/images/icons/search.png";
import arrow from "../assets/images/icons/right_arrow.png";
// import profilePic from "../assets/images/additional/profilePic.JPG";
import profilePic2 from "../assets/images/additional/profilePic2.png";

// table components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// table components

import { Avatar, Breadcrumbs, Link } from "@mui/material";

export default function Submission() {
  const columns = [
    { id: "userDetail", label: "USER", minWidth: 170 },
    { id: "visaId", label: "VISA\u00a0\u00a0ID", minWidth: 50 },
    { id: "country", label: "COUNTRY", minWidth: 50 },
    {
      id: "arrival_date",
      label: "ARRIVAL\u00a0-\u00a0DATE",
      minWidth: 100,
      align: "center",
    },
    {
      id: "depart_date",
      label: "DEPARTURE\u00a0-\u00a0DATE",
      minWidth: 100,
      align: "center",
    },
    { id: "statusState", label: "STATUS", minWidth: 70, align: "center" },
  ];

  function createData(
    userName,
    userId,
    visaId,
    country,
    arrival_date,
    depart_date,
    status
  ) {
    const userDetail = (
      <div className={styles.userDetails}>
        <Avatar
          alt="User Image"
          src={profilePic2}
          sx={{ width: 46, height: 46 }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className={styles.userName}>{userName}</span>
          <span className={styles.userId}>{userId}</span>
        </div>
      </div>
    );
    const statusState = (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        {status === "approved" ? (
          <div
            className={`${styles.visaStatusContainer} ${styles.visaApproved}`}
          >
            <div className={`${styles.visaStatus}`}>
              <span style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
                &#x2022;
              </span>{" "}
              Approved
            </div>
          </div>
        ) : status === "pending" ? (
          <div
            className={`${styles.visaStatusContainer} ${styles.visaPending}`}
          >
            <div className={`${styles.visaStatus}`}>
              <span style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
                &#x2022;
              </span>{" "}
              Pending
            </div>
          </div>
        ) : (
          <div
            className={`${styles.visaStatusContainer} ${styles.visaDeclined}`}
          >
            <div className={`${styles.visaStatus}`}>
              <span style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
                &#x2022;
              </span>{" "}
              Declined
            </div>
          </div>
        )}
        <div>
          <img alt="right_arrow" src={arrow} width={8} />
        </div>
      </div>
    );
    return {
      userDetail,
      userId,
      visaId,
      country,
      arrival_date,
      depart_date,
      statusState,
    };
  }

  const rows = [
    createData(
      "Dinul Perera",
      "User0001",
      1324171354,
      "Sri Lanka",
      "2024 / 03 / 18",
      "2024 / 05 / 18",
      "approved"
    ),
    createData(
      "Dinul Perera",
      "User0002",
      1403500365,
      "India",
      "2024 / 03 / 18",
      "2024 / 05 / 18",
      "pending"
    ),
    createData(
      "Dinul Perera",
      "User0003",
      60483973,
      "Australia",
      "2024 / 03 / 18",
      "2024 / 05 / 18",
      "declined"
    ),
    createData(
      "Dinul Perera",
      "User0004",
      327167434,
      "America",
      "2024 / 03 / 18",
      "2024 / 05 / 18",
      "approved"
    ),
    createData(
      "Dinul Perera",
      "User0005",
      37602103,
      "Denmark",
      "2024 / 03 / 18",
      "2024 / 05 / 18",
      "pending"
    ),
    createData(
      "Dinul Perera",
      "User0006",
      25475400,
      "China",
      "2024 / 03 / 18",
      "2024 / 05 / 18",
      "declined"
    ),
    createData(
      "Dinul Perera",
      "User0007",
      83019200,
      "Japan",
      "2024 / 03 / 18",
      "2024 / 05 / 18",
      "approved"
    ),
    createData(
      "Dinul Perera",
      "User0008",
      4857000,
      "New Zealand",
      "2024 / 03 / 18",
      "2024 / 05 / 18",
      "pending"
    ),
    createData(
      "Dinul Perera",
      "User0009",
      126577691,
      "France",
      "2024 / 03 / 18",
      "2024 / 05 / 18",
      "declined"
    ),
    createData(
      "Dinul Perera",
      "User00010",
      126317000,
      "Germany",
      "2024 / 03 / 18",
      "2024 / 05 / 18",
      "approved"
    ),
    createData(
      "Dinul Perera",
      "User00011",
      67022000,
      "Afghanistan",
      "2024 / 03 / 18",
      "2024 / 05 / 18",
      "pending"
    ),
    createData(
      "Dinul Perera",
      "User00012",
      67545757,
      "Russia",
      "2024 / 03 / 18",
      "2024 / 05 / 18",
      "declined"
    ),
    createData(
      "Dinul Perera",
      "User00013",
      146793744,
      "China",
      "2024 / 03 / 18",
      "2024 / 05 / 18",
      "approved"
    ),
    createData(
      "Dinul Perera",
      "User00014",
      200962417,
      "Japan",
      "2024 / 03 / 18",
      "2024 / 05 / 18",
      "pending"
    ),
    createData(
      "Dinul Perera",
      "User00015",
      210147125,
      "Sri Lanka",
      "2024 / 03 / 18",
      "2024 / 05 / 18",
      "declined"
    ),
  ];

  // pagination

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // pagination

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

        {/* topic and searchbar */}
        <Grid size={12} container sx={{ height: "10vh" }}>
          <Grid size={3} className={styles.breadcrumbSection}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                submissions
              </Link>
              <Link underline="hover" color="inherit" href="/"></Link>
            </Breadcrumbs>
            <span style={{ fontSize: "1.2rem" }}>Visa Submissions</span>
          </Grid>
          <Grid size={6} />
          <Grid
            size={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className={styles.visaSearchbarContainer}>
              <input
                placeholder="Search by Visa Id"
                className={styles.visaSearch}
              />
              <img alt="search_icon" src={search} />
            </div>
          </Grid>
        </Grid>
        {/* topic and searchbar */}

        {/* submission list */}
        <Grid size={1} />
        <Grid
          size={12}
          container
          sx={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "20px" }}
        >
          <Grid size={12} container sx={{ height: "75vh" }}>
            <TableContainer sx={{ maxHeight: "70vh" }}>
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
                <TableBody className={styles.customTableBody}>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
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
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Grid size={12} className={styles.fixedBottom}>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* submission list */}
      </Grid>
    </div>
  );
}
