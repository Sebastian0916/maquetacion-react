import NavBarCotizacionVolante from "../components/navBars/navBar-Cotizacion-volante";
import { Alert, Box, Button, Card, CardContent, CardHeader, CardMedia, Chip, Divider, FormControl, InputAdornment, InputLabel, OutlinedInput, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import Blueprint from "../assets/image13-md.png";
import TextImage from "../assets/text.png"
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { Link } from "react-router-dom";
export default function VolanteCotizacionVPN() {
    return (<>
        <NavBarCotizacionVolante />
        <Box sx={{ width: "1204px", height: "553px", overflowY: "scroll", display: "flex", flexWrap: "wrap", gap: "8px", pb: "8px" }}>

            <Box sx={{ width: "1204px", height: "30px", display: "flex", justifyContent: "flex-end", p: "16px", gap: "8px" }}>
                <Button startIcon={<FileDownloadOutlinedIcon />} size="small" variant="text">
                    Descargar plantilla</Button>
                <Button startIcon={<LocalPrintshopOutlinedIcon />} size="small" variant="text">
                    Imprimir Formulario</Button>
                <Link style={{ textDecoration: 'none' }} to="/CotizacionExitosa">
                    <Button size="small" variant="contained">
                        Enviar cotización</Button>
                </Link>
            </Box>

            <Card sx={{ width: "1166px", height: "107px", mx: "auto" }}>

                <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ width: "210px", height: "77px" }}>
                        <CardMedia component="img" image={TextImage} />

                    </Box>
                    <Box sx={{ display: "flex", gap: "8px" }}>
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
                </CardContent>

            </Card>

            <Box sx={{ width: "1166px", mx: "auto" }}>

                <Card sx={{ width: "741px", height: "228px", mx: "auto", float: "left" }}>
                    <CardContent sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            <Typography variant="h6" color="primary" sx={{ pb: "4px" }}>Información personal del visitante</Typography>
                            <Box sx={{ display: "flex", gap: "8px" }}>
                                <Typography variant="subtitle2" color="text.primary">
                                    Nombre completo:
                                </Typography>

                                <Typography variant="body2" color="text.primary">
                                    Viviana Contreras Torres
                                </Typography>

                            </Box>

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
                                    Correo eléctronico:
                                </Typography>

                                <Typography variant="body2" color="text.primary">
                                    viviana.contreras@sinco.com.co
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

                            <Box sx={{ display: "flex", gap: "8px" }}>
                                <Typography variant="subtitle2" color="text.primary">
                                    Medio por el cual conoció el proyecto:
                                </Typography>

                                <Typography variant="body2" color="text.primary">
                                    Redes
                                </Typography>

                            </Box>

                        </Box>
                    </CardContent>
                </Card>

                <Card sx={{ width: "414px", height: "228px", mx: "auto", float: "right" }}>
                    <CardContent>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <Box sx={{ display: "flex", gap: "4px", flexDirection: "column" }}>
                                <Typography variant="subtitle2" color="text.primary">Chicala E1 - Apartamento tipo único 52mts - Área privada</Typography>
                                <Typography variant="body2" color="text.secondary">Área construida 45,42 m2 aprox Área Privada 39.80 aprox</Typography>
                            </Box >
                            <CardMedia component="img" image={Blueprint} sx={{ width: "168.02px", height: "150px" }} />
                        </Box>
                    </CardContent>
                </Card>

            </Box>

            <Card sx={{ width: "1166px", height: "190px", mx: "auto" }}>
                <CardContent sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <Typography variant="h6" color="primary">Información del inmueble</Typography>
                        <Box sx={{ width: "741px", display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Inmueble:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                CAS-CSPU-2016-02
                            </Typography>

                        </Box>

                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Torre:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                02
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
                                Valor descuento financiero:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                $0
                            </Typography>

                        </Box>

                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Valor descuento:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                $0
                            </Typography>

                        </Box>

                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography variant="subtitle2" color="text.primary">
                                Descuento comercial:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                $0
                            </Typography>

                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>

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
                                Área (m2) privada:
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

            <Card sx={{ width: "1166px", height: "890px", mx: "auto" }}>
                <CardContent sx={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <Typography variant="h6" color="primary">Forma de pago</Typography>
                        <Table sx={{ width: "701px", height: "456px" }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>

                                    <TableCell>Concepto</TableCell>

                                    <TableCell>Fecha</TableCell>

                                    <TableCell>Valor</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1</TableCell>

                                    <TableCell>Separación</TableCell>

                                    <TableCell>01/01/2023</TableCell>

                                    <TableCell>1,000,000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>

                                    <TableCell>Separación</TableCell>

                                    <TableCell>01/01/2023</TableCell>

                                    <TableCell>1,000,000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>

                                    <TableCell>Separación</TableCell>

                                    <TableCell>01/01/2023</TableCell>

                                    <TableCell>1,000,000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>

                                    <TableCell>Separación</TableCell>

                                    <TableCell>01/01/2023</TableCell>

                                    <TableCell>1,000,000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>

                                    <TableCell>Separación</TableCell>

                                    <TableCell>01/01/2023</TableCell>

                                    <TableCell>1,000,000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>

                                    <TableCell>Separación</TableCell>

                                    <TableCell>01/01/2023</TableCell>

                                    <TableCell>1,000,000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>

                                    <TableCell>Separación</TableCell>

                                    <TableCell>01/01/2023</TableCell>

                                    <TableCell>1,000,000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>

                                    <TableCell>Separación</TableCell>

                                    <TableCell>01/01/2023</TableCell>

                                    <TableCell>1,000,000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>

                                    <TableCell>Separación</TableCell>

                                    <TableCell>01/01/2023</TableCell>

                                    <TableCell>1,000,000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>

                                    <TableCell>Separación</TableCell>

                                    <TableCell>01/01/2023</TableCell>

                                    <TableCell>1,000,000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>

                                    <TableCell>Separación</TableCell>

                                    <TableCell>01/01/2023</TableCell>

                                    <TableCell>1,000,000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>

                                    <TableCell>Separación</TableCell>

                                    <TableCell>01/01/2023</TableCell>

                                    <TableCell>1,000,000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>

                                    <TableCell>Separación</TableCell>

                                    <TableCell>01/01/2023</TableCell>

                                    <TableCell>1,000,000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>

                                    <TableCell>Separación</TableCell>

                                    <TableCell>01/01/2023</TableCell>

                                    <TableCell>1,000,000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>

                                    <TableCell>Separación</TableCell>

                                    <TableCell>01/01/2023</TableCell>

                                    <TableCell>1,000,000</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <Box sx={{ width: "701px", height: "240px", display: "flex", flexDirection: "column", gap: "12px", p: "16px", border: "1px solid #E0E0E0", borderRadius: "4px" }}>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ width: "609px" }} variant="subtitle2" color="text.primary">
                                    Cuota inicial(30%)
                                </Typography>

                                <Typography sx={{width:"83.73px", textAlign:"end"}} variant="body2" color="text.primary">
                                    $27,922,927.5
                                </Typography>

                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ width: "609px" }} variant="subtitle2" color="text.primary">
                                    Crédito:
                                </Typography>

                                <Typography sx={{width:"83.73px", textAlign:"end"}} variant="body2" color="text.primary">
                                    $65,153,497.5
                                </Typography>

                            </Box>
                            <Box>
                                <Box sx={{ ml: "20px" }}>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography sx={{ width: "589px" }} variant="subtitle2" color="text.secondary">
                                            Cuota crédito aprox:
                                        </Typography>

                                        <Typography sx={{width:"83.73px", textAlign:"end"}} variant="body2" color="text.primary">
                                            $65,153,497.5
                                        </Typography>

                                    </Box>

                                    <Box sx={{ display: "flex" }}>
                                        <Typography sx={{ width: "589px" }} variant="subtitle2" color="text.secondary">
                                            Cuotas financiación:
                                        </Typography>

                                        <Typography sx={{width:"83.73px", textAlign:"end"}} variant="body2" color="text.primary">
                                            18
                                        </Typography>

                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", py:"8px" }}>
                                    <Typography sx={{ width: "609px" }} variant="subtitle2" color="text.primary">
                                        Aportes:
                                    </Typography>

                                    <Typography sx={{width:"83.73px", textAlign:"end"}} variant="body2" color="text.primary">
                                        $65,153,497.5
                                    </Typography>

                                </Box>
                                <Box sx={{ ml: "20px" }}>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography sx={{ width: "589px" }} variant="subtitle2" color="text.secondary">
                                            Separacion:
                                        </Typography>

                                        <Typography sx={{width:"83.73px", textAlign:"end"}} variant="body2" color="text.primary">
                                            $500,000
                                        </Typography>

                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography sx={{ width: "589px" }} variant="subtitle2" color="text.secondary">
                                            Confirmación:
                                        </Typography>

                                        <Typography sx={{width:"83.73px", textAlign:"end"}} variant="body2" color="text.primary">
                                            $0
                                        </Typography>

                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography sx={{ width: "589px" }} variant="subtitle2" color="text.secondary">
                                            Subsidio(s):
                                        </Typography>

                                        <Typography sx={{width:"83.73px", textAlign:"end"}} variant="body2" color="text.primary">
                                            $0
                                        </Typography>

                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography sx={{ width: "589px" }} variant="subtitle2" color="text.secondary">
                                            Cesantías:
                                        </Typography>

                                        <Typography sx={{width:"83.73px", textAlign:"end"}} variant="body2" color="text.primary">
                                            $0
                                        </Typography>

                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography sx={{ width: "589px" }} variant="subtitle2" color="text.secondary">
                                            Ahorro:
                                        </Typography>

                                        <Typography sx={{width:"83.73px", textAlign:"end"}} variant="body2" color="text.primary">
                                            $0
                                        </Typography>

                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography sx={{ width: "589px" }} variant="subtitle2" color="text.secondary">
                                            Total:
                                        </Typography>

                                        <Typography sx={{width:"83.73px", textAlign:"end"}} variant="body2" color="text.primary">
                                            $500,000
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box>
                            <Alert icon={false} severity="info">
                                <Box sx={{display:"flex"}}>
                                    <Typography sx={{width:"599px"}} variant="h6" color="primary">Valor Total:</Typography>
                                    <Typography variant="h6" color="primary">$115,068,100</Typography>
                                </Box>
                            </Alert>
                        </Box>

                    </Box>

                    <Box sx={{ width: "387px", height: "773px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Typography sx={{ width: "185.5px" }} variant="subtitle2" color="text.primary">
                                Ingresos:
                            </Typography>

                            <Typography variant="body2" color="text.primary">
                                $0
                            </Typography>
                        </Box>

                        <FormControl sx={{ width: "371px" }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Valor aproximado de cuota de administración</InputLabel>
                            <OutlinedInput
                                readOnly
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Valor aproximado de cuota de administración"
                                defaultValue={"0"}
                            />
                        </FormControl>
                        <FormControl sx={{ width: "371px" }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Valor aproximado gastos de escrituración</InputLabel>
                            <OutlinedInput
                                readOnly
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Valor aproximado gastos de escrituración"
                                defaultValue={"0"}
                            />
                        </FormControl>
                        <Box sx={{ width: "371px" }}>
                            <Typography variant="subtitle2" color="text.primary">Elaborado por: ADRIANA CAROLINA BERMUDEZ</Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                <Typography color="text.secondary">
                                    <PhoneEnabledIcon fontSize="small" color="inherit" />
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    428 0660
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" color="text.primary">Firma de autorización de datos:</Typography>
                            <Typography variant="body2" color="text.primary">Viviana Contreras Torres</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            <Card sx={{ width: "1166px", height: "130px", mx: "auto" }}>
                <Typography variant="h6" color="primary" sx={{ p: "8px 16px 0 16px" }}>Observaciones</Typography>
                <CardContent>
                    <Typography variant="body2" color="text.primary">Lorem ipsum dolor sit amet consectetur. Dui amet ultricies diam phasellus hendrerit neque etiam sit magna. Mi id integer scelerisque pellentesque ac sed enim enim senectus. Nibh tellus dolor pretium in rhoncus. Nulla potenti ornare dolor cursus cras ac. Consequat amet tellus sollicitudin sed eget sit feugiat rhoncus pellentesque. Lectus pretium in erat tempus at gravida pharetra aenean. Consectetur magna aliquet est quis amet lacus fermentum. Sed massa ornare fermentum tempor. Non faucibus elementum senectus lacus rhoncus pharetra aenean diam. Et quam consequat neque nulla. Gravida vel vel tellus varius netus in. Neque pulvinar cras nisl quam non.</Typography>
                </CardContent>
            </Card>

        </Box>
    </>)
}