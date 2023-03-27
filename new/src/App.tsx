import Box from "@mui/material/Box/Box";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProyectosEnVenta from "./pages/Proyectos-en-venta";
import ProyectoEnVenta from "./pages/proyecto-en-venta";



function App() {

  return (
    // This box is only for dev purposes, it is removable in any moment
      <Box sx={{ width: "1204px", mx:"auto" }}>
        <Routes>
          <Route path="/" element={<ProyectosEnVenta />} />
          <Route path="/ProyectoEnVenta" element={<ProyectoEnVenta />} />
        </Routes>
      </Box>
  );
}

export default App;
