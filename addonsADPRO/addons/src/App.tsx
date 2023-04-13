import { Box, Typography, Button, Menu, MenuItem } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Addons from "./Pages/Addons";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react"

function App() {
  const [openMainMenu, setOpenMainMenu] = React.useState<any | null>(null)
  return (<>
    {/*Header*/}
    <Box
      sx={{
        width: "1176px",
        height: "48px",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "10px 24px 8px"
      }}
      boxShadow={1}
    >
      {/* HeaderContent */}
      <Box sx={{
        width: "1176px",
        height: "48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Typography variant="h6" color="text.primary">Addons</Typography>
        <Button
          endIcon={<ExpandMoreIcon />}
          aria-haspopup="true"
            aria-controls="open-main-menu"
            onClick={e => setOpenMainMenu(e.currentTarget)}
        >
          <Typography
            variant="body2"
            color="text.primary">
            CONALTURA S.A.S
          </Typography>
        </Button>
        <Menu
            id="open-menu"
            open={Boolean(openMainMenu)}
            anchorEl={openMainMenu}
            onClose={() => setOpenMainMenu(null)}
            disableAutoFocus
        >
            <MenuItem onClick={() => setOpenMainMenu(null)}><Typography>CONALTURA S.A.S 2  </Typography></MenuItem>
            <MenuItem onClick={() => setOpenMainMenu(null)}><Typography>CONALTURA S.A.S 2.0</Typography></MenuItem>
            <MenuItem onClick={() => setOpenMainMenu(null)}><Typography>CONALTURA S.A.S 2.1</Typography></MenuItem>
        </Menu>
      </Box>
    </Box>
    {/* Available workspace = 1224x578 */}
    <Box sx={{ width: "1224px", height: "578px" }}>
      <Routes>
        <Route path="/" element={<Addons />} />
      </Routes>
    </Box>
  </>);
}

export default App;
