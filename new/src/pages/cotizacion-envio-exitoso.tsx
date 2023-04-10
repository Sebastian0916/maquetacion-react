import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import BackgroundSuccess from "../assets/Fondo.png"
import IlustrationSuccess from "../assets/ilustracion3.png"
import { Link } from "react-router-dom";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function CotizacionExitosa() {
    return (<>
        <CardMedia component="img" image={BackgroundSuccess} sx={{ position: "relative", zIndex: "-1" }} />
        <Card sx={{ width: "616px", height: "303px", mx: "auto", mt: "-52px" }}>
            <CardContent sx={{ width: "293px", height: "267px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", mx: "auto" }}>
                <Box sx={{ width: "198px", height: "163px" }}>
                    <CardMedia component="img" image={IlustrationSuccess}></CardMedia>
                </Box>
                <Typography variant="h6" color="text.primary">Cotización enviada con éxito</Typography>
                <Box sx={{ display: "flex", gap: "4px" }}>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <Button variant="outlined" startIcon={<ChevronLeftIcon />}>Volver a proyectos</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <Button variant="contained">Reservar visita</Button>
                    </Link>
                </Box>
            </CardContent>
        </Card>
    </>)
}