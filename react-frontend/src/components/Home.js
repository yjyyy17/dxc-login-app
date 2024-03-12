import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  const username = localStorage.getItem("username");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    navigate("login");
  };
  return (
    <>
      <Grid container justifyContent={"right"} padding={2}>
        <Button variant="contained" color="error" onClick={handleClick}>
          Logout
        </Button>
      </Grid>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
          <Typography variant="h4" gutterBottom>
            {t("welcome")}, {name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {t("username")}: {username}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {t("role")}: {role}
          </Typography>
          {role === "ROLE_MANAGER" ? (
            <>
              <Link to="/restricted">{t("restricted")}</Link>
            </>
          ) : (
            <></>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default Home;
