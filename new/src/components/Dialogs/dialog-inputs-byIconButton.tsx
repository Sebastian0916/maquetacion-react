import * as React from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import { Box, Button, DialogActions, DialogContent, OutlinedInput, InputAdornment, FormControl, InputLabel, Autocomplete, TextField } from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';

const options = ['Separación'];

export default function DialogInputsByIconButton() {
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = (value: string) => {
    setOpen1(false);
  };

  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState('');


  return (<>


    <Button
    onClick={handleClickOpen1}
      size="small"
      variant="text"
      startIcon={<AddIcon />}>
      Agregar concepto
    </Button>

    <Dialog
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            maxWidth: "444px",
          },
        },
      }}
      open={open1}
      onClose={handleClose1}
    >
      <DialogTitle>
        <Typography variant="h3" color="text.primary"> Agregar concepto </Typography>
      </DialogTitle>
      <DialogContent sx={{ height: "60px", overflowY: "scroll", display: "flex", justifyContent: "center", flexDirection: "column", gap: "4px" }}>
        <Box sx={{ display:"flex", gap:"4px", alignItems:"center", justifyContent:"center" }}>
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
        <Button onClick={() => setOpen1(false)} variant="text">
          Cancelar
        </Button>
        <Button onClick={() => setOpen1(false)} variant="contained">
          Guardar
        </Button>

      </DialogActions>
    </Dialog>

  </>);
}