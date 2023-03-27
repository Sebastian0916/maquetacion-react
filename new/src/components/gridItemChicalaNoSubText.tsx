import * as React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  Stack,
  Box,
} from "@mui/material";

import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

export default function GridItemCardChicalaNoSubText() {
  return (<>
    <Grid item sm={3} sx={{ display: "flex", mt: "8px" }}>
        <Card sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "4px",
          p: "0",
          width: "285.5px",
          height: "210px",
          bgcolor: "#FFFFFF",
        }}

        >
          <CardHeader sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            p: "16px", width: "253.5px",
            height: "32px"
          }}

            title={
              <Typography sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}} title="Chicala E1 - Apartamento tipo B - Área 45 mts2" variant="h6" color={"text.primary"}>
                Chicala E1 - Apartamento ti...<MapOutlinedIcon color="primary" />
              </Typography>
            }
          />
          <CardContent sx={{
            flexDirection: "column",
            gap:"4px",
            p: "16px",
            width: "253.5px",
            height: "154px",
          }} >
            <Typography variant="subtitle2" color="primary">Características</Typography>
            <Box sx={{height:"40px"}}></Box>
            <Stack sx={{flexDirection:"row", gap:"4px"}}>
             <Stack sx={{borderRadius:"8px", p:"12px", width:"81.83px", height:"32px", alignItems:"center", backgroundColor:"#C3E58F"}}>
              <Typography variant="caption" color="text.primary" sx={{fontSize:"10px!important", mb:"4px"}}>Disponibles</Typography>
              <Typography variant="subtitle2" sx={{ textAlign:"center"}}>80</Typography>
             </Stack>
             <Stack sx={{borderRadius:"8px", p:"12px", width:"81.83px", height:"32px", alignItems:"center", backgroundColor:"#FFA1A1"}}>
             <Typography variant="caption" color="text.primary" sx={{fontSize:"10px!important", mb:"4px"}}>Vendidas</Typography>
             <Typography variant="subtitle2" sx={{ textAlign:"center"}}>64</Typography>
             </Stack>
             <Stack sx={{borderRadius:"8px", p:"12px", width:"81.83px", height:"32px", alignItems:"center", backgroundColor:"#C0E2EE"}}>
             <Typography variant="caption" color="text.primary" sx={{fontSize:"10px!important", mb:"4px"}}>Reservadas</Typography>
             <Typography variant="subtitle2" sx={{ textAlign:"center"}}>0</Typography>
             </Stack> 
            </Stack>          
          </CardContent>
        </Card>
    </Grid>
  </>)
}