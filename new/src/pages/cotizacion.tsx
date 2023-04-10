import NavBarCotizacion from "../components/navBars/navBar-Cotizacion";
import { Box, Card, CardHeader, CardContent, CardMedia, Button, Typography, Divider, Autocomplete, TextField, Chip, IconButton, InputLabel, OutlinedInput, InputAdornment, FormControl, FormControlLabel, Checkbox } from "@mui/material"
import DialogBlueprint from "../components/Dialogs/dialog-blueprint-byIconButton";
import Image13Med from "../assets/image13-md.png"
import * as React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DialogChipByIconButton from "../components/Dialogs/dialog-chips-byIconButton";
import DialogPersonalDataByIconButton from "../components/Dialogs/dialog-personalData-byButton";
import { Link } from "react-router-dom";

const options = ['Seleccione una opción'];
const options1 = ['Seleccione una opción'];
const options2 = ['Comercial - $5,000,000'];
const options3 = ['Compensar'];
const options4 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];

export default function Cotizacion() {
    const [value, setValue] = React.useState<string | null>(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    const [value1, setValue1] = React.useState<string | null>(options1[0]);
    const [inputValue1, setInputValue1] = React.useState('');

    const [value2, setValue2] = React.useState<string | null>(options2[0]);
    const [inputValue2, setInputValue2] = React.useState('');

    const [value3, setValue3] = React.useState<string | null>(options3[0]);
    const [inputValue3, setInputValue3] = React.useState('');

    const [value4, setValue4] = React.useState<string | null>(options4[14]);
    const [inputValue4, setInputValue4] = React.useState('');

    const handleDelete = () => {};
    return (<>
        <NavBarCotizacion />
        <Box sx={{ height: "553px", overflowY: "scroll", width: "1204px", display: "flex", gap: "8px", justifyContent: "center", mt: "4px" }}>
            <Box sx={{ width: "739px", height: "639px", display: "flex", gap: "8px", flexDirection: "column", alignItems: "flex-start", float: "left" }}>
                <Card sx={{ height: "122px", width: "739px", backgroundColor: "#fff" }}>
                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
                        {/* Inmuebles */}
                        <Typography variant="h6" color="primary">Inmuebles adicionales</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            {/* Input */}
                            <Box sx={{ display: "flex", width: "739px", gap: "4px" }}>
                                <Autocomplete sx={{ width: "349.5px" }}
                                    size="small"
                                    value={value}
                                    onChange={(event: any, newValue: string | null) => {
                                        setValue(newValue);
                                    }}
                                    inputValue={inputValue}
                                    onInputChange={(event, newInputValue) => {
                                        setInputValue(newInputValue);
                                    }}
                                    id="controllable-states-demo"
                                    options={options}

                                    renderInput={(params) => <TextField {...params} label="Tipo de unidad" />}
                                />
                                <Autocomplete sx={{ width: "349.5px" }}
                                    size="small"
                                    value={value1}
                                    onChange={(event: any, newValue: string | null) => {
                                        setValue1(newValue);
                                    }}
                                    inputValue={inputValue1}
                                    onInputChange={(event, newInputValue1) => {
                                        setInputValue1(newInputValue1);
                                    }}
                                    id="controllable-states-demo"
                                    options={options1}

                                    renderInput={(params) => <TextField {...params} label="Unidad" />}
                                />
                            </Box>
                            {/* Chip */}
                            <Box sx={{ display: "flex", width: "739px", gap: "4px" }}>
                                <Chip size="small" label="APT 203 - TORRE 1..." title="APT 203 - Torre 1 - Unidad 6" onDelete={handleDelete} />
                                <Chip size="small" label="APT 203 - TORRE 1..." title="APT 203 - Torre 1 - Unidad 6" onDelete={handleDelete} />
                                <Chip size="small" label="APT 203 - TORRE 1..." title="APT 203 - Torre 1 - Unidad 6" onDelete={handleDelete} />
                                <Chip size="small" label="APT 203 - TORRE 1..." title="APT 203 - Torre 1 - Unidad 6" onDelete={handleDelete} />
                                <DialogChipByIconButton></DialogChipByIconButton>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
                <Card sx={{ height: "104px", width: "739px", backgroundColor: "#fff" }}>
                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
                        {/* Descuentos */}
                        <Typography variant="h6" color="primary">Descuentos</Typography>
                        {/* Input */}
                        <Box sx={{ width: "707px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "4px" }}>
                            <Autocomplete sx={{ width: "230px" }}
                                size="small"
                                value={value2}
                                onChange={(event: any, newValue: string | null) => {
                                    setValue2(newValue);
                                }}
                                inputValue={inputValue2}
                                onInputChange={(event, newInputValue) => {
                                    setInputValue2(newInputValue);
                                }}
                                id="controllable-states-demo"
                                options={options2}

                                renderInput={(params) => <TextField {...params} label="Agregar Descuento" />}
                            />
                            <Box sx={{ width: "155px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Typography variant="body1" color="text.primary">
                                    Total reformas
                                </Typography>
                                <Typography variant="h6" color="primary">
                                    $0
                                </Typography>
                            </Box>
                            <Divider orientation="vertical" flexItem />
                            <Box sx={{ width: "155px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Typography variant="body1" color="text.primary">
                                    Total descuentos
                                </Typography>
                                <Typography variant="h6" color="primary">
                                    $5,000,000
                                </Typography>
                            </Box>
                            <Divider orientation="vertical" flexItem />
                            <Box sx={{ width: "155px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Typography variant="body1" color="text.primary">
                                    Total cotización
                                </Typography>
                                <Typography variant="h6" color="primary">
                                    $164,000,000
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
                <Card sx={{ height: "363px", width: "739px", backgroundColor: "#fff"}}>
                    <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px", width: "707px", height: "328px" }}>
                        {/* Forma de pago */}
                        <Typography variant="h6" color="primary">Forma de pago</Typography>
                        <Box sx={{ width: "707px", height: "180px", display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"8px" }}>
                            <Box sx={{display:"flex", flexDirection:"row", gap:"8px"}}>
                                <FormControl sx={{width:"233px"}}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Ingreso familiar</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        label="Ingreso familiar"
                                        defaultValue={"0"}
                                    />   
                                </FormControl>
                                <FormControl sx={{width:"233px"}} disabled >
                                    <InputLabel htmlFor="outlined-adornment-amount">Valor separación</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        label="Valor separación"
                                        defaultValue={"0"}
                                    />
                                </FormControl>
                                <Box sx={{width:"233px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                                <Typography variant="body1" color="text.primary">Total cuota inicial (30%)</Typography>
                                <Typography variant="h6" color="primary">$49,314,335</Typography>
                                </Box>
                            </Box>
                            <Box sx={{display:"flex", flexDirection:"row", gap:"8px"}}>
                                <FormControl sx={{width:"233px"}} >
                                    <InputLabel htmlFor="outlined-adornment-amount">Valor cesantías</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        label="Valor cesantías"
                                        defaultValue={"0"}
                                    />   
                                </FormControl>
                                <FormControl sx={{width:"233px"}} >
                                    <InputLabel htmlFor="outlined-adornment-amount">Ahorros</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        label="Ahorros"
                                        defaultValue={"0"}
                                    />
                                </FormControl>
                                <FormControl sx={{width:"233px"}} >
                                    <InputLabel htmlFor="outlined-adornment-amount">Valor subsidio apróximado</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        label="Valor subsidio apróximado"
                                        defaultValue={"0"}
                                    />
                                </FormControl>
                            </Box>
                            <Box sx={{display:"flex", flexDirection:"row", gap:"8px"}}>
                                <FormControl sx={{width:"233px"}} >
                                    <InputLabel htmlFor="outlined-adornment-amount">Subsidios concurrente</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        label="Subsidios concurrente"
                                        defaultValue={"0"}
                                    />   
                                </FormControl>
                                <FormControl sx={{width:"233px"}} >
                                    <InputLabel htmlFor="outlined-adornment-amount">Confirmación</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        label="Confirmación"
                                        defaultValue={"0"}
                                    />
                                </FormControl>
                                <Box sx={{width:"233px", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"flex-start", gap:"12px"}}>
                                <FormControlLabel control={<Checkbox />} label="Pago de contado" />
                                </Box>
                            </Box>
                            <Box sx={{ width: "707px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "4px" }}>
                            <Box sx={{ width: "233px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Typography variant="body1" color="text.primary">
                                    Total reformas
                                </Typography>
                                <Typography variant="h6" color="primary">
                                    $0
                                </Typography>
                            </Box>
                            <Divider orientation="vertical" flexItem />
                            <Box sx={{ width: "233px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Typography variant="body1" color="text.primary">
                                    Total descuentos
                                </Typography>
                                <Typography variant="h6" color="primary">
                                    $5,000,000
                                </Typography>
                            </Box>
                            <Divider orientation="vertical" flexItem />
                            <FormControl sx={{width:"233px"}} >
                                    <InputLabel htmlFor="outlined-adornment-amount">Número de cuotas</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        label="Número de cuotas"
                                        defaultValue={"36"}
                                    />
                            </FormControl>
                            </Box>
                        </Box>
                        {/* Total */}
                        <Typography variant="h6" color="primary">Total</Typography>
                        <Box sx={{ display: "flex", width: "739px", gap: "4px" }}>
                                <Autocomplete sx={{ width: "233px" }}
                                    size="small"
                                    value={value3}
                                    onChange={(event: any, newValue: string | null) => {
                                        setValue3(newValue);
                                    }}
                                    inputValue={inputValue3}
                                    onInputChange={(event, newInputValue) => {
                                        setInputValue3(newInputValue);
                                    }}
                                    id="controllable-states-demo"
                                    options={options3}

                                    renderInput={(params) => <TextField {...params} label="Entidad financiera" />}
                                />
                                <FormControl sx={{width:"233px"}} >
                                    <InputLabel htmlFor="outlined-adornment-amount">Porcentaje financiación</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        label="Porcentaje financiación"
                                        defaultValue={"36"}
                                    />
                            </FormControl>
                                <Autocomplete sx={{ width: "233px" }}
                                    size="small"
                                    value={value4}
                                    onChange={(event: any, newValue: string | null) => {
                                        setValue4(newValue);
                                    }}
                                    inputValue={inputValue4}
                                    onInputChange={(event, newInputValue4) => {
                                        setInputValue4(newInputValue4);
                                    }}
                                    id="controllable-states-demo"
                                    options={options4}

                                    renderInput={(params) => <TextField {...params} label="Plazo en años" />}
                                />
                            </Box>
                            <Divider sx={{width:"707px"}}></Divider>
                            <Box sx={{ width: "707px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "4px" }}>
                            <Box sx={{ width: "233px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Typography variant="body1" color="text.primary">
                                    Valor financiación
                                </Typography>
                                <Typography variant="h6" color="primary">
                                    $115,068,100
                                </Typography>
                            </Box>
                            <Box sx={{ width: "233px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Typography variant="body1" color="text.primary">
                                    Valor aprox. cuota financiación
                                </Typography>
                                <Typography variant="h6" color="primary">
                                    $1,102,641.74
                                </Typography>
                            </Box>
                            <Box sx={{height:"45.19px", width: "233px", display: "flex", flexDirection: "initial", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <Typography variant="body1" color="text.primary">
                                    Tasa(E.A)
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                    0%
                                </Typography>
                            </Box>
                            </Box>
                    </CardContent>
                </Card>
                <Box sx={{display:"flex", gap:"4px"}}>
                <DialogPersonalDataByIconButton/>
                <Link style={{textDecoration: 'none'}} to="/CotizacionVPN">
                    <Button variant="contained">Cotización por VPN*</Button>
                </Link>
                </Box>
            </Box>
            <Card sx={{ width: "415px", height: "404px", backgroundColor: "#fff", display: "flex", flexDirection: "column", alignItems: "flex-start", float: "right" }}>
                {/* <CardHeader> */}
                {/* CardHeader is not displaying content at this commit */}
                <Box sx={{ width: "383px", height: "24px", p: "16px", display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography variant="subtitle1" color="text.primary">
                        Chicala E1 - Apartamento tipo B - Área de 45 mts2
                    </Typography>
                    <DialogBlueprint />
                </Box>
                {/* </CardHeader> */}
                <CardContent sx={{ width: "383px", height: "348px", display: "flex", gap: "4px", flexDirection: "column" }}>
                    <Typography variant="subtitle2" color="primary">Características</Typography>
                    <Typography variant="body2" color="text.secondary">Área construida de 45,42 m + 3 baños  + 5 habitaciones en exclusiva zona privada de la ciudad.</Typography>
                    <Box sx={{ width: "197.51px", mx: "auto" }}>
                        <CardMedia
                            component="img"
                            image={Image13Med}
                        ></CardMedia>
                    </Box>
                    <Divider />
                    <Box sx={{ width: "383px", height: "61px", display: "flex", flexDirection: "row", gap: "4px", borderRadius: "6px" }}>
                        <Box sx={{ display: "flex", flexDirection: "Column", alignItems: "center", justifyContent: "center", gap: "4px", width: "125px", height: "61px", backgroundColor: "#C3E68F", borderRadius: "8px" }}>
                            <Typography variant="caption" color="text.primary">Disponibles</Typography>
                            <Typography variant="subtitle2" color="text.primary">80</Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "Column", alignItems: "center", justifyContent: "center", gap: "4px", width: "125px", height: "61px", backgroundColor: "#FFA2A2", borderRadius: "8px" }}>
                            <Typography variant="caption" color="text.primary">Vendidos</Typography>
                            <Typography variant="subtitle2" color="text.primary">64</Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "Column", alignItems: "center", justifyContent: "center", gap: "4px", width: "125px", height: "61px", backgroundColor: "#C0E2EE", borderRadius: "8px" }}>
                            <Typography variant="caption" color="text.primary">Reservadas</Typography>
                            <Typography variant="subtitle2" color="text.primary">0</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    </>)
}