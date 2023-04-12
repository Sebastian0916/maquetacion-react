import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Addons from "./Pages/Addons";

function App() {
  return (<>
  {/*Box only for good visualization*/}
    <Box sx={{ m: "20px" }}>
      {/* Available workspace = 1224x578 */}
      <Box sx={{ width: "1224px", height: "578", border:"1px solid #cccccc" }}>
        <Routes>
          <Route path="/" element={<Addons />} />
        </Routes>
      </Box>
    </Box>
  </>);
}

export default App;
