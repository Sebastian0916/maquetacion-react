import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const options = ['Chicala Etapa 1 - Altos de Montecielo del norte I', 'Chicala Etapa 1 - Altos de Montecielo del norte II','Chicala Etapa 1 - Altos de Montecielo del norte III','Chicala Etapa 1 - Altos de Montecielo del norte IV','Chicala Etapa 1 - Altos de Montecielo del norte V','Chicala Etapa 1 - Altos de Montecielo del norte VI','Chicala Etapa 1 - Altos de Montecielo del norte VII'];

export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup size='small' sx={{width:"272px", height:"32px"}} variant="contained" ref={anchorRef} aria-label="split button">
        <Button sx={{width:"220px"}} onClick={handleClick}><Link style={{color:"#fff", textDecoration: 'none'}} to="/SeleccionDelInmueble"><Typography variant='subtitle2' sx={{width:"188px", overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>{options[selectedIndex]}</Typography></Link></Button>
        <Button sx={{width:"52px"}}
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="Chicala Etapa 1 - Altos de Montecielo del norte I"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}