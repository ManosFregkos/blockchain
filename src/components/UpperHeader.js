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

const networkTable = [
  "Arbitrum",
  "Avalanche",
  "Binance",
  "Ethereum",
  "Optimism",
  "Polygon",
  "Solana",
];

function UpperHeader() {
  const [transaction, setTransaction] = useState("");
  const [economy, setEconomy] = useState("");
  const [network, setNetwork] = useState("");

  const handleChange = (event) => {
    setTransaction(event.target.value);
  };

  const handleChangeEconomy = (event) => {
    setEconomy(event.target.value);
  };

  const handleChangeNetwork = (event) => {
    setNetwork(event.target.value);
  };
  return (
    <Stack mt={5} mb={4} direction={"row"} alignItems={"center"}>
      <SwapHorizIcon style={{ width: 30, height: 56 }} />
      <Box ml={2} sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Round Trip</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Round Trip"
            onChange={handleChange}
            value={transaction}
            // placeholder="Manos"
            // style={{ maxHeight: 40 }}
            // defaultValue
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
        <FormControl  fullWidth>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={economy}
            label="Economy"
            onChange={handleChangeEconomy}
            // style={{ maxHeight: 40 }}
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
      <Box ml={2} sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Round Trip</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Round Trip"
            onChange={handleChangeNetwork}
            value={network}
            // size="small"
            // placeholder="Manos"
            // style={{ maxHeight: 40 }}
            // defaultValue
          >
            {networkTable.map((item) => (
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
