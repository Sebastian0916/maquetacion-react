import * as React from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import { Alert, Box, Button, Chip, DialogActions, DialogContent, IconButton } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Typography from '@mui/material/Typography';


const handleDelete = () => { };

export default function DialogChipByIconButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  return (<>


    <IconButton onClick={handleClickOpen} size="small"><VisibilityIcon fontSize="inherit"></VisibilityIcon></IconButton>

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
        <Typography variant="h3" color="text.primary"> Unidades añadidas </Typography>
      </DialogTitle>
      <DialogContent sx={{ height: "113px", overflowY: "scroll", display: "flex", justifyContent: "center", flexDirection: "column", gap: "4px" }}>
        <Box sx={{height:"90px"}}>
        <Alert severity="info"
        >
          Recuerda que al seleccionar una unidad esta quedará reservada a la visita.
        </Alert>
        <Box sx={{ display: "flex", gap: "4px", flexWrap: "wrap", mt:"8px" }}>
          <Chip sx={{ width: '127.3px' }} size="small" label="APT 203 - TOR..." title="APT 203 - Torre 1 - Unidad 6" onDelete={handleDelete} />
          <Chip sx={{ width: '127.3px' }} size="small" label="APT 203 - TOR..." title="APT 203 - Torre 1 - Unidad 6" onDelete={handleDelete} />
          <Chip sx={{ width: '127.3px' }} size="small" label="APT 203 - TOR..." title="APT 203 - Torre 1 - Unidad 6" onDelete={handleDelete} />
          <Chip sx={{ width: '127.3px' }} size="small" label="APT 203 - TOR..." title="APT 203 - Torre 1 - Unidad 6" onDelete={handleDelete} />
          <Chip sx={{ width: '127.3px' }} size="small" label="APT 203 - TOR..." title="APT 203 - Torre 1 - Unidad 6" onDelete={handleDelete} />
          <Chip sx={{ width: '127.3px' }} size="small" label="APT 203 - TOR..." title="APT 203 - Torre 1 - Unidad 6" onDelete={handleDelete} />
          <Chip sx={{ width: '127.3px' }} size="small" label="APT 203 - TOR..." title="APT 203 - Torre 1 - Unidad 6" onDelete={handleDelete} />
          <Chip sx={{ width: '127.3px' }} size="small" label="APT 203 - TOR..." title="APT 203 - Torre 1 - Unidad 6" onDelete={handleDelete} />
          <Chip sx={{ width: '127.3px' }} size="small" label="APT 203 - TOR..." title="APT 203 - Torre 1 - Unidad 6" onDelete={handleDelete} />
          <Chip sx={{ width: '127.3px' }} size="small" label="APT 203 - TOR..." title="APT 203 - Torre 1 - Unidad 6" onDelete={handleDelete} />
          <Chip sx={{ width: '127.3px' }} size="small" label="APT 203 - TOR..." title="APT 203 - Torre 1 - Unidad 6" onDelete={handleDelete} />
          <Chip sx={{ width: '127.3px' }} size="small" label="APT 203 - TOR..." title="APT 203 - Torre 1 - Unidad 6" onDelete={handleDelete} />
        </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{height:"42px"}}>
        <Button onClick={()=>setOpen(false)} variant="text">
          Cancelar
        </Button>
        <Button onClick={()=>setOpen(false)} variant="contained">
          Guardar
        </Button>
        
      </DialogActions>
    </Dialog>

  </>);
}