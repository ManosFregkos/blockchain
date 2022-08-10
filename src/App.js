import { Box } from "@mui/material";
import "./App.css";
import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import UpperHeader from "./components/UpperHeader";
import DownHeader from "./components/DownHeader";
import Filters from "./components/Filters";
import Divider from "./components/Divider";
import SentTransactions from "./components/SentTransactions";
import ReceivedTransactions from "./components/ReceivedTransactions";
import ShareLinksDialog from "./components/ShareLinksDialog";

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

function App() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className="App">
        <Box maxWidth={1200} style={{ margin: "0 auto" }}>
          <UpperHeader />
          <DownHeader />
          <Filters />
          <Divider />
          <SentTransactions
            open={openDialog}
            setOpenDialog={setOpenDialog}
            data={sentTransactionsData}
          />
        </Box>
        <Box maxWidth={1200} style={{ margin: "0 auto" }}>
          <ReceivedTransactions
            data={receivedTransactionsData}
            open={openDialog}
            setOpenDialog={setOpenDialog}
          />
        </Box>
        <ShareLinksDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
        />
      </Box>
    </LocalizationProvider>
  );
}

export default App;
