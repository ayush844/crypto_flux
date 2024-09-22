import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import SelectDays from "./SelectDays";

function SelectCoins({
  allCoins,
  crypto1,
  crypto2,
  onCoinChange,
  days,
  handleDaysChange,
}) {
  const style = {
    height: "2.5rem",
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  return (
    <div className=" flex justify-start items-center gap-6 md:gap-12 my-6 mx-12 flex-wrap">
      <div className=" flex justify-start items-center gap-4">
        <p className=" text-white">Crypto 1</p>
        <Select
          value={crypto1}
          onChange={(e) => onCoinChange(e, false)}
          sx={style}
        >
          {allCoins
            .filter((coin) => coin.id != crypto2)
            .map((coin, i) => (
              <MenuItem value={coin.id} key={i}>
                {coin.name}
              </MenuItem>
            ))}
        </Select>
      </div>
      <div className=" flex justify-start items-center gap-4">
        <p className=" text-white">Crypto 2</p>
        <Select
          value={crypto2}
          onChange={(e) => onCoinChange(e, true)}
          sx={style}
        >
          {allCoins
            .filter((coin) => coin.id != crypto1)
            .map((coin, i) => (
              <MenuItem value={coin.id} key={i}>
                {coin.name}
              </MenuItem>
            ))}
        </Select>
      </div>

      <SelectDays days={days}
        handleDaysChange={handleDaysChange}
        noPTag={true} />
    </div>
  );
}

export default SelectCoins;