import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

const roundTrip = [
  "All Transactions",
  "Received Transactions",
  "Sent Transactions",
];

const economyTable = ["Bitcoin", "Premium Etherium", "Solana", "USDC"];

function UpperHeader() {
  const [transaction, setTransaction] = useState("");
  const [economy, setEconomy] = useState("");

  const handleChange = (event) => {
    setTransaction(event.target.value);
  };

  const handleChangeEconomy = (event) => {
    setEconomy(event.target.value);
  };
  return (
    <Stack mt={5} mb={4} direction={"row"} alignItems={"center"}>
      <SwapHorizIcon style={{ width: 30, height: 30 }} />
      <Box ml={2} sx={{ minWidth: 220 }}>
        <FormControl style={{ maxHeight: 40 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Round Trip</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Round Trip"
            onChange={handleChange}
            value={transaction || roundTrip[0]}
            placeholder="Manos"
            style={{ maxHeight: 40 }}
            defaultValue
          >
            {roundTrip.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box ml={2} sx={{ minWidth: 220 }}>
        <FormControl style={{ maxHeight: 40 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            value={economy || economyTable[0]}
            label="Economy"
            onChange={handleChangeEconomy}
            style={{ maxHeight: 40 }}
            defaultValue
          >
            {economyTable.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Stack>
  );
}

export default UpperHeader;
