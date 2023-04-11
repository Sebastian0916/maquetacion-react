import { Autocomplete, Box, CardMedia, Fab, Grid, InputAdornment, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import NavBarProyecto from "../components/navBars/navBar-Proyecto";
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import SearchIcon from '@mui/icons-material/Search';
import SplitButton from "../components/Buttons/Button-group";
import GridItemCardChicala from "../components/GridItems/gridItemChicala";
import GridItemCardChicalaNoSubText from "../components/GridItems/gridItemChicalaNoSubText";
import { Link } from "react-router-dom";
import image11 from "../../src/assets/image11.jpg"
import * as React from 'react';
import RelativeMenuMap1 from "../components/Relative/relative-menu-map1";
import RelativeMenuMap2 from "../components/Relative/relative-menu-map2";
import RelativeMenuMap3 from "../components/Relative/relative-menu-map3";

export default function ProyectoEnVentaMap() {

    return (<>
        <NavBarProyecto />
        <Box sx={{ backgroundColor: "#F5F5F5", width: "1204px", height: "70px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "1172px", height: "54px", p: "16px" }}>
                <Link style={{ textDecoration: 'none' }} to="/ProyectoEnVenta">
                    <Fab color="secondary" variant="extended" size="small" aria-label="add" sx={{ display: "flex", gap: "10px", justifyContent: "center", alignItems: "center" }}>
                        <ViewInArIcon sx={{ width: "16px", height: "16px" }} />
                        <Typography variant="subtitle2"> Cerrar Plano</Typography>
                    </Fab>
                </Link>
                <Stack sx={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: "4px" }}>

                    <Autocomplete
                        size="small"
                        disablePortal
                        id="combo-box-demo"
                        options={pisos}
                        sx={{ width: "220px" }}
                        renderInput={(params) => (
                            <TextField {...params} label="Nomenclatura"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end" sx={{ mr: "-31px" }}>
                                            <SearchIcon fontSize="small" />
                                        </InputAdornment>
                                    )
                                }} />

                        )}
                    />
                    <Autocomplete
                        size="small"
                        disablePortal
                        id="combo-box-demo"
                        options={pisos}
                        sx={{ width: "83px" }}
                        renderInput={(params) => (
                            <TextField {...params} label="Piso" />
                        )}
                    />
                    <SplitButton></SplitButton>
                </Stack>
            </Box>
        </Box>
        <Grid>

            <Grid item sm={6} sx={{ display: "flex", float: "left", ml:"16px", mt:"8px" }}>
                <Box sx={{ width: "563px", height: "459px"}}>
                    <CardMedia
                        component="img"
                        image={image11}
                        alt="Apartamentos Chicala"
                    ></CardMedia>
                    {/* <Box sx={{ width: "563px", height: "459px", position: "relative" }}>
                        <RelativeMenuMap1 />
                        <RelativeMenuMap2 />
                        <RelativeMenuMap3 />
                    </Box> */}
                </Box>
            </Grid>
            <Grid item sm={6} sx={{overflowY:"scroll", width:"588px", height:"487px", display: "flex", float: "right", mr:"16px"}}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>

                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-end", p: "0", gap: "8px", mx: "auto", width: "578px" }}>

                        <GridItemCardChicala />

                        <GridItemCardChicalaNoSubText />

                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-end", p: "0", gap: "8px", mx: "auto", width: "578px" }}>

                        <GridItemCardChicalaNoSubText />

                        <GridItemCardChicala />

                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-end", p: "0", gap: "8px", mx: "auto", width: "578px" }}>

                        <GridItemCardChicala />

                        <GridItemCardChicalaNoSubText />

                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-end", p: "0", gap: "8px", mx: "auto", width: "578px" }}>

                        <GridItemCardChicalaNoSubText />

                        <GridItemCardChicala />

                    </Box>

                </Box>
            </Grid>

        </Grid>
    </>)
}

const pisos = [
    { label: "Piso 1" },
    { label: "Piso 2" },
    { label: "Piso 3" },
    { label: "Piso 4" },
    { label: "Piso 5" },
    { label: "Piso 6" },
    { label: "Piso 7" },
    { label: "Piso 8" },
    { label: "Piso 9" },
    { label: "Piso 10" },
    { label: "Piso 11" },
    { label: "Piso 12" },
    { label: "Piso 13" },
    { label: "Piso 14" },
    { label: "Piso 15" },
    { label: "Piso 16" },
    { label: "Piso 17" },
    { label: "Piso 18" },
    { label: "Piso 19" },
    { label: "Piso 20" },
    ,
];