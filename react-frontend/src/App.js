import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import LanguageButton from "./components/LanguageButton";
import { Grid } from "@mui/material";
import Home from "./components/Home";
import Restricted from "./components/Restricted";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Grid container justifyContent={"right"} padding={2}>
          <LanguageButton />
        </Grid>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute requiredRoles={["ROLE_MANAGER", "ROLE_USER"]}>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/restricted"
            element={
              <PrivateRoute requiredRoles={"ROLE_MANAGER"}>
                <Restricted />
              </PrivateRoute>
            }
          />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </I18nextProvider>
  );
}

export default App;
