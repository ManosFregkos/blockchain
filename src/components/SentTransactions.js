import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Stack,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import image from "../../src/images/etherium.jpg";
import logo from "../../src/images/log.png";
import ShareIcon from "@mui/icons-material/Share";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import WarningIcon from "@mui/icons-material/Warning";

const StyleDot = styled("div")(() => ({
  width: 1,
  height: 1,
  border: "3px solid black",
  borderRadius: "50%",
  marginBottom: 10,
  marginTop: 10,
}));

const SmallTypography = styled(Typography)(() => ({
  fontSize: "12px",
  textAlign: "left",
  color: "lightgrey",
}));

function SentTransactions({ data, setOpenDialog }) {
  const OpenShareDialog = (e) => {
    e.stopPropagation();
    setOpenDialog(true);
  };
  return (
    <Fragment>
      <Typography textAlign={"left"}>Sent Transactions</Typography>
      <SmallTypography mb={2}>
        Rank based on price and convenience
      </SmallTypography>
      {data.map((item, idx) => (
        <Accordion
          style={{
            maxWidth:1200,
            border: "1px solid black",
            marginBottom: 8,
          }}
          key={idx}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Stack
              direction={"row"}
              flex={1}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction={"row"} alignItems={"center"}>
                <Box mr={3}>
                  <img src={image} width="20px" height="20px" alt="logo" />
                </Box>
                <Box>
                  <span>{item.time}</span>
                  <SmallTypography>{item.company}</SmallTypography>
                </Box>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <Box mr={3}>
                  <img src={logo} width="120px" height="30px" alt="logo" />
                </Box>
                <Box>{item.stop}</Box>
                <Box mr={3}>
                  <IconButton onClick={OpenShareDialog}>
                    <ShareIcon />
                  </IconButton>
                </Box>
                <Box width={50} mr={3}>
                  <Tooltip
                    title="Amounts are show in USD at the time of the transaction"
                    placement="top"
                  >
                    <Typography color={"red"}>{item.cost}</Typography>
                  </Tooltip>
                </Box>
              </Stack>
            </Stack>
          </AccordionSummary>
          <AccordionDetails style={{ borderTop: "2px solid black" }}>
            <Stack textAlign={"left"} direction="row" alignItems={"center"}>
              <Box>
                <GpsFixedIcon style={{ width: 30, height: 30 }} />
                <Box textAlign={"center"} ml={1.4}>
                  {/* <StyleDot>.</StyleDot> */}
                  <StyleDot>.</StyleDot>
                  <StyleDot></StyleDot>
                </Box>
                <PersonPinCircleIcon
                  style={{ width: 30, height: 30, fill: "red" }}
                />
              </Box>
              <Box ml={3}>
                <Typography mb={2}>To you : 0xB…ee5…80f</Typography>
                <Box display={"flex"} alignItems={"center"}>
                  <WarningIcon
                    style={{
                      width: 30,
                      height: 30,
                      marginRight: 15,
                      fill: "red",
                    }}
                  />
                  Transaction failed at: 8:19 AM
                </Box>
                <Typography mt={2}>From: 0xB…b95…3f37</Typography>
              </Box>
            </Stack>
            <Typography textAlign={"start"} mt={2} ml={6.5}>Transaction fees $1.23</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Fragment>
  );
}

export default SentTransactions;
