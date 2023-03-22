import LinearProgress from '@mui/material/LinearProgress';

import { 
    Card,
    CardHeader,
    CardMedia,
  } from "@mui/material";

import CardContent from "@mui/material/CardContent";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function GridItemCard() {
    return(<>
    <Grid item sm={3} sx={{ display: "flex", mt:"8px" }}>
        <Card sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"flex-start",
            gap:"4px",
            p:"0",
            width:"285.5px",
            height:"256px",
            bgcolor: "#FFFFFF",
            }}
            
            >
          <CardHeader sx={{
            display:"flex", 
            flexDirection:"row", 
            alignItems:"center", 
            p:"12px", width:"261.5px" , 
            height:"46px"}}

            title={
              <Typography variant="h6" sx={{fontWeight:"600"}} color={"text.primary"}>
                Porto allegre 88 Av Calle 58...
              </Typography>
            }
          />
          <CardContent sx={{
            flexDirection:"column", 
            p:"12px 16px 0px 16px", 
            width:"253.5px" , 
            height:"210px",
            }} >
            {/* logo */}
            <Box sx={{display:"flex",alignItems:"center"}}>
            <Box sx={{
              height:"100px", 
              gap:"8px", 
              px:"0 12px",
              mx:"auto"
            }}
              ><CardMedia
              component="img" 
              height="100"
              image="https://via.placeholder.com/100"
              alt="Reserva de San David"
          /></Box>
          </Box>
            {/* block */}
            <Box sx={{
              height:"74px", 
              gap:"4px",
              mx:"4px"
              }}>
            
            {/* sales */}
            <Box sx={{
              display:"flex", 
              flexDirection:"row",
              justifyContent: "space-between"}}>
            <Box>
            <Typography variant="subtitle2" color="primary" >Total Unidades   </Typography>
            <Typography variant="subtitle2" color="primary" >Unidades vendidas</Typography>
            </Box>
            <Box>
            <Typography variant="subtitle2" >954</Typography>
            <Typography variant="subtitle2" >564</Typography>
            </Box>
            </Box>
            {/* progress bar */}
            <LinearProgress variant="determinate" value={48.18} />
            {/* percent computed in text */}
            <Typography variant="subtitle2" textAlign="center">48.18%</Typography>
            {/* /block */}
            </Box>
          </CardContent>
        </Card>
      </Grid>   
    </>)
}