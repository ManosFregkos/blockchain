import { Box, CssBaseline, styled } from "@mui/material";
import "./App.css";
import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import UpperHeader from "./components/UpperHeader";
import DownHeader from "./components/DownHeader";
import Filters from "./components/Filters";
import Divider from "@mui/material/Divider";
import SentTransactions from "./components/SentTransactions";
import ReceivedTransactions from "./components/ReceivedTransactions";
import ShareLinksDialog from "./components/ShareLinksDialog";
import AppDrawer from "./components/AppDrawer";

const sentTransactionsData = [
  {
    time: "Received on - Thu, Sept 8",
    cost: "$98",
  },
  {
    time: "Received on - Thu, Sept 8",
    cost: "$198",
  },
];

const receivedTransactionsData = [
  {
    time: "Sent on - Thu, Sept 8",
    cost: "$98",
  },
  {
    time: "Sent on - Thu, Sept 8",
    cost: "$198",
  },
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <UpperHeader />
          <DownHeader />
          <Filters />
          <Divider />
          <SentTransactions
            open={openDialog}
            setOpenDialog={setOpenDialog}
            data={sentTransactionsData}
          />
          <ReceivedTransactions
            data={receivedTransactionsData}
            open={openDialog}
            setOpenDialog={setOpenDialog}
          />
          <ShareLinksDialog
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
          />
        </Box>
      </Box>
    </LocalizationProvider>
  );
}

export default App;
