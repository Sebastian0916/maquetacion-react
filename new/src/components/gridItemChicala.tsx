import * as React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";



export default function GridItemCardChicala() {
  return (<>
    <Grid item sm={3} sx={{ display: "flex", mt: "8px" }}>
        <Card sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "4px",
          p: "0",
          width: "285.5px",
          height: "256px",
          bgcolor: "#FFFFFF",
        }}

        >
          <CardHeader sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            p: "12px", width: "261.5px",
            height: "46px"
          }}

            title={
              <Typography title="Chicala E1 - Apartamento tipo B - Área 45 mts2" variant="h6" color={"text.primary"}>
                Chicala E1 - Apartamento ap...
              </Typography>
            }
          />
          <CardContent sx={{
            flexDirection: "column",
            p: "12px 16px 0px 16px",
            width: "253.5px",
            height: "210px",
          }} >
            
          </CardContent>
        </Card>
    </Grid>
  </>)
}