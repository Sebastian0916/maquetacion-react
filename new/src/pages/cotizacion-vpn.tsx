import NavBarCotizacionVPN from "../components/navBars/navBar-Cotizacion-vpn";
import { Box, Button, Card, CardContent, Checkbox, Chip, Divider, IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CheckIcon from '@mui/icons-material/Check';
import DialogInputByIconButton from "../components/Dialogs/dialog-input-byIconButton";
import DialogInputsByIconButton from "../components/Dialogs/dialog-inputs-byIconButton";
import { Link } from "react-router-dom";


export default function CotizacionVPN() {
    return (<>
        <NavBarCotizacionVPN />

        <Box sx={{ width: "1204px", height: "553px", overflowY: "scroll", display: "flex", flexWrap: "wrap", gap: "4px" }}>

            <Card sx={{ width: "1166px", height: "152px", backgroundColor: "#fff", mx: "auto", mt: "4px" }}>
                <CardContent sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Box sx={{ width: "1134px", height: "120px", display: "flex", flexDirection: "row", alignItems: "center", p: "0 16px", gap: "16px" }}>
                        <Box sx={{ width: "345.33px", height: "94px", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                            <Box sx={{ width: "345.33px", height: "20px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Typography variant="subtitle1" color="text.primary" sx={{ width: "258.33px" }}>
                                    Macroproyecto:
                                </Typography>
                                <Typography variant="body1" color="text.primary" sx={{ width: "87px" }}>
                                    MONTECIELO
                                </Typography>
                            </Box>
                            <Box sx={{ width: "345.33px", height: "20px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Typography variant="subtitle1" color="text.primary" sx={{ width: "258.33px" }}>
                                    Proyecto:
                                </Typography>
                                <Typography variant="body1" color="text.primary" sx={{ width: "87px" }}>
                                    MONTECIELO
                                </Typography>
                            </Box>
                            <Box sx={{ width: "345.33px", height: "20px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Typography variant="subtitle1" color="text.primary" sx={{ width: "258.33px" }}>
                                    Agrupación:
                                </Typography>

                                <Chip size="small" label="APT 203 - TORRE 1" />

                            </Box>
                            <Box sx={{ width: "345.33px", height: "20px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Typography variant="subtitle1" color="text.primary" sx={{ width: "202.33px" }}>
                                    Tipo Inmueble
                                </Typography>
                                <Typography title="Apartamento tipo 2 45,42 m2 Área construida" variant="body1" color="text.primary" sx={{ width: "143px", textAlign: "end" }}>
                                    Apartamento tipo...
                                </Typography>
                            </Box>
                        </Box>
                        <Divider orientation="vertical"></Divider>
                        <Box sx={{ width: "345.33px", height: "94px", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                            <Box sx={{ width: "345.33px", height: "20px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Typography variant="subtitle1" color="text.primary" sx={{ width: "258.33px" }}>
                                    Subtotal inmueble:
                                </Typography>
                                <Typography variant="body1" color="text.primary" sx={{ width: "87px" }}>
                                    $164,383,000
                                </Typography>
                            </Box>
                            <Box sx={{ width: "345.33px", height: "20px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Typography variant="subtitle1" color="text.primary" sx={{ width: "258.33px" }}>
                                    Descuento:
                                </Typography>
                                <Typography variant="body1" color="text.primary" sx={{ width: "87px", textAlign: "end" }}>
                                    $0
                                </Typography>
                            </Box>
                            <Box sx={{ width: "345.33px", height: "20px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Typography variant="subtitle1" color="text.primary" sx={{ width: "258.33px" }}>
                                    Sobrecosto:
                                </Typography>
                                <Typography variant="body1" color="text.primary" sx={{ width: "87px", textAlign: "end" }}>
                                    $0
                                </Typography>
                            </Box>
                            <Box sx={{ width: "345.33px", height: "20px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Typography variant="subtitle1" color="text.primary" sx={{ width: "258.33px" }}>
                                    Valor total:
                                </Typography>
                                <Typography variant="body1" color="text.primary" sx={{ width: "87px" }}>
                                    $164,383,000
                                </Typography>
                            </Box>
                        </Box>
                        <Divider orientation="vertical"></Divider>
                        <Box sx={{ width: "345.33px", height: "94px", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                            <Box sx={{ width: "345.33px", height: "20px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Typography variant="subtitle1" color="text.primary" sx={{ width: "258.33px" }}>
                                    Numero de cuotas:
                                </Typography>
                                <Typography variant="body1" color="text.primary" sx={{ width: "87px", textAlign: "end" }}>
                                    32
                                </Typography>
                            </Box>
                            <Box sx={{ width: "345.33px", height: "20px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Typography variant="subtitle1" color="text.primary" sx={{ width: "258.33px" }}>
                                    Interés corriente:
                                </Typography>
                                <Typography variant="body1" color="text.primary" sx={{ width: "87px", textAlign: "end" }}>
                                    0
                                </Typography>
                            </Box>
                            <Box sx={{ width: "345.33px", height: "20px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Typography variant="subtitle1" color="text.primary" sx={{ width: "258.33px" }}>
                                    Interes financiero:
                                </Typography>
                                <Typography variant="body1" color="text.primary" sx={{ width: "87px", textAlign: "end" }}>
                                    0
                                </Typography>
                            </Box>
                            <Box sx={{ width: "345.33px", height: "20px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Typography variant="subtitle1" color="text.primary" sx={{ width: "258.33px" }}>
                                    Diferencia:
                                </Typography>
                                <Typography variant="body1" color="text.primary" sx={{ width: "87px", textAlign: "end" }}>
                                    $0
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            <Box sx={{ width: "800px", height: "58px", display: "flex", justifyContent: "flex-end", gap: "4px", mr: "16px", ml: "auto" }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "16px", gap: "8px" }}>
                    <Button size="small" variant="text" startIcon={"0"}>
                        Restablecer cuotas
                    </Button>
                    <Button size="small" variant="text" startIcon={<AttachMoneyIcon />}>
                        Repartir saldo
                    </Button>
                    <DialogInputByIconButton></DialogInputByIconButton>
                    <DialogInputsByIconButton></DialogInputsByIconButton>
                    <Button size="small" disabled variant="contained" startIcon={<SaveIcon />}>
                        Guardar
                    </Button>
                    <Link style={{textDecoration: 'none'}} to="/CotizacionVolanteVPN">
                    <Button size="small" variant="contained" startIcon={<SendIcon />}>
                        Enviar
                    </Button>
                    </Link> 
                </Box>
            </Box>

            <Card sx={{ width: "1166px", backgroundColor: "#fff", mx: "auto", mt: "4px" }}>
                <Table size="small" sx={{ width: "1166px" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                #
                            </TableCell>

                            <TableCell>
                                Concepto
                            </TableCell>

                            <TableCell>
                                Fecha
                            </TableCell>

                            <TableCell>
                                Valor
                            </TableCell>

                            <TableCell>
                                Bloquear
                            </TableCell>

                            <TableCell>
                                Eliminar
                            </TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell>
                                1
                            </TableCell>

                            <TableCell>
                                Separación
                            </TableCell>

                            <TableCell>
                                <Typography sx={{display:"flex", alignItems:"center", gap:"4px"}}> 01/01/2023 <IconButton><CalendarMonthOutlinedIcon fontSize="small" color="primary"></CalendarMonthOutlinedIcon></IconButton></Typography>
                            </TableCell>

                            <TableCell>
                                <Typography sx={{display:"flex", alignItems:"center", gap:"4px"}} color="primary"> 01/01/2023 <IconButton><EditIcon fontSize="small" color="primary"></EditIcon></IconButton></Typography>
                            </TableCell>

                            <TableCell>
                                <Checkbox></Checkbox>
                            </TableCell>

                            <TableCell>
                                <IconButton><DeleteOutlinedIcon color="primary"></DeleteOutlinedIcon></IconButton>
                            </TableCell>

                        </TableRow>

                        <TableRow>
                            <TableCell>
                                1
                            </TableCell>

                            <TableCell>
                                Separación
                            </TableCell>

                            <TableCell>
                            <Typography sx={{display:"flex", alignItems:"center", gap:"4px"}} color="primary"> 01/01/2023 <IconButton><CalendarMonthOutlinedIcon fontSize="small" color="primary"></CalendarMonthOutlinedIcon></IconButton></Typography>
                            </TableCell>

                            <TableCell>
                                <Box sx={{display:"flex", alignItems:"center", gap:"4px"}}><TextField defaultValue={"1,000,000"}></TextField><IconButton><CheckIcon fontSize="small" color="primary"></CheckIcon></IconButton></Box>
                            </TableCell>

                            <TableCell>
                                <Checkbox></Checkbox>
                            </TableCell>

                            <TableCell>
                                <IconButton><DeleteOutlinedIcon color="primary"></DeleteOutlinedIcon></IconButton>
                            </TableCell>

                        </TableRow>

                        <TableRow>
                            <TableCell>
                                1
                            </TableCell>

                            <TableCell>
                                Separación
                            </TableCell>

                            <TableCell>
                                01/01/2023
                            </TableCell>

                            <TableCell>
                                1,000,000
                            </TableCell>

                            <TableCell>
                                <Checkbox></Checkbox>
                            </TableCell>

                            <TableCell>
                                <IconButton><DeleteOutlinedIcon color="primary"></DeleteOutlinedIcon></IconButton>
                            </TableCell>

                        </TableRow>

                        <TableRow>
                            <TableCell>
                                1
                            </TableCell>

                            <TableCell>
                                Separación
                            </TableCell>

                            <TableCell>
                                01/01/2023
                            </TableCell>

                            <TableCell>
                                1,000,000
                            </TableCell>

                            <TableCell>
                                <Checkbox></Checkbox>
                            </TableCell>

                            <TableCell>
                                <IconButton><DeleteOutlinedIcon color="primary"></DeleteOutlinedIcon></IconButton>
                            </TableCell>

                        </TableRow>

                        <TableRow>
                            <TableCell>
                                1
                            </TableCell>

                            <TableCell>
                                Separación
                            </TableCell>

                            <TableCell>
                                01/01/2023
                            </TableCell>

                            <TableCell>
                                1,000,000
                            </TableCell>

                            <TableCell>
                                <Checkbox></Checkbox>
                            </TableCell>

                            <TableCell>
                                <IconButton><DeleteOutlinedIcon color="primary"></DeleteOutlinedIcon></IconButton>
                            </TableCell>

                        </TableRow>

                        <TableRow>
                            <TableCell>
                                1
                            </TableCell>

                            <TableCell>
                                Separación
                            </TableCell>

                            <TableCell>
                                01/01/2023
                            </TableCell>

                            <TableCell>
                                1,000,000
                            </TableCell>

                            <TableCell>
                                <Checkbox></Checkbox>
                            </TableCell>

                            <TableCell>
                                <IconButton><DeleteOutlinedIcon color="primary"></DeleteOutlinedIcon></IconButton>
                            </TableCell>

                        </TableRow>

                        <TableRow>
                            <TableCell>
                                1
                            </TableCell>

                            <TableCell>
                                Separación
                            </TableCell>

                            <TableCell>
                                01/01/2023
                            </TableCell>

                            <TableCell>
                                1,000,000
                            </TableCell>

                            <TableCell>
                                <Checkbox></Checkbox>
                            </TableCell>

                            <TableCell>
                                <IconButton><DeleteOutlinedIcon color="primary"></DeleteOutlinedIcon></IconButton>
                            </TableCell>

                        </TableRow>

                        <TableRow>
                            <TableCell>
                                1
                            </TableCell>

                            <TableCell>
                                Separación
                            </TableCell>

                            <TableCell>
                                01/01/2023
                            </TableCell>

                            <TableCell>
                                1,000,000
                            </TableCell>

                            <TableCell>
                                <Checkbox></Checkbox>
                            </TableCell>

                            <TableCell>
                                <IconButton><DeleteOutlinedIcon color="primary"></DeleteOutlinedIcon></IconButton>
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>
                                1
                            </TableCell>

                            <TableCell>
                                Separación
                            </TableCell>

                            <TableCell>
                                01/01/2023
                            </TableCell>

                            <TableCell>
                                1,000,000
                            </TableCell>

                            <TableCell>
                                <Checkbox></Checkbox>
                            </TableCell>

                            <TableCell>
                                <IconButton><DeleteOutlinedIcon color="primary"></DeleteOutlinedIcon></IconButton>
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>
                                1
                            </TableCell>

                            <TableCell>
                                Separación
                            </TableCell>

                            <TableCell>
                                01/01/2023
                            </TableCell>

                            <TableCell>
                                1,000,000
                            </TableCell>

                            <TableCell>
                                <Checkbox></Checkbox>
                            </TableCell>

                            <TableCell>
                                <IconButton><DeleteOutlinedIcon color="primary"></DeleteOutlinedIcon></IconButton>
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>
                                1
                            </TableCell>

                            <TableCell>
                                Separación
                            </TableCell>

                            <TableCell>
                                01/01/2023
                            </TableCell>

                            <TableCell>
                                1,000,000
                            </TableCell>

                            <TableCell>
                                <Checkbox></Checkbox>
                            </TableCell>

                            <TableCell>
                                <IconButton><DeleteOutlinedIcon color="primary"></DeleteOutlinedIcon></IconButton>
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>
                                1
                            </TableCell>

                            <TableCell>
                                Separación
                            </TableCell>

                            <TableCell>
                                01/01/2023
                            </TableCell>

                            <TableCell>
                                1,000,000
                            </TableCell>

                            <TableCell>
                                <Checkbox></Checkbox>
                            </TableCell>

                            <TableCell>
                                <IconButton><DeleteOutlinedIcon color="primary"></DeleteOutlinedIcon></IconButton>
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>
                                1
                            </TableCell>

                            <TableCell>
                                Separación
                            </TableCell>

                            <TableCell>
                                01/01/2023
                            </TableCell>

                            <TableCell>
                                1,000,000
                            </TableCell>

                            <TableCell>
                                <Checkbox></Checkbox>
                            </TableCell>

                            <TableCell>
                                <IconButton><DeleteOutlinedIcon color="primary"></DeleteOutlinedIcon></IconButton>
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>
                                1
                            </TableCell>

                            <TableCell>
                                Separación
                            </TableCell>

                            <TableCell>
                                01/01/2023
                            </TableCell>

                            <TableCell>
                                1,000,000
                            </TableCell>

                            <TableCell>
                                <Checkbox></Checkbox>
                            </TableCell>

                            <TableCell>
                                <IconButton><DeleteOutlinedIcon color="primary"></DeleteOutlinedIcon></IconButton>
                            </TableCell>

                        </TableRow>

                    </TableBody>

                </Table>
            </Card>

        </Box>

    </>)
}