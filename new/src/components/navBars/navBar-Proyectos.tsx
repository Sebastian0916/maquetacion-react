import {
    Button,
    InputAdornment,
    Typography,
  } from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import TextField from "@mui/material/TextField/TextField";
import SearchIcon from '@mui/icons-material/Search';

export default function NavBarProyectos() {return(
    <>
    <Box sx={{ width: "1204px" , mx:"auto"}}> 
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
          <Box sx={{ display: "flex", flexDirection: "column", width:"141px", alignItems:"flex-start" }} color="primary">
            <Button sx={{height:"26px"}} size="small" variant="text" startIcon={<ChevronLeftIcon />}>
               Volver
            </Button>
            <Typography sx={{height:"22px"}} variant="h6" color="text.primary">
              Proyectos en venta
            </Typography>
          </Box>

          <Stack sx={{flexDirection:"row",justifyContent:"flex-end",alignItems:"center",gap:"4px"}}>

            {/* AutoComplete */}
            {/* Form-Select/Outlined */}
            {/* Menu */}

            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options={navBarOptions}
              sx={{ width: "220px" }}
              renderInput={(params) => (
                <TextField {...params} label="Buscar"  
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{mr:"-31px"}}>
                        <SearchIcon fontSize="small"/>
                      </InputAdornment>
                     )
                    }}/>
                
              )}
            />
            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options={navBarOptions}
              sx={{ width: "220px" }}
              renderInput={(params) => (
                <TextField {...params} label="Proyectos de vendedor" />
              )}
            />
          </Stack>
         
        </Stack>
      </Stack>
      </Box>
    </>
)}

const navBarOptions = [
    { label: "Auxiliar operativo de la venta 14" },
    { label: "Daniel Ricardo Castellano Sepulveda" },
    { label: "Sergio Vergara García" },
    { label: "Auxiliar operativo de la venta 14*" },
    { label: "Daniel Ricardo Castellano Sepulveda*" },
    { label: "Sergio Vergara García*" },
    { label: "Auxiliar operativo de la venta 14**" },
    { label: "Daniel Ricardo Castellano Sepulveda**" },
    { label: "Sergio Vergara García**" },
    { label: "Auxiliar operativo de la venta 14***" },
    { label: "Daniel Ricardo Castellano Sepulveda***" },
    { label: "Sergio Vergara García***" },
  ];