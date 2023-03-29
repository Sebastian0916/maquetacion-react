import NavBarSeleccionInmueble from "../components/navBars/navBar-SeleccionInmueble";
import { Card, CardContent, Divider, Box } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import BlueprintThumbnail from "../components/Dialogs/dialog-blueprint-bythumb";
import Chips from "../components/GridItems/Chips";
import CheckFilters from "../components/Filters/CheckFilters";
export default function SeleccionDelInmueble() {

    // const InitialStateTodos = [
    //     {id:1 label:"APT 203 - TORRE 1 $000,000,000",color:success},
    //     {id:2 label:"APT 203 - TORRE 1 $000,000,000",color:success},
    //     {id:3 label:"APT 203 - TORRE 1 $000,000,000",color:success},
    //     {id:4 label:"APT 203 - TORRE 1 $000,000,000",color:info   },
    //     {id:5 label:"APT 203 - TORRE 1 $000,000,000",color:info   },
    //     {id:6 label:"APT 203 - TORRE 1 $000,000,000",color:info   },
    //     {id:7 label:"APT 203 - TORRE 1 $000,000,000",color:info   },
    //     {id:4 label:"APT 203 - TORRE 1 $000,000,000",color:error  },
    //     {id:5 label:"APT 203 - TORRE 1 $000,000,000",color:error  },
    //     {id:6 label:"APT 203 - TORRE 1 $000,000,000",color:error  },
    //     {id:7 label:"APT 203 - TORRE 1 $000,000,000",color:error  },
    //     {id:4 label:"APT 203 - TORRE 1 $000,000,000",color:success},
    //     {id:5 label:"APT 203 - TORRE 1 $000,000,000",color:success},
    //     {id:6 label:"APT 203 - TORRE 1 $000,000,000",color:success},
    //     {id:7 label:"APT 203 - TORRE 1 $000,000,000",color:success},
    //   ]

    // const [filter, setFilter] = React.useState("all");

    // const changeFilter = (filter) => setFilter(filter)

    // const filteredChips = ()=>{
    //   switch (filter){
    //     case "all":return chips;
    //   }
    // }

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
                    <Box sx={{ width: "364px", height: "72px", display: "flex", flexDirection: "column" }}>
                        <Typography variant="subtitle1" color="text.primary">Chicala E1 - Apartamento tipo único 52mts - Área privada</Typography>
                        <Typography variant="subtitle2" color="primary">Características</Typography>
                        <Typography variant="subtitle2" color="text.secondary">Área construida 45,42mts m2 aprox Área Privada 39.80 aprox</Typography>
                    </Box>
                    <Box sx={{ px: "14.5px" }}>
                        <BlueprintThumbnail></BlueprintThumbnail>
                    </Box>
                </CardContent>
            </Card>
            <Box sx={{ mx: "auto", width: "876px", height: "64px", display: "flex", justifyContent: "flex-end", p: "16px 0 16px 16px", gap: "4px" }}>
                <CheckFilters />
                {/* changeFilter={changeFilter} filter={filter} */}
            </Box>
            <Box sx={{ mx: "auto", width: "876px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <Chips/>
                {/* chips={filteredChips()} */}
            </Box>
        </Box>
    </>)
}