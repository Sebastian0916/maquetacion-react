import * as React from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import { Alert, Box, Button, DialogActions, DialogContent, OutlinedInput, InputAdornment, FormControl, InputLabel } from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';

export default function DialogInputByIconButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  return (<>


    <Button
      onClick={handleClickOpen}
      size="small"
      variant="text"
      startIcon={<EditIcon />}>
      Personalizar valor
    </Button>

    <Dialog
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            maxWidth: "444px",
          },
        },
      }}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        <Typography variant="h3" color="text.primary"> Transcribir Valor </Typography>
      </DialogTitle>
      <DialogContent sx={{ height: "73px", overflowY: "scroll", display: "flex", justifyContent: "center", flexDirection: "column", gap: "4px" }}>
        <Box sx={{ height: "70px" }}>
          <Alert severity="info"
          >
            Ingresa un valor personalizado para todas las cuotas.
          </Alert>
          <FormControl fullWidth sx={{mt:"8px"}}>
            <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              label="Valor"
            />
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions sx={{ height: "42px" }}>
        <Button onClick={() => setOpen(false)} variant="text">
          Cancelar
        </Button>
        <Button onClick={() => setOpen(false)} variant="contained">
          Guardar
        </Button>

      </DialogActions>
    </Dialog>

  </>);
}