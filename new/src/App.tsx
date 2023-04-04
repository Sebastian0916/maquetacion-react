import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProyectoVentas from "./aplicacion/componentes/ProyectoVentas/ProyectoVentas";
import "./App.css";
import PlanoGeneral from "./aplicacion/componentes/PlanoGeneral/PlanoGeneral";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<ProyectoVentas />} />
          <Route path="planoGeneral" element={<PlanoGeneral />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
