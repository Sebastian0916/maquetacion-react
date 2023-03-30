import NavBarCotizacion from "../components/navBars/navBar-Cotizacion";
import { Box, Card, CardHeader, CardContent, CardMedia, Button, Typography, Divider } from "@mui/material"
import DialogBlueprint from "../components/Dialogs/dialog-blueprint-byIconButton";
import Image13Med from "../assets/image13-md.png"
export default function Cotizacion() {
    return (<>
        <NavBarCotizacion />
        <Box sx={{ height: "553px", overflowY: "scroll", width: "1204px", display: "flex", gap: "8px", justifyContent: "center", mt: "4px" }}>
            <Box sx={{ width: "739px", height: "639px", display: "flex", gap: "8px", flexDirection: "column", alignItems: "flex-start", float: "left" }}>
                <Card sx={{ height: "122px", width: "739px", backgroundColor: "#fff" }}></Card>
                <Card sx={{ height: "104px", width: "739px", backgroundColor: "#fff" }}></Card>
                <Card sx={{ height: "363px", width: "739px", backgroundColor: "#fff" }}></Card>
                <Button variant="contained">Detalle Cotización</Button>
            </Box>
            <Card sx={{ width: "415px", height: "404px", backgroundColor: "#fff", display: "flex", flexDirection: "column", alignItems: "flex-start", float: "right" }}>
                {/* <CardHeader> */}
                {/* CardHeader is not displaying content at this commit */}
                    <Box sx={{width:"383px", height:"24px", p:"16px", display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-between"}}>
                    <Typography variant="subtitle1" color="text.primary">
                        Chicala E1 - Apartamento tipo B - Área de 45 mts2
                    </Typography>
                    <DialogBlueprint />
                    </Box>
                {/* </CardHeader> */}
                <CardContent sx={{width:"383px", height:"348px", display:"flex", gap:"4px", flexDirection:"column"}}>
                    <Typography variant="subtitle2" color="primary">Características</Typography>
                    <Typography variant="body2" color="text.secondary">Área construida de 45,42 m + 3 baños  + 5 habitaciones en exclusiva zona privada de la ciudad.</Typography>
                    <Box sx={{width:"197.51px", mx:"auto"}}>
                    <CardMedia 
                    component="img"
                    image={Image13Med}
                    ></CardMedia>
                    </Box>
                    <Divider />
                    <Box sx={{width:"383px", height:"61px", display:"flex", flexDirection:"row", gap:"4px", borderRadius:"6px"}}>
                        <Box sx={{display:"flex", flexDirection:"Column", alignItems:"center", justifyContent:"center", gap:"4px", width:"125px", height:"61px", backgroundColor:"#C3E68F", borderRadius:"8px"}}>
                            <Typography variant="caption" color="text.primary">Disponibles</Typography>
                            <Typography variant="subtitle2" color="text.primary">80</Typography>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"Column", alignItems:"center", justifyContent:"center", gap:"4px", width:"125px", height:"61px", backgroundColor:"#FFA2A2", borderRadius:"8px"}}>
                            <Typography variant="caption" color="text.primary">Vendidos</Typography>
                            <Typography variant="subtitle2" color="text.primary">64</Typography>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"Column", alignItems:"center", justifyContent:"center", gap:"4px", width:"125px", height:"61px", backgroundColor:"#C0E2EE", borderRadius:"8px"}}>
                            <Typography variant="caption" color="text.primary">Reservadas</Typography>
                            <Typography variant="subtitle2" color="text.primary">0</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    </>)
}