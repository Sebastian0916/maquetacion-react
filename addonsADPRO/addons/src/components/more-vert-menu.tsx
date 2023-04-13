import React from "react"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { IconButton, Menu, MenuItem, Typography, Box } from '@mui/material';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';

export default function MoreVertMenu() {
    const [openMenu, setOpenMenu] = React.useState<any | null>(null)
    return (<>
        <IconButton
            aria-haspopup="true"
            aria-controls="open-menu"
            onClick={e => setOpenMenu(e.currentTarget)}
        >
            <MoreVertOutlinedIcon color="primary" />
        </IconButton>
        <Menu
            id="open-menu"
            open={Boolean(openMenu)}
            anchorEl={openMenu}
            onClose={() => setOpenMenu(null)}
            disableAutoFocus
        >
            <MenuItem onClick={() => setOpenMenu(null)}><Box sx={{display:"flex", alignItems:"center", gap:"8px"}}><AssignmentLateOutlinedIcon/><Typography>Más información</Typography></Box></MenuItem>
            <MenuItem onClick={() => setOpenMenu(null)}><Box sx={{display:"flex", alignItems:"center", gap:"8px"}}><HistoryOutlinedIcon/><Typography>Historial</Typography></Box></MenuItem>
            <MenuItem onClick={() => setOpenMenu(null)}><Box sx={{display:"flex", alignItems:"center", gap:"8px"}}><PictureAsPdfOutlinedIcon/><Typography>Descargar boletín</Typography></Box></MenuItem>
        </Menu>
    </>)
}