import Grid from "@mui/material/Grid";
import GridItemCard from "../components/gridItemPortoAllegre";
import NavBarProyectos from "../components/navBar-Proyectos";
import { Box } from "@mui/system";

export default function ProyectosEnVenta() {
    return(
        <>
      <NavBarProyectos/>

      <Grid>

      <Box sx={{display:"flex", flexDirection:"row", alignItems:"flex-start", p:"0", gap:"8px", mx:"auto" ,width:"1166px"}}>
      
      <GridItemCard/>

      <GridItemCard/>

      <GridItemCard/>

      <GridItemCard/>
      
      </Box>

      <Box sx={{display:"flex", flexDirection:"row", alignItems:"flex-start", p:"0", gap:"8px", mx:"auto" , width:"1166px" }}>
      
      <GridItemCard/>

      <GridItemCard/>

      <GridItemCard/>

      <GridItemCard/>
      
      </Box>

      <Box sx={{display:"flex", flexDirection:"row", alignItems:"flex-start", p:"0", gap:"8px", mx:"auto" , width:"1166px" }}>
      
      <GridItemCard/>

      <GridItemCard/>

      <GridItemCard/>

      <GridItemCard/>
      
      </Box>
      
      </Grid>
      </>
    )
}