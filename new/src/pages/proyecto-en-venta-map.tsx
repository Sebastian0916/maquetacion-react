import { Autocomplete, Box, Button, Menu, MenuItem, CardMedia, Fab, Grid, InputAdornment, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import NavBarProyecto from "../components/navBar-Proyecto";
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import SearchIcon from '@mui/icons-material/Search';
import SplitButton from "../components/Button-group";
import GridItemCardChicala from "../components/gridItemChicala";
import GridItemCardChicalaNoSubText from "../components/gridItemChicalaNoSubText";
import { Link } from "react-router-dom";
import image11 from "../../src/assets/image11.jpg"
import { useState } from "react";
import * as React from 'react';

export default function ProyectoEnVentaMap() {

    const [openMenu, setOpenMenu] = useState(false)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

            <Grid item sm={6} sx={{ display: "flex", float: "left" }}>
                <Box sx={{ width: "563px", height: "450px" }}>
                    <CardMedia
                        component="img"
                        image={image11}
                        alt="Apartamentos Chicala"
                    ></CardMedia>
                    <Radio sx={{ top: "-412.12px", color: "#fff", '&.Mui-checked': { color: "#fff" }, left: "42.12px" }} onMouseEnter={() => setOpenMenu(true)}></Radio>
                    {openMenu && <Box>
                        <Button
                            size="large"
                            variant="text"
                            sx={{ top: "-442.12px", left: "70.12px", backgroundColor:"#fff",
                            boxShadow: "0px 1px 3px rgba(24, 39, 75, 0.12), 0px 1px 1px -1px rgba(24, 39, 75, 0.14), 0px 2px 1px -2px rgba(24, 39, 75, 0.2)",}}
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}       
                        >
                        <Typography variant="subtitle2" color="text.primary">
                            Chicala 1
                        </Typography>    
                        </Button>
                        <Menu
                            sx={{".MuiMenu-list":{width:"367px"}}}
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                            <Typography  variant="subtitle2" color="text.primary">
                            Chicala 1
                            </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                            <Typography variant="subtitle2" color="text.primary">
                            Chicala 2
                            </Typography>    
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                            <Typography variant="subtitle2" color="text.primary">
                            Chicala 3
                            </Typography>    
                            </MenuItem>
                        </Menu>
                    </Box>}
                    <Radio sx={{ top: "-322.12px", color: "#fff", '&.Mui-checked': { color: "#fff" }, left: "220.12px" }}></Radio>
                    <Radio sx={{ top: "-245.12px", color: "#fff", '&.Mui-checked': { color: "#fff" }, left: "332.12px" }}></Radio>
                </Box>
            </Grid>
            <Grid item sm={6} sx={{ display: "flex", float: "right", mx: "auto" }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>

                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-end", p: "0", gap: "8px", mx: "auto", width: "588px" }}>

                        <GridItemCardChicala />

                        <GridItemCardChicalaNoSubText />

                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-end", p: "0", gap: "8px", mx: "auto", width: "588px" }}>

                        <GridItemCardChicalaNoSubText />

                        <GridItemCardChicala />

                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-end", p: "0", gap: "8px", mx: "auto", width: "588px" }}>

                        <GridItemCardChicala />

                        <GridItemCardChicalaNoSubText />

                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-end", p: "0", gap: "8px", mx: "auto", width: "588px" }}>

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