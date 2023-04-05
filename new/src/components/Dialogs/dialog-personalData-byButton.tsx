import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Autocomplete, Box, Button, CardMedia, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup, TextField } from "@mui/material";
import Typography from '@mui/material/Typography';
import Ilustracion2 from "../../assets/ilustracion2.png"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const options = ['Seleccione una opción'];

export default function DialogPersonalDataByIconButton() {

  // Registro de datos personales
  const [open, setOpen] = React.useState(false);
  // Registro Rapido
  const [open1, setOpen1] = React.useState(false);
  // Envio de cotización - registro rapido
  const [open2, setOpen2] = React.useState(false);

  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (<>



    <Button variant="contained" onClick={() => setOpen(true)} size="small">Detalle Cotizacion</Button>


    {/* Registro de datos personales */}

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
      onClose={() => setOpen(false)}
    >
      <DialogContent sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "4px" }}>
        <Box>
          <CardMedia
            component="img"
            image={Ilustracion2}
          /></Box>
        <Box sx={{ width: "396px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <Typography variant="h6" color="text.primary">
            Registro de datos personales
          </Typography>
          <Typography px={5} textAlign="center" variant="body1" color="text.secondary">
            Para continuar es necesario registrar los datos personales del visitante
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ height: "42px" }}>

        <Button onClick={() => { setOpen1(true); setOpen(false) }} variant="text">
          Registro rapido
        </Button>

        <Button onClick={() => setOpen(false)} variant="text">
          Registro completo
        </Button>

      </DialogActions>
    </Dialog>


    {/* Registro rapido */}

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
      onClose={() => setOpen1(false)}
    >
      <DialogTitle sx={{ height: "32px" }}>
        <Typography variant="h3" color="text.primary">Envio de cotización</Typography>
      </DialogTitle>
      <DialogContent sx={{ width: "396px", height: "102px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "4px" }}>
        <FormControl fullWidth sx={{ pt: "4px", display: "flex", gap: "4px" }}>
          <TextField
            fullWidth
            required
            id="correo-electronico"
            label="Correo electrónico"
            defaultValue="viviana.contreras@sinco.com.co"
          />

          <FormLabel required id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Masculino"
            name="radio-buttons-group"
          >
            <Box>
              <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
              <FormControlLabel value="Femenino" control={<Radio />} label="Femenino" />
            </Box>
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions sx={{ height: "42px" }}>
        <Button onClick={() => setOpen1(false)} variant="text">
          Cancelar
        </Button>
        <Button onClick={() => { setOpen1(false); setOpen2(true) }} variant="contained">
          Enviar Cotización
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
      open={open2}
      onClose={() => setOpen2(false)}
    >
      <DialogTitle sx={{ height: "32px" }}>
        <Typography variant="h3" color="text.primary">Envio de cotización</Typography>
      </DialogTitle>
      <DialogContent sx={{ height: "60px", overflowY: "scroll", display: "flex", justifyContent: "center", flexDirection: "column", gap: "4px" }}>
        <Box sx={{ display: "flex", gap: "4px", alignItems: "center", justifyContent: "center" }}>
          <Autocomplete
            size="small"
            value={value}
            onChange={(event: any, newValue: string | null) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}

            renderInput={(params) => <TextField {...params} label="Tipo de unidad" />}
          />
          <FormControl>
            <InputLabel htmlFor="Fecha">Fecha</InputLabel>
            <OutlinedInput
              id="Fecha"
              startAdornment={<InputAdornment position="start"><CalendarTodayIcon></CalendarTodayIcon></InputAdornment>}
              label="Fecha"
              defaultValue={"01/01/2023"}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="Valor">Valor</InputLabel>
            <OutlinedInput
              id="Valor"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              label="Valor"
            />
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions sx={{ height: "42px" }}>
        <Button onClick={() => setOpen2(false)} variant="text">
          Cancelar
        </Button>
        <Button onClick={() => setOpen2(false)} variant="contained">
          Enviar Cotización
        </Button>
      </DialogActions>
    </Dialog>

  </>);
}