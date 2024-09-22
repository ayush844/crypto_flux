import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

export default function ToggleComponents({ priceType, handlePriceTypeChange }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1.5rem",
      }}
    >
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={(e) => handlePriceTypeChange(e)}
        sx={{
          borderColor: "#ffc83e",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid #ffc83e !important",
            color: "#ffc83e",
          },
          "& .MuiToggleButton-standard": {
            color: "#ffc83e",
          },
        }}
      >
        <ToggleButton
          value="prices"
          sx={{
            "&.Mui-selected": {
              backgroundColor: "#ffc83e !important",
              color: "#000 !important",
            },
          }}
        >
          Prices
        </ToggleButton>
        <ToggleButton
          value="market_caps"
          sx={{
            "&.Mui-selected": {
              backgroundColor: "#ffc83e !important",
              color: "#000 !important",
            },
          }}
        >
          Market Cap
        </ToggleButton>
        <ToggleButton
          value="total_volumes"
          sx={{
            "&.Mui-selected": {
              backgroundColor: "#ffc83e !important",
              color: "#000 !important",
            },
          }}
        >
          Total Volume
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
