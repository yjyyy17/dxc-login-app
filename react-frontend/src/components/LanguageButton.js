import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageButton = () => {
    const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const handleChange = (event, language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };
  return (
    <ToggleButtonGroup
      color="primary"
      value={language}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="en">{t("english")}</ToggleButton>
      <ToggleButton value="zh">{t("chinese")}</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default LanguageButton;
