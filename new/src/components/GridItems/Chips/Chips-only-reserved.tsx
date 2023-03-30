import { Card, CardContent, Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function ChipsOnlyReserved() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/Cotizacion');
    };

    return (<>
        <Box sx={{ mx: "auto", width: "876px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <Box sx={{ width: "876px", display: "flex", gap: "8px", flexDirection: "row", alignItems: "flex-start" }}>
                <Card sx={{ width: "286.67px", backgroundColor: "#fff" }}>
                    <CardContent sx={{ display: "flex", flexDirection: "Column", alignItems: "center", gap: "4px" }}>
                        <Typography variant="h6" color="text.primary">Piso 1</Typography>
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                    </CardContent>
                </Card>
                <Card sx={{ width: "286.67px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#fff" }}>
                    <CardContent sx={{ display: "flex", flexDirection: "Column", alignItems: "center", gap: "4px" }}>
                        <Typography variant="h6" color="text.primary">Piso 2</Typography>
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                    </CardContent>
                </Card>
                <Card sx={{ width: "286.67px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#fff" }}>
                    <CardContent sx={{ display: "flex", flexDirection: "Column", alignItems: "center", gap: "4px" }}>
                        <Typography variant="h6" color="text.primary">Piso 3</Typography>
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                    </CardContent>
                </Card>
            </Box>
            <Box sx={{ width: "876px", display: "flex", gap: "8px", flexDirection: "row", alignItems: "flex-start" }}>
                <Card sx={{ width: "286.67px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#fff" }}>
                    <CardContent sx={{ display: "flex", flexDirection: "Column", alignItems: "center", gap: "4px" }}>
                        <Typography variant="h6" color="text.primary">Piso 4</Typography>
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                    </CardContent>
                </Card>
                <Card sx={{ width: "286.67px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#fff" }}>
                    <CardContent sx={{ display: "flex", flexDirection: "Column", alignItems: "center", gap: "4px" }}>
                        <Typography variant="h6" color="text.primary">Piso 5</Typography>
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                    </CardContent>
                </Card>
                <Card sx={{ width: "286.67px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#fff" }}>
                    <CardContent sx={{ display: "flex", flexDirection: "Column", alignItems: "center", gap: "4px" }}>
                        <Typography variant="h6" color="text.primary">Piso 6</Typography>
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                        <Chip onClick={handleNavigate} sx={{ width: "225px" }} size="small" color="info" label="APT 203 - TORRE 1 $000,000,000 " />
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </>)
};