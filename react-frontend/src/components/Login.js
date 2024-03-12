import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8081/api/user/login", {
        username: username,
        password: password,
      });
      const token = response.data;
      localStorage.setItem("username", token.username);
      localStorage.setItem("name", token.name);
      localStorage.setItem("role", token.role);
      navigate("/home");
    } catch (error) {
      navigate("/login");
      console.error("Error during login:", error);
      alert("Invalid userid or password");
    }
  };
  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
        <div>
          <Typography variant="h5" gutterBottom>
            {t("login")}
          </Typography>
          <TextField
            label={t("username")}
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label={t("password")}
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            {t("login")}
          </Button>
        </div>
      </Paper>
    </Container>
  );
};
export default Login;
