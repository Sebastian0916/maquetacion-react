import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Ilustracion from '../../../assets/ilustracion.png'
export default function ChipsEmptyState() {

    return (<>
        <Card sx={{ mx: "auto", width: "874px", height:"320px", display: "flex", alignItems:"center", flexWrap: "wrap", gap: "8px", backgroundColor:"#fff" }}>
            <CardContent sx={{width:"874px",height:"197px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"12px"}}>
                <Box sx={{width:"198px", height:"163px"}}>
                <CardMedia
                component="img"
                image={Ilustracion}
                />
                </Box>
                <Typography variant="h6" color="text.primary" sx={{width:"141px", height:"22px"}}>
                    Seleccione un filtro
                </Typography>
            </CardContent>
        </Card>
    </>)
};