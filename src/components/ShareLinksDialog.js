import { Box, Dialog, IconButton, Stack } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function ShareLinksDialog({setOpenDialog,openDialog}) {
  return (
    <Dialog title="Share Links" maxWidth={"xs"} open={openDialog} fullWidth>
      <Box style={{ position: "absolute", top: "5px", right: "10px" }}>
        <IconButton onClick={() => setOpenDialog(false)}>
          <CloseIcon style={{ width: 30, height: 30 }} />
        </IconButton>
      </Box>
      <Stack p={3}>
        <Box mb={2} gap={2} alignItems={"center"} display={"flex"}>
          <ContentCopyIcon /> Copy
        </Box>
        <Box mb={2} gap={2} alignItems={"center"} display={"flex"}>
          <LocalPrintshopIcon style={{fill:"gray"}}/> Print
        </Box>
        <Box mb={2} gap={2} alignItems={"center"} display={"flex"}>
          <FacebookIcon style={{fill:"blue"}}/> Facebook
        </Box>
        <Box gap={2} alignItems={"center"} display={"flex"}>
          <InstagramIcon style={{fill:"red"}}/> Instagram
        </Box>
      </Stack>
    </Dialog>
  );
}

export default ShareLinksDialog;
