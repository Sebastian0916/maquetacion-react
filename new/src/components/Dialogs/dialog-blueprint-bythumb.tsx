import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Image13Thumb from '../../assets/image13-thumb.png'
import { Button, IconButton } from '@mui/material';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { CardMedia } from '@mui/material';
import Image13 from '../../assets/image13.png'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ImageButton = styled(ButtonBase)(() => ({
  position: 'relative',
  height: 90,
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.6,
    },
    '& .MuiButton-root': {
      opacity: 1,
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 100px',
});

const Image = styled('span')(() => ({
  position: 'absolute',
  width:"130px",
  left: "-15px",
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: "#1E62A1"
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.white,
  opacity: 0,
  transition: theme.transitions.create('opacity'),
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(4),
    },
  }));
    

export default function BlueprintThumbnail() {

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

  return (<>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100px' }}>
        <ImageButton
          disableRipple
          style={{
            width: "100px",
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${Image13Thumb})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
    
            <Button onClick={handleClickOpen} startIcon={<MapOutlinedIcon />} size='small' variant='outlined' sx={{opacity:0, mx:"auto"}}>Ver Plano</Button>
          
          </Image>
        </ImageButton>
    </Box>
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
  </>);
}