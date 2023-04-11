import Box from "@mui/material/Box/Box";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Registro from "./pages/registro";
import ProyectosEnVenta from "./pages/Proyectos-en-venta";
import ProyectoEnVenta from "./pages/proyecto-en-venta";
import ProyectoEnVentaMap from "./pages/proyecto-en-venta-map";
import SeleccionDelInmueble from "./pages/seleccion-del-inmueble";
import Cotizacion from "./pages/cotizacion";
import CotizacionExitosa from "./pages/cotizacion-envio-exitoso";
import CotizacionVPN from "./pages/cotizacion-vpn";
import VolanteCotizacion from "./pages/volante-cotizacion";
import VolanteCotizacionVPN from "./pages/volante-cotizacion-vpn";
import ReservarVisita from "./pages/reservar-visita";



function App() {

  return (
    // This box is only for dev purposes, it is removable in any moment
    <Box sx={{ width: "1204px", height: "623px", mx: "auto" }}>
      <Routes>
        <Route path="/" element={<ProyectosEnVenta />} />
        <Route path="/ProyectoEnVenta" element={<ProyectoEnVenta />} />
        <Route path="/ProyectoEnVentaMap" element={<ProyectoEnVentaMap />} />
        <Route path="/SeleccionDelInmueble" element={<SeleccionDelInmueble />} />
        <Route path="/Cotizacion" element={<Cotizacion />} />
        <Route path="/CotizacionExitosa" element={<CotizacionExitosa />} />
        <Route path="/CotizacionVolante" element={<VolanteCotizacion />} />
        <Route path="/CotizacionVolanteVPN" element={<VolanteCotizacionVPN />} />
        <Route path="/CotizacionVPN" element={<CotizacionVPN />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/ReservarVisita" element={<ReservarVisita />} />
      </Routes>
    </Box>
  );
}

export default App;
