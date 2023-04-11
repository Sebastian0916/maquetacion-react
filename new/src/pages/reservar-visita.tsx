import { Alert, Box, Button, Card, CardContent, CardMedia, Chip, Divider, Typography } from "@mui/material";
import NavBarReservarVisita from "../components/navBars/navBar-Reservar-visita";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import * as React from 'react';
import dayjs from 'dayjs';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import DialogBlueprint from "../components/Dialogs/dialog-blueprint-byIconButton";
import Image13Med from "../assets/image13-md.png"
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";

export default function ReservarVisita() {

    const { enqueueSnackbar } = useSnackbar();

    const notistackReservedSave = () => {
        enqueueSnackbar("La reserva ha sido programada con éxito", {
            variant: "success",
            anchorOrigin: {
                vertical: "top",
                horizontal: "right",
            },
        });
    };

    return (<>
        <NavBarReservarVisita />
        <Box sx={{ width: "1204px", height: "553px", overflowY: "scroll", display: "flex", flexWrap: "wrap", gap: "8px", py: "8px" }}>
            <Box sx={{ display: "flex", gap: "8px", mx: "auto" }}>
                <Card sx={{ width: "763px", height: "579px", mx: "auto" }}>
                    <CardContent>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <Typography variant="h6" color="primary">Información del visitante</Typography>
                            <Typography variant="h6" color="text.primary">Viviana Contreras Torres</Typography>
                            <Typography color="text.primary" sx={{ display: "flex", gap: "4px" }}><EmailOutlinedIcon fontSize="small" color="inherit" /><Typography variant="body1" color="text.secondary"> viviana.contreras@sinco.com.co</Typography></Typography>
                            <Typography color="text.primary" sx={{ display: "flex", gap: "4px" }}><PhoneEnabledOutlinedIcon fontSize="small" color="inherit" /><Typography variant="body1" color="text.secondary"> 321 456 7897</Typography></Typography>
                            <Box sx={{ width: "502px" }}>
                                <Alert severity="info">El inmueble estara reservado únicamente por el rango de fecha resaltado</Alert>
                            </Box>
                        </Box>
                        <Box sx={{ height: "320px", overflow: "hidden" }}>
                            <StaticDatePicker defaultValue={dayjs('2023-12-11')} sx={{ width: "320px", height: "390px", mt: "-70px" }} />
                        </Box>
                        <Box sx={{ mt: "8px" }}>
                            <Link style={{ textDecoration: 'none' }} to="/ProyectoEnVenta">
                                <Button variant="contained" onClick={()=>notistackReservedSave()}>
                                    Reservar
                                </Button>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to="/">
                                <Button variant="text">
                                    Cancelar Reserva
                                </Button>
                            </Link>
                        </Box>
                    </CardContent>
                </Card>
                <Card sx={{ width: "415px", height: "391px", mx: "auto", backgroundColor: "#fff", display: "flex", flexDirection: "column", alignItems: "flex-start", float: "right" }}>
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
                        <Box sx={{ width: "383px", height: "61px", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", borderRadius: "6px" }}>
                            <Box sx={{ width: "383px", display: "flex", justifyContent: "space-between" }}>
                                <Chip size="small" label="APT 203 - TORRE 1" />
                                <Typography variant="body1" color="text.primary">$1.000.000.00</Typography>
                            </Box>
                            <Box sx={{ width: "383px", display: "flex", justifyContent: "space-between" }}>
                                <Chip size="small" label="GARAJE 302" />
                                <Typography variant="body1" color="text.primary">$5.000.000.00</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </>)
}