import NavBarCotizacionVPN from "../components/navBars/navBar-Cotizacion-vpn";
import { Box, Card, CardContent, Chip, Divider, Typography } from "@mui/material"

export default function CotizacionVPN() {
    return (<>
        <NavBarCotizacionVPN />

        <Box sx={{ width: "1204px", height: "553px", overflowY: "scroll", display: "flex", flexWrap: "wrap", gap: "4px" }}>

            <Card sx={{ width: "1166px", height: "152px", backgroundColor: "#fff", mx: "auto", mt: "4px" }}>
                <CardContent sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Box sx={{width:"1134px", height:"120px", display:"flex", flexDirection:"row", alignItems:"center", p:"0 16px", gap:"16px"}}>
                        <Box sx={{width:"345.33px", height:"94px", display:"flex", flexDirection:"column", alignItems:"center", gap:"4px" }}>
                            <Box sx={{width:"345.33px", height:"20px", display:"flex", flexDirection:"row", alignItems:"center"}}>
                                <Typography variant="subtitle1" color="text.primary" sx={{width:"258.33px"}}>
                                    Macroproyecto:
                                </Typography>
                                <Typography variant="body1" color="text.primary" sx={{width:"87px"}}>
                                    MONTECIELO
                                </Typography>
                            </Box>
                            <Box>
                                <Typography>
                                    Proyecto:
                                </Typography>
                                <Typography>
                                    MONTECIELO
                                </Typography>
                            </Box>
                            <Box>
                                <Typography>
                                    Agrupación:
                                </Typography>
                              
                                <Chip label="APT 203 - TORRE 1" />
                   
                            </Box>
                            <Box>
                                <Typography>
                                    Tipo Inmueble
                                </Typography>
                                <Typography>
                                    Apartamento tipo...
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            <Box sx={{ width: "765px", height: "58px", backgroundColor: "#fff", mx: "auto", display: "flex", justifyContent: "flex-end", gap: "4px" }}>

            </Box>

            <Card sx={{ width: "1166px", height: "528px", backgroundColor: "#fff", mx: "auto", mt: "4px" }}>

            </Card>

        </Box>

    </>)
}