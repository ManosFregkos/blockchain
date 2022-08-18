import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const stopsTable = ["External", "Internal"];

function Filters() {
  const [stops, setStops] = useState("");
  const handleChangeStops = (event) => {
    setStops(event.target.value);
  };
  return (
    <Stack direction={"row"} mb={3} alignItems={"center"} maxWidth={1200}>
      <Box display={"flex"} alignItems={"center"}>
        <FilterAltIcon style={{ width: 30, height: 30 }} /> All Filters
      </Box>

        <Box ml={2} sx={{ width: "16%" }}>
          <FormControl style={{ maxHeight: 40 }} fullWidth>
            <InputLabel id="demo-simple-select-label">Stops</InputLabel>
            <Select
              value={stops || stopsTable[0]}
              label="Stops"
              onChange={handleChangeStops}
              style={{ maxHeight: 40 }}
            >
              {stopsTable.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box ml={2} sx={{ width: "16%" }}>
        <FormControl style={{ maxHeight: 40 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Bags</InputLabel>
          <Select
            value={stops || stopsTable[0]}
            label="Bags"
            disabled
            onChange={handleChangeStops}
            style={{ maxHeight: 40 }}
          >
            {stopsTable.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box ml={2} sx={{ width: "16%" }}>
        <FormControl style={{ maxHeight: 40 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Bags</InputLabel>
          <Select
            value={stops || stopsTable[0]}
            label="Bags"
            disabled
            onChange={handleChangeStops}
            style={{ maxHeight: 40 }}
          >
            {stopsTable.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box ml={2} sx={{ width: "16%" }}>
        <FormControl style={{ maxHeight: 40 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Bags</InputLabel>
          <Select
            value={stops || stopsTable[0]}
            label="Bags"
            disabled
            onChange={handleChangeStops}
            style={{ maxHeight: 40 }}
          >
            {stopsTable.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box ml={2} sx={{ width: "16%" }}>
        <FormControl style={{ maxHeight: 40 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Bags</InputLabel>
          <Select
            value={stops || stopsTable[0]}
            label="Bags"
            disabled
            onChange={handleChangeStops}
            style={{ maxHeight: 40 }}
          >
            {stopsTable.map((item) => (
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

export default Filters;
