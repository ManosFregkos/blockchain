import { InputAdornment, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { DesktopDatePicker } from "@mui/x-date-pickers";
import PlaceIcon from "@mui/icons-material/Place";
import FmdBadIcon from "@mui/icons-material/FmdBad";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

function DownHeader() {
    const [dateStart, setDateStart] = useState(new Date());
    const [dateEnd, setDateEnd] = useState(new Date());
    const handleChangeDateStart = (newValue) => {
        setDateStart(newValue);
      };
      const handleChangeDateEnd = (newValue) => {
        setDateEnd(newValue);
      };
  return (
    <Stack mb={4} columnGap={2} direction={"row"}>
    <Stack columnGap={1} direction={"row"} alignItems={"center"}>
      <TextField
        style={{ width: 300 }}
        id="outlined-basic"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FmdBadIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <SwapHorizIcon style={{ width: 30, height: 30 }} />
      <TextField
        style={{ width: 300 }}
        id="outlined-basic"
        disabled
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PlaceIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Stack>
    <Stack direction={"row"} columnGap={2}>
      <DesktopDatePicker
        label="Start Date"
        inputFormat="MM/dd/yyyy"
        value={dateStart}
        onChange={handleChangeDateStart}
        renderInput={(params) => <TextField {...params} />}
      />
      <DesktopDatePicker
        label="End Date"
        inputFormat="MM/dd/yyyy"
        value={dateEnd}
        onChange={handleChangeDateEnd}
        renderInput={(params) => <TextField {...params} />}
      />
    </Stack>
  </Stack>
  )
}

export default DownHeader