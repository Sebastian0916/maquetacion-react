import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import image10 from "../../../assets/image 10.jpg";
import { useNavigate } from "react-router-dom";

const CardProyecyoVentas = () => {
  const navegacion = useNavigate();
  return (
    <div>
      <Box flexDirection="column">
        <Stack flexDirection="row" sx={{ marginTop: "175px" }}>
          <Card
            id="card"
            sx={{ width: "285px", marginTop: 2 }}
            onClick={() => navegacion("planoGeneral")}
          >
            <CardHeader
              title={
                <Typography gutterBottom variant="h6">
                  Porto allegre 88 Av Calle 58...
                </Typography>
              }
            />
            <CardContent>
              <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
                <Stack>
                  <img src={image10} alt="" />
                </Stack>
              </CardMedia>
              <Stack flexDirection="column" gap="4px" mt="4px">
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography variant="subtitle2" color="primary">
                    Total Unidades
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    945
                  </Typography>
                </Stack>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography color="primary">Unidades vendidas</Typography>
                  <Typography color="text.secondary">564</Typography>
                </Stack>
                <LinearProgress variant="determinate" value={48.8} />
              </Stack>
              <Box display="flex" justifyContent="center" mt="4px">
                <Typography variant="subtitle2" color="text.primary">
                  48.8%
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Stack>
        <Stack flexDirection="row">
          <Card id="card" sx={{ width: "285px", marginTop: 2 }}>
            <CardHeader
              title={
                <Typography gutterBottom variant="h6">
                  Porto allegre 88 Av Calle 58...
                </Typography>
              }
            />
            <CardContent>
              <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
                <Stack>
                  <img src={image10} alt="" />
                </Stack>
              </CardMedia>
              <Stack flexDirection="column" gap="4px" mt="4px">
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography variant="subtitle2" color="primary">
                    Total Unidades
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    945
                  </Typography>
                </Stack>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography color="primary">Unidades vendidas</Typography>
                  <Typography color="text.secondary">564</Typography>
                </Stack>
                <LinearProgress variant="determinate" value={48.8} />
              </Stack>
              <Box display="flex" justifyContent="center" mt="4px">
                <Typography variant="subtitle2" color="text.primary">
                  48.8%
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Stack>
        <Stack flexDirection="row">
          <Card id="card" sx={{ width: "285px", marginTop: 2 }}>
            <CardHeader
              title={
                <Typography gutterBottom variant="h6">
                  Porto allegre 88 Av Calle 58...
                </Typography>
              }
            />
            <CardContent>
              <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
                <Stack>
                  <img src={image10} alt="" />
                </Stack>
              </CardMedia>
              <Stack flexDirection="column" gap="4px" mt="4px">
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography variant="subtitle2" color="primary">
                    Total Unidades
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    945
                  </Typography>
                </Stack>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography color="primary">Unidades vendidas</Typography>
                  <Typography color="text.secondary">564</Typography>
                </Stack>
                <LinearProgress variant="determinate" value={48.8} />
              </Stack>
              <Box display="flex" justifyContent="center" mt="4px">
                <Typography variant="subtitle2" color="text.primary">
                  48.8%
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </div>
  );
};

export default CardProyecyoVentas;
