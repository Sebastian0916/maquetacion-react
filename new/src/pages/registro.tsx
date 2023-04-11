import NavBarRegistro from "../components/navBars/navBar-Registro";
import Fondo from "../assets/Fondo.png"
import { Autocomplete, Box, Button, Card, CardContent, CardMedia, Checkbox, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import * as React from 'react';
import {Link} from "react-router-dom";
import { useSnackbar } from "notistack";

const options = ['Cédula de ciudadanía'];
const options1 = ['Seleccione una opción'];
const options2 = ['Seleccione una opción'];

export default function Registro() {

    const { enqueueSnackbar } = useSnackbar();

    const notistackRegisterSave = () => {
        enqueueSnackbar("El visitante se ha guardado con éxito", {
            variant: "success",
            anchorOrigin: {
                vertical: "top",
                horizontal: "right",
            },
        });
    };

    const [value, setValue] = React.useState<string | null>(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    const [value1, setValue1] = React.useState<string | null>(options1[0]);
    const [inputValue1, setInputValue1] = React.useState('');

    const [value2, setValue2] = React.useState<string | null>(options2[0]);
    const [inputValue2, setInputValue2] = React.useState('');

    return (<>
        <NavBarRegistro />
        <Box sx={{ width: "1156px", height: "84px", mx: "auto", position: "relative", zIndex: "-1" }}>
            <CardMedia component="img" image={Fondo} />
        </Box>
        <Card sx={{ width: "1020px", height: "332px", mt: "-80px", mx: "auto" }}>
            <CardContent sx={{ display: "flex", gap: "4px", flexDirection: "column" }}>
                <Typography variant="h6" color="primary">Datos personales</Typography>
                <Box sx={{ width: "988px", display: "flex", gap: "4px", alignItems: "center", height: "32px" }}>
                    <TextField
                        required
                        id="Primer Nombre"
                        label="Primer Nombre"
                        sx={{ width: "244px" }}
                    />
                    <TextField
                        required
                        id="Segundo Nombre"
                        label="Segundo Nombre"
                        sx={{ width: "244px" }}
                    />
                    <TextField
                        required
                        id="Primer Apellido"
                        label="Primer Apellido"
                        sx={{ width: "244px" }}
                    />
                    <TextField
                        required
                        id="Segundo Apellido"
                        label="Segundo Apellido"
                        sx={{ width: "244px" }}
                    />
                </Box>
                <Box sx={{ width: "988px", display: "flex", gap: "4px", alignItems: "center", height: "32px" }}>
                    <TextField
                        required
                        id="Correo Eléctronico"
                        label="Correo Eléctronico"
                        sx={{ width: "244px" }}
                    />

                    <Autocomplete sx={{ width: "244px" }}
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

                        renderInput={(params) => <TextField {...params} label="Tipo de documento" />}
                    />

                    <TextField
                        required
                        id="Número de identificación"
                        label="Número de identificación"
                        sx={{ width: "244px" }}
                    />

                    <Autocomplete sx={{ width: "244px" }}
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

                        renderInput={(params) => <TextField {...params} label="País de residencia" />}
                    />
                </Box>
                <Box sx={{ width: "988px", display: "flex", gap: "4px", alignItems: "center", height: "32px" }}>
                    <Autocomplete sx={{ width: "244px" }}
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

                        renderInput={(params) => <TextField {...params} label="Ciudad de residencia" />}
                    />
                    <Autocomplete
                        size="small"
                        disablePortal
                        id="combo-box-demo"
                        options={mediopublicitario}
                        sx={{ width: "244px" }}
                        renderInput={(params) => (
                            <TextField {...params} label="Medio Publicitario" />
                        )}
                    />
                    <TextField
                        id="Teléfono"
                        label="Teléfono"
                        sx={{ width: "244px" }}
                    />
                    <Box sx={{ width: "244px", height: "36px" }}>
                        <Box sx={{ height: "20px", lineHeight:"0" }}>
                            <FormLabel
                                sx={{ "&.MuiFormLabel-root": { fontSize: "12px!important" } }}
                                required
                                id="demo-radio-buttons-group-label">
                                Genero
                            </FormLabel>
                        </Box>
                        <RadioGroup

                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Masculino"
                            name="radio-buttons-group"
                            sx={{ width: "244px", "&.MuiRadioGroup-root": { height: "20px" } }}
                        >
                            <Box sx={{ height: "20px", mt:"-8px" }}>
                                <FormControlLabel sx={{ height: "20px" }} value="Masculino" control={<Radio size="small" />} label="Masculino" />
                                <FormControlLabel sx={{ height: "20px" }} value="Femenino" control={<Radio size="small" />} label="Femenino" />
                            </Box>
                        </RadioGroup>
                    </Box>
                </Box>
                <Link to=""><FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Autorizo la política de datos personales" /></Link>
                <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Autorizo envíos de SMS" />
                <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Autorizo envíos de correos" />
                <Link style={{ textDecoration: 'none' }} to="/CotizacionVolante">
                    <Button variant="contained" onClick={()=>notistackRegisterSave()}>
                        Guardar visitante
                    </Button>
                </Link>
            </CardContent>
        </Card>
    </>)
}

const mediopublicitario = [
    { label: "Redes" },
    { label: "Anuncio" },
    { label: "Por un conocido" },
    ,
];