import {
    Button,
    Typography,
  } from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import {Link} from "react-router-dom";


export default function NavBarReservarVisita() {return(
    <>
    <Box sx={{ width: "1204px", height:"66px" , mx:"auto"}}> 
      <Stack
        flexDirection="column"
        sx={{ backgroundColor: "white" }}
        py={"8px"}
        px={"24px"}
        
      >
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ display: "flex", flexDirection: "column", alignItems:"flex-start" }} color="primary">
          <Link style={{textDecoration: 'none'}} to="/SeleccionDelInmueble">
            <Button sx={{height:"26px"}} size="small" variant="text" startIcon={<ChevronLeftIcon />}>
               Volver
            </Button>
            </Link>
            <Box sx={{display:"flex", alignItems:"center", gap:"4px"}}>
            <Typography sx={{height:"22px"}} variant="h6" color="text.primary">
              Reservar visita
            </Typography>
            </Box>
          </Box>  
        </Stack>
      </Stack>
      </Box>
    </>
)}
