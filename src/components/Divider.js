import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import InsightsTwoToneIcon from "@mui/icons-material/InsightsTwoTone";

function Divider() {
  return (
    <Fragment>
      <Typography
        style={{ borderTop: "2px solid gray" }}
        align="left"
        variant="h6"
      >
        <Stack direction={"row"} columnGap={2} alignItems={"center"} justifyContent={"end"}>
          <Typography textAlign={"right"}>Grahp Transactions</Typography>
          <Typography textAlign={"right"}>
            <Stack
              columnGap={2}
              direction={"row"}
              justifyContent="end"
              alignItems={"center"}
            >
              <InsightsTwoToneIcon width={20} height={20} />{" "}
              <Box>Price Graph</Box>
            </Stack>
          </Typography>
        </Stack>
      </Typography>
      <br />
    </Fragment>
  );
}

export default Divider;
