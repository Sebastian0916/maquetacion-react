import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CardMedia } from '@mui/material';
import Image13 from '../assets/image13.png'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(4),
  },
}));

export default function DialogBlueprint() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <IconButton onClick={handleClickOpen}>
            <MapOutlinedIcon fontSize="small" color="primary" />
        </IconButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "736px",  // Set your width here
            },
          },
        }}
      >
        <DialogContent sx={{width:"720px", height:"465.28px",display:"flex", flexDirection:"row", alignItems:"center"}}>
          <IconButton><ChevronLeftIcon/></IconButton>
          <CardMedia width="600px" height="449.28px" component="img" image={Image13}></CardMedia>
          <IconButton><ChevronRightIcon/></IconButton>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>
            Cerrar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
