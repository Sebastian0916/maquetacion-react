import {
  Button,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";

import { Box, Stack } from "@mui/system";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import "./App.css";
import Grid from "@mui/material/Grid";

import GridItemCard from "./components/gridItem";

function App() {

  return (
    <>

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
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button variant="text">
              <ChevronLeftIcon /> Volver
            </Button>
            <Typography variant="h6" color="text.primary">
              Proyectos en venta
            </Typography>
          </Box>
          <Stack
            justifyContent="flex-end"
            flexDirection="row"
            alignItems="center"
          >
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={navBarOptions}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Buscar" />
              )}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={navBarOptions}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Proyectos de vendedor" />
              )}
            />
          </Stack>
        </Stack>
      </Stack>
      <Grid>

      <Box sx={{display:"flex", flexDirection:"row", alignItems:"flex-start", p:"0", gap:"8px", width:"1166px"}}>
      
      <GridItemCard/>

      <GridItemCard/>

      <GridItemCard/>

      <GridItemCard/>
      
      </Box>

      <Box sx={{display:"flex", flexDirection:"row", alignItems:"flex-start", p:"0", gap:"8px", width:"1166px"}}>
      
      <GridItemCard/>

      <GridItemCard/>

      <GridItemCard/>

      <GridItemCard/>
      
      </Box>

      <Box sx={{display:"flex", flexDirection:"row", alignItems:"flex-start", p:"0", gap:"8px", width:"1166px"}}>
      
      <GridItemCard/>

      <GridItemCard/>

      <GridItemCard/>

      <GridItemCard/>
      
      </Box>
      
      </Grid>
    </>
  );
}
const navBarOptions = [
  { label: "Auxiliar operativo de la venta 14" },
  { label: "Daniel Ricardo Castellano Sepulveda" },
  { label: "Sergio Vergara García" },
  { label: "Auxiliar operativo de la venta 14" },
  { label: "Daniel Ricardo Castellano Sepulveda" },
  { label: "Sergio Vergara García" },
  { label: "Auxiliar operativo de la venta 14" },
  { label: "Daniel Ricardo Castellano Sepulveda" },
  { label: "Sergio Vergara García" },
  { label: "Auxiliar operativo de la venta 14" },
  { label: "Daniel Ricardo Castellano Sepulveda" },
  { label: "Sergio Vergara García" },
];
export default App;
