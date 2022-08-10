import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import InsightsTwoToneIcon from "@mui/icons-material/InsightsTwoTone";

function Divider() {
  return (
    <Fragment>
      <Typography mb={1} textAlign={"right"}>
        Grahp Transactions
      </Typography>
      <Typography
        style={{ borderTop: "2px solid gray" }}
        align="left"
        variant="h6"
      >
        <Typography textAlign={"right"}>
          <Stack
            mt={1}
            columnGap={2}
            direction={"row"}
            justifyContent="end"
            alignItems={"center"}
          >
            <InsightsTwoToneIcon width={20} height={20} />{" "}
            <Box>Price Graph</Box>
          </Stack>
        </Typography>
      </Typography>
      <br />
    </Fragment>
  );
}

export default Divider;
