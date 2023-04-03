import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Box, Button, CardMedia, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import Typography from '@mui/material/Typography';
import Ilustracion2 from "../../assets/ilustracion2.png"

export default function DialogPersonalDataByIconButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  return (<>


    <Button variant="contained" onClick={handleClickOpen} size="small">Detalle Cotizacion</Button>

    <Dialog
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "444px",
            maxWidth: "444px",
          },
        },
      }}
      open={open}
      onClose={handleClose}
    >
      <DialogContent sx={{ display: "flex", alignItems:"center", justifyContent: "center", flexDirection: "column", gap: "4px" }}>
        <Box>
          <CardMedia
            component="img"
            image={Ilustracion2}
          /></Box>
          <Box sx={{width:"396px", display: "flex", alignItems:"center", justifyContent: "center", flexDirection: "column"}}>
        <Typography variant="h6" color="text.primary">
          Registro de datos personales
        </Typography>
        <Typography px={5} textAlign="center" variant="body1" color="text.secondary">
          Para continuar es necesario registrar los datos personales del visitante
        </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ height: "42px" }}>
      
      <Button onClick={()=>{setOpen1(true);setOpen(false)}} variant="text">
        Registro rapido
        </Button>
      
        <Button onClick={handleClose} variant="text">
          Registro completo
        </Button>

      </DialogActions>
    </Dialog>

    


<Dialog
  sx={{
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "444px",
        maxWidth: "444px",
      },
    },
  }}
  open={open1}
  onClose={handleClose1}
>
  <DialogTitle>
   <Typography variant="h3" color="text.primary">Envio de cotización</Typography>
  </DialogTitle>
  <DialogContent sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "4px" }}>
  <FormControl>
  <FormLabel required id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
  </RadioGroup>
</FormControl>
  </DialogContent>
  <DialogActions sx={{ height: "42px" }}>
    <Button onClick={handleClose1} variant="text">
      Cancelar
    </Button>
    <Button onClick={handleClose1} variant="contained">
      Enviar Cotización
    </Button>
  </DialogActions>
</Dialog>

  </>);
}