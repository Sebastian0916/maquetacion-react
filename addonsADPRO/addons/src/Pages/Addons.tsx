import {Paper, Box, Card, CardContent, Radio, FormControl, FormControlLabel, InputLabel, Autocomplete, TextField, Divider, Checkbox, Badge, Typography, Button, MenuItem, IconButton } from "@mui/material";
import FiltrosVigentes from "../Addons-cards/filtros/todos";
import SearchIcon from '@mui/icons-material/Search';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ActivosVigentes from "../Addons-cards/filtros/activos";
import InactivosVigentes from "../Addons-cards/filtros/inactivos";
import DesactualizadosVigentes from "../Addons-cards/filtros/desactualizados";
import ErroresVigentes from "../Addons-cards/filtros/errores";
import FiltroObsoletos from "../Addons-cards/filtros/obsoletos";

export default function Addons() {

    const [selectedValue, setSelectedValue] = React.useState('vigentes');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    const [menuAdmin, setmenuAdmin] = React.useState('');

    const handleSelectChange = (event: SelectChangeEvent) => {
        setmenuAdmin(event.target.value as string);
    }

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

    const [checked4, setChecked4] = React.useState(true);

    const handleCheck4 = () => {
        setChecked4(!checked4);
    };


    return (<>
        <Box sx={{ width: "1224px", height: "561px", display: "flex", ml: "21px", mt: "17px" }}>
            <Box sx={{
                float: "left",
                width: "820px",
                height: "561px",
                overflowY: "scroll",
                display: "flex",
                gap: "8px"
            }}>
                <Box sx={{
                    width: "798px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px"
                }}>
                    {/* Filters is going to set up here */}

                    {/* Four checked */}
                    {selectedValue === 'vigentes' && checked1 && checked2 && checked3 && checked4 && <FiltrosVigentes />}
                    {/* Three checked */}
                    {selectedValue === 'vigentes' && !checked1 && checked2 && checked3 && checked4 && <><InactivosVigentes /><DesactualizadosVigentes /><ErroresVigentes /></>}
                    {selectedValue === 'vigentes' && checked1 && !checked2 && checked3 && checked4 && <><ActivosVigentes /><DesactualizadosVigentes /><ErroresVigentes /></>}
                    {selectedValue === 'vigentes' && checked1 && checked2 && !checked3 && checked4 && <><ActivosVigentes /><InactivosVigentes /><ErroresVigentes /></>}
                    {selectedValue === 'vigentes' && checked1 && checked2 && checked3 && !checked4 && <><ActivosVigentes /><InactivosVigentes /><DesactualizadosVigentes /></>}
                    {/* Two checked*/}
                    {selectedValue === 'vigentes' && !checked1 && !checked2 && checked3 && checked4 && <><DesactualizadosVigentes /><ErroresVigentes /></>}
                    {selectedValue === 'vigentes' && !checked1 && checked2 && !checked3 && checked4 && <><InactivosVigentes /><ErroresVigentes /></>}
                    {selectedValue === 'vigentes' && !checked1 && checked2 && checked3 && !checked4 && <><InactivosVigentes /><DesactualizadosVigentes /></>}
                    {selectedValue === 'vigentes' && checked1 && !checked2 && !checked3 && checked4 && <><ActivosVigentes /><ErroresVigentes /></>}
                    {selectedValue === 'vigentes' && checked1 && !checked2 && checked3 && !checked4 && <><ActivosVigentes /><DesactualizadosVigentes /></>}
                    {selectedValue === 'vigentes' && checked1 && checked2 && !checked3 && !checked4 && <><ActivosVigentes /><InactivosVigentes /></>}
                    {/* One checked */}
                    {selectedValue === 'vigentes' && checked1 && !checked2 && !checked3 && !checked4 && <ActivosVigentes />}
                    {selectedValue === 'vigentes' && !checked1 && checked2 && !checked3 && !checked4 && <InactivosVigentes />}
                    {selectedValue === 'vigentes' && !checked1 && !checked2 && checked3 && !checked4 && <DesactualizadosVigentes />}
                    {selectedValue === 'vigentes' && !checked1 && !checked2 && !checked3 && checked4 && <ErroresVigentes />}

                    {selectedValue === 'obsoletos' && <FiltroObsoletos />}


                </Box>
            </Box>
            <Box sx={{ width: "351px", display: "flex", flexDirection: "column", gap: "8px", ml: "12px" }}>
                <Card sx={{
                    float: "right",
                    width: "351px",
                }}>
                    <CardContent sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "8px"
                    }}>
                        <Autocomplete
                            popupIcon={<SearchIcon />}
                            sx={{
                                width: "100%",
                                "& .MuiAutocomplete-popupIndicator": { transform: "none" },
                            }}
                            disablePortal
                            PaperComponent={({ children }) => (
                                <Typography 
                                variant="body2"
                                color="text.primary"
                                title="135 Observaciones por insumo en el formato HTML">
                                    <Paper>{children}</Paper>
                                    </Typography>
                              )}
                            options={autocompleteMenu}
                            renderInput={(params) =>
                                <TextField {...params} label="Buscar Addon" />
                                 }
                        />
                        <Box>
                            <Box>
                                <FormControlLabel
                                    value="vigentes"
                                    control={<Radio
                                        checked={selectedValue === 'vigentes'}
                                        onChange={handleChange}
                                        value="vigentes"
                                        name="vigentes"
                                        inputProps={{ 'aria-label': 'Vigentes' }}
                                    />} label="Vigentes" />
                                <FormControlLabel
                                    value="obsoletos"
                                    control={<Radio
                                        checked={selectedValue === 'obsoletos'}
                                        onChange={handleChange}
                                        value="obsoletos"
                                        name="vigentes"
                                        inputProps={{ 'aria-label': 'Obsoletos' }}
                                    />} label="Obsoletos" />
                                <Divider />
                                {selectedValue === 'vigentes' &&
                                    <Box sx={{ width: "319px", height: "128px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", width: "82px", height: "32px" }}>
                                            <Checkbox onChange={handleCheck1} checked={checked1} />
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}><Badge color="success" badgeContent=" " variant="dot" sx={{ mr: "4px" }} /><Typography variant="body1" color="text.primary">Activo</Typography></Box>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", width: "82px", height: "32px" }}>
                                            <Checkbox onChange={handleCheck2} checked={checked2} />
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}><Badge color="error" badgeContent=" " variant="dot" sx={{ mr: "4px" }} /><Typography variant="body1" color="text.primary">Inactivo</Typography></Box>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", width: "82px", height: "32px" }}>
                                            <Checkbox onChange={handleCheck3} checked={checked3} />
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}><Badge badgeContent=" " variant="dot" sx={{ mr: "4px", ".MuiBadge-badge": { backgroundColor: "#FFD25E!important" } }} /><Typography variant="body1" color="text.primary">Desactualizado</Typography><IconButton sx={{ right: "8px" }} title="Se cataloga con desactualizados activados cuando antes la instalación del Addon no se apagó la versión anterior obsoleta"><InfoOutlinedIcon /></IconButton></Box>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", width: "82px", height: "32px" }}>
                                            <Checkbox onChange={handleCheck4} checked={checked4} />
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}><Badge badgeContent=" " variant="dot" sx={{ mr: "4px", ".MuiBadge-badge": { backgroundColor: "#B136B4!important" } }} /><Typography variant="body1" color="text.primary">Error</Typography></Box>
                                        </Box>
                                    </Box>}
                            </Box>
                        </Box>
                    </CardContent>
                </Card>

                <Card sx={{
                    float: "right",
                    width: "351px",
                    height: "65px",
                }}>
                    <CardContent sx={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
                        <Typography variant="body2" color="text.primary" sx={{ width: "180px" }}>La información filtrada podrás descargarla <Typography component="p" variant="subtitle2" color="inherit" sx={{ float: "right", mr: "22px", mt: "-1px" }}>Formato Excel</Typography></Typography>
                        <Button variant="outlined" color="primary" startIcon={<InsertDriveFileOutlinedIcon color="primary" />}> Descargar</Button>
                    </CardContent>
                </Card>

                <Card sx={{
                    float: "right",
                    width: "351px",
                    height: "106px",
                }}>
                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <Typography variant="subtitle2" color="text.primary">Adminitstración de Addon</Typography>
                        <Typography variant="body2" color="text.primary">Genera más información sobre tú addon</Typography>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Seleccione una opción</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={menuAdmin}
                                label="Seleccione una opción"
                                onChange={handleSelectChange}
                            >
                                <MenuItem value={1}>Supervisor</MenuItem>
                                <MenuItem value={2}>Migraciones</MenuItem>
                                <MenuItem value={3}>Menús en limbo</MenuItem>
                                <MenuItem value={4}>Personalización</MenuItem>
                            </Select>
                        </FormControl>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </>)
}

const autocompleteMenu = [
    { id: '1', label: '135 Observaciones por insumo en el formato...'},
    { id: '2', label: '135 Observaciones por insumo en el formato...'},
    { id: '3', label: '135 Observaciones por insumo en el formato...'},
    { id: '4', label: '135 Observaciones por insumo en el formato...'},
    { id: '5', label: '135 Observaciones por insumo en el formato...'},
    { id: '6', label: '135 Observaciones por insumo en el formato...'},
    { id: '7', label: '135 Observaciones por insumo en el formato...'},
    { id: '8', label: '135 Observaciones por insumo en el formato...'},
]