import NavBarCotizacionVolante from "../components/navBars/navBar-Cotizacion-volante";
import { Box, Button, Card, CardContent, CardMedia, Chip, Divider, FormControl, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import Blueprint from "../assets/image13-thumb.png";
import TextImage from "../assets/text.png"
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
export default function VolanteCotizacion() {
    return (<>
        <NavBarCotizacionVolante />
        <Box sx={{ width: "1204px", height: "553px", overflowY: "scroll", display: "flex", flexWrap: "wrap", gap: "4px" }}>

            <Box sx={{ width: "1204px", height: "30px", display: "flex", justifyContent: "flex-end", p: "16px", gap: "8px" }}>
                <Button startIcon={<FileDownloadOutlinedIcon />} size="small" variant="text">
                    Descargar plantilla</Button>
                <Button startIcon={<LocalPrintshopOutlinedIcon />} size="small" variant="text">
                    Imprimir Formulario</Button>
                <Button size="small" variant="contained">
                    Enviar cotización</Button>
            </Box>

            <Card sx={{ width: "1166px", height: "147px", mx: "auto" }}>

                <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ width: "210px", height: "115px" }}>
                        <CardMedia component="img" image={TextImage} />
                        <Box sx={{ widht: "210px", height: "36px", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                            <Box sx={{ display: "flex", gap: "8px" }}>
                                <Typography color="text.primary" variant="subtitle2">
                                    Fecha
                                </Typography>
                                <Typography variant="body2">
                                    01/01/2023
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", gap: "8px" }}>
                                <Typography color="text.primary" variant="subtitle2">
                                    No. Cotización
                                </Typography>
                                <Typography variant="body2">
                                    10002
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <Box sx={{ display: "flex", gap: "4px", flexDirection: "column" }}>
                            <Typography variant="subtitle2" color="text.primary">Chicala E1 - Apartamento tipo único 52mts - Área privada</Typography>
                            <Typography variant="body2" color="text.secondary">Área construida 45,42 m2 aprox Área Privada 39.80 aprox</Typography>
                        </Box >
                        <CardMedia component="img" image={Blueprint} sx={{ width: "101px", height: "90px" }} />
                    </Box>
                </CardContent>

            </Card>

            <Card sx={{ width: "1166px", height: "124px", mx: "auto" }}>
                <CardContent sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <Typography variant="h6" color="primary">Información personal del visitante</Typography>
                        <Box sx={{ width: "554.5px", display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Nombre completo:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                Viviana Contreras Torres
                            </Typography>

                        </Box>

                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Correo eléctronico:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                viviana.contreras@sinco.com.co
                            </Typography>

                        </Box>

                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Medio por el cual conoció el proyecto:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                Redes
                            </Typography>

                        </Box>
                    </Box>
                    <Divider orientation="vertical" sx={{ height: "62px" }}></Divider>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Cédula de ciudadanía:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                1.014.295.896
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Teléfono:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                3213534141
                            </Typography>
                        </Box>
                    </Box>

                </CardContent>
            </Card>

            <Card sx={{ width: "1166px", height: "190px", mx: "auto" }}>
                <CardContent sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <Typography variant="h6" color="primary">Información personal del visitante</Typography>
                        <Box sx={{ width: "554.5px", display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Inmueble:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                CAS-CSPU-2016-02
                            </Typography>

                        </Box>

                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Área (m2) construida:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                0.00
                            </Typography>

                        </Box>

                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Valor m2:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                0.00
                            </Typography>

                        </Box>
                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Descuento comercial:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                0.00
                            </Typography>

                        </Box>
                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Valor descuento:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                0.00
                            </Typography>

                        </Box>
                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Valor descuento financiero:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                0.00
                            </Typography>

                        </Box>
                    </Box>
                    <Divider orientation="vertical" sx={{ height: "128px" }}></Divider>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Torre:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                0.2
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Área (m2) privada:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                0.00
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Valor agrupación
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                $93,076,425
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Valor reformas:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                $0
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Valor sobrecosto:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                $0
                            </Typography>
                        </Box>
                    </Box>

                </CardContent>
            </Card>

            <Card sx={{ width: "1166px", height: "282px", mx: "auto" }}>
                <CardContent sx={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center", flexWrap:"wrap" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <Typography variant="h6" color="primary">Forma de pago</Typography>
                        <Box sx={{ width: "554.5px", display: "flex", gap: "8px" }}>
                            <Typography sx={{ width: "274.75px" }} variant="subtitle2" color="text.primary">
                                Cuota inicial(30%)
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                $17,922,927.5
                            </Typography>

                        </Box>
                        <Box sx={{ ml: "20px" }}>
                            <Box sx={{ display: "flex", gap: "8px" }}>
                                <Typography sx={{ width: "254.75px" }} variant="subtitle2" color="text.secondary">
                                    Separación:
                                </Typography>

                                <Typography variant="body2" color="text.primary">
                                    $500,000
                                </Typography>

                            </Box>

                            <Box sx={{ display: "flex", gap: "8px" }}>
                                <Typography sx={{ width: "254.75px" }} variant="subtitle2" color="text.secondary">
                                    Confirmación:
                                </Typography>

                                <Typography variant="body2" color="text.primary">
                                    $0
                                </Typography>

                            </Box>
                            <Box sx={{ display: "flex", gap: "8px" }}>
                                <Typography sx={{ width: "254.75px" }} variant="subtitle2" color="text.secondary">
                                    Subsidio(s):
                                </Typography>

                                <Typography variant="body2" color="text.primary">
                                    $0
                                </Typography>

                            </Box>
                            <Box sx={{ display: "flex", gap: "8px" }}>
                                <Typography sx={{ width: "254.75px" }} variant="subtitle2" color="text.secondary">
                                    Cesantías:
                                </Typography>

                                <Typography variant="body2" color="text.primary">
                                    $0
                                </Typography>

                            </Box>
                            <Box sx={{ display: "flex", gap: "8px" }}>
                                <Typography sx={{ width: "254.75px" }} variant="subtitle2" color="text.secondary">
                                    Ahorro:
                                </Typography>

                                <Typography variant="body2" color="text.primary">
                                    $0
                                </Typography>

                            </Box>
                            <Box sx={{ display: "flex", gap: "8px" }}>
                                <Typography sx={{ width: "254.75px" }} variant="subtitle2" color="text.secondary">
                                    Total:
                                </Typography>

                                <Typography variant="body2" color="text.primary">
                                    $500,000
                                </Typography>

                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography sx={{ width: "274.75px" }} variant="subtitle2" color="text.primary">
                                Ingresos:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                $0
                            </Typography>

                        </Box>
                        <Typography variant="h6" color="primary">Valor Total: $115,068,100</Typography>
                    </Box>
                    <Divider orientation="vertical" sx={{ height: "144px" }}></Divider>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography sx={{ width: "465.5px" }} variant="subtitle2" color="text.primary">
                                Crédito:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                $65,153,497.5
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography sx={{ width: "465.5px" }} variant="subtitle2" color="text.secondary">
                                Cuota crédito aprox.
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                $65,153,497.5
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography sx={{ width: "465.5px" }} variant="subtitle2" color="text.secondary">
                                Cuotas financiación
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                18
                            </Typography>
                        </Box>
                        <FormControl sx={{ width: "549.5px" }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Valor aproximado de cuota de administración</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Valor aproximado de cuota de administración"
                                defaultValue={"0"}
                            />
                        </FormControl>
                        <FormControl sx={{ width: "549.5px" }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Valor aproximado gastos de escrituración</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Valor aproximado gastos de escrituración"
                                defaultValue={"0"}
                            />
                        </FormControl>
                    </Box>
                    <Box sx={{display:"flex"}}>
                        <Box sx={{width:"556px"}}>
                            <Typography variant="subtitle2" color="text.primary">Elaborado por: ADRIANA CAROLINA BERMUDEZ</Typography>
                            <Box sx={{display:"flex", alignItems:"center", gap:"4px"}}><Typography color="text.secondary"><PhoneEnabledIcon fontSize="small" color="inherit"/></Typography><Typography variant="body2" color="text.secondary">428 0660</Typography></Box>
                        </Box>

                        <Box>
                            <Typography variant="subtitle2" color="text.primary">Firma autorización de datos:</Typography>
                            <Typography variant="body2" color="text.primary">Viviana Contreras Torres</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

        </Box>
    </>)
}