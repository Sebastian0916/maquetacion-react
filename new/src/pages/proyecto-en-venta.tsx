import { Autocomplete, Box, Fab, Grid, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import NavBarProyecto from "../components/navBar-Proyecto";
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import SearchIcon from '@mui/icons-material/Search';
import SplitButton from "../components/Button-group";
import GridItemCardChicala from "../components/gridItemChicala";

export default function ProyectoEnVenta() {
    return (<>
        <NavBarProyecto />
        <Box sx={{ backgroundColor: "#F5F5F5", width: "1204px", height: "70px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "1172px", height: "54px", p: "16px" }}>
                <Fab color="secondary" variant="extended" size="small" aria-label="add" sx={{ display: "flex", gap: "10px", justifyContent: "center", alignItems: "center" }}>
                    <ViewInArIcon sx={{ width: "16px", height: "16px" }} />
                    <Typography variant="subtitle2"> Ver Plano</Typography>
                </Fab>
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

            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", p: "0", gap: "8px", mx: "auto", width: "1166px" }}>

                <GridItemCardChicala/>

            </Box>

        </Grid>
    </>)
}

const pisos = [
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    { label: "Piso 1" },
    ,
];