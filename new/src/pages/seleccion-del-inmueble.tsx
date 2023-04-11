import NavBarSeleccionInmueble from "../components/navBars/navBar-SeleccionInmueble";
import { Card, CardContent, Divider, Box, Checkbox, FormControlLabel } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import BlueprintThumbnail from "../components/Dialogs/dialog-blueprint-bythumb";
import Chips from "../components/GridItems/Chips/Chips";
import ChipsLessAvailable from "../components/GridItems/Chips/Chips-less-available";
import ChipsOnlyAvailable from "../components/GridItems/Chips/Chips-only-available";
import ChipsLessReserved from "../components/GridItems/Chips/Chips-less-reserved";
import ChipsLessSelled from "../components/GridItems/Chips/Chips-less-selled";
import ChipsOnlyReserved from "../components/GridItems/Chips/Chips-only-reserved";
import ChipsOnlySelled from "../components/GridItems/Chips/Chips-only-selled";
import ChipsEmptyState from "../components/GridItems/Chips/Chips-empty-state";

export default function SeleccionDelInmueble() {

    const [checked1, setChecked1] = React.useState(true);

    const handleCheck1 = () => {
        setChecked1(!checked1); 
    };

    const [checked2, setChecked2] = React.useState(true);

    const handleCheck2 = () => {
        setChecked2(!checked2); 
    };

    const [checked3, setChecked3] = React.useState(true);

    const handleCheck3 = () => {
        setChecked3(!checked3); 
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (<>
        <NavBarSeleccionInmueble />
        <Box sx={{ display: "flex", float: "left" }}>
            <Box sx={{ width: "292px", height: "557px", backgroundColor: "#f5f5f5" }}>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "Center", alignItems: "flex-start" }}>
                    <Tabs value={value} onChange={handleChange} sx={{ p: "24px 0", width: "291px" }} orientation="vertical">
                        <Tab sx={{ ml: "8px" }} title="Apartamento tipo 1 46,86 m2 en Área construida de 90 m2 por 120 m2 saliendo de Bogotá " label="Apartamento tipo 1 46.86 m2 Área..."></Tab>
                        <Tab sx={{ ml: "8px" }} title="Apartamento tipo 1 46,86 m2 en Área construida de 90 m2 por 120 m2 saliendo de Bogotá " label="Apartamento tipo 1 46.86 m2 Área..."></Tab>
                        <Tab sx={{ ml: "8px" }} title="Apartamento tipo 1 46,86 m2 en Área construida de 90 m2 por 120 m2 saliendo de Bogotá " label="Apartamento tipo 1 46.86 m2 Área..."></Tab>
                        <Tab sx={{ ml: "8px" }} title="Apartamento tipo 1 46,86 m2 en Área construida de 90 m2 por 120 m2 saliendo de Bogotá " label="Apartamento tipo 1 46.86 m2 Área..."></Tab>
                        <Tab sx={{ ml: "8px" }} title="Apartamento tipo 1 46,86 m2 en Área construida de 90 m2 por 120 m2 saliendo de Bogotá " label="Apartamento tipo 1 46.86 m2 Área..."></Tab>
                        <Tab sx={{ ml: "8px" }} title="Apartamento tipo 1 46,86 m2 en Área construida de 90 m2 por 120 m2 saliendo de Bogotá " label="Apartamento tipo 1 46.86 m2 Área..."></Tab>
                        <Tab sx={{ ml: "8px" }} title="Apartamento tipo 1 46,86 m2 en Área construida de 90 m2 por 120 m2 saliendo de Bogotá " label="Apartamento tipo 1 46.86 m2 Área..."></Tab>
                        <Tab sx={{ ml: "8px" }} title="Apartamento tipo 1 46,86 m2 en Área construida de 90 m2 por 120 m2 saliendo de Bogotá " label="Apartamento tipo 1 46.86 m2 Área..."></Tab>
                    </Tabs>
                    <Divider orientation="vertical" flexItem />
                </Box>
            </Box>
        </Box>
        {/* Scroll */}
        <Box sx={{ display: "flex", flexWrap: "wrap", float: "right", height: "557px", width: "912px", overflowY: "scroll" }}>
            <Card sx={{ width: "876px", height: "146px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#fff", mt: "12px", mx: "auto" }}>
                <CardContent sx={{ display: "flex", gap: "4px", justifyContent: "space-between", alignItems: "center", flexDirection: "row", width: "844px", height: "90px" }}>
                    <Box sx={{ width: "364px", height: "72px", display: "flex", flexDirection: "column", gap:"4px" }}>
                        <Typography variant="subtitle1" color="text.primary">Chicala E1 - Apartamento tipo único 52mts - Área privada</Typography>
                        <Typography variant="subtitle2" color="primary">Características</Typography>
                        <Typography variant="subtitle2" color="text.secondary">Área construida 45,42mts m2 aprox Área Privada 39.80 aprox</Typography>
                    </Box>
                    <Box sx={{ px: "14.5px" }}>
                        <BlueprintThumbnail />
                    </Box>
                </CardContent>
            </Card>
            <Box sx={{ mx: "auto", width: "876px", height: "64px", display: "flex", justifyContent: "flex-end", p: "16px 0 16px 16px", gap: "4px" }}>
                <FormControlLabel onChange={handleCheck1} control={<Checkbox defaultChecked />} label="Disponible" />
                <FormControlLabel onChange={handleCheck2} control={<Checkbox defaultChecked />} label="Reservado" />
                <FormControlLabel onChange={handleCheck3} control={<Checkbox defaultChecked />} label="Vendido" />
            </Box>
           
            {checked1 && checked2 && checked3 && <Chips></Chips>}
            {!checked1 && checked2 && checked3 && <ChipsLessAvailable></ChipsLessAvailable>}
            {checked1 && !checked2 && checked3 && <ChipsLessReserved></ChipsLessReserved>}
            {checked1 && checked2 && !checked3 && <ChipsLessSelled></ChipsLessSelled>}
            {checked1 && !checked2 && !checked3 && <ChipsOnlyAvailable></ChipsOnlyAvailable>}
            {!checked1 && checked2 && !checked3 && <ChipsOnlyReserved></ChipsOnlyReserved>}
            {!checked1 && !checked2 && checked3 && <ChipsOnlySelled></ChipsOnlySelled>}
            {!checked1 && !checked2 && !checked3 && <ChipsEmptyState></ChipsEmptyState>}
                

        </Box>
    </>)
}