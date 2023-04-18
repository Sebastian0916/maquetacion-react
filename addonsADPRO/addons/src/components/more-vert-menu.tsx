import React from "react"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { IconButton, Menu, MenuItem, Typography, Box, Dialog, DialogTitle, DialogActions, Alert, AlertTitle, Button, DialogContent, Divider, Card, CardContent } from '@mui/material';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import HistoryCard from "./history-card";
import HistoryCardAlt from "./history-card-alt";
import InfoIcon from '@mui/icons-material/Info';

export default function MoreVertMenu() {

    const [openD, setOpenD] = React.useState(false);

    const handleClickOpenD = () => {
        setOpenD(true);
    };

    const handleCloseD = () => {
        setOpenD(false);
    };

    const [openDD, setOpenDD] = React.useState(false);

    const handleClickOpenDD = () => {
        setOpenDD(true);
    };

    const handleCloseDD = () => {
        setOpenDD(false);
    };

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
            <MenuItem onClick={() => { setOpenMenu(null); handleClickOpenD() }}><Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}><AssignmentLateOutlinedIcon /><Typography>Más información</Typography></Box></MenuItem>
            <MenuItem onClick={() => { setOpenMenu(null); handleClickOpenDD() }}><Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}><HistoryOutlinedIcon /><Typography>Historial</Typography></Box></MenuItem>
            <MenuItem onClick={() => setOpenMenu(null)}><Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}><PictureAsPdfOutlinedIcon /><Typography>Descargar boletín</Typography></Box></MenuItem>
        </Menu>
        <Dialog
            open={openD}
            onClose={handleCloseD}
        >
            <DialogTitle>
                <Typography variant="h6" color="text.primary">
                    Información del Addon
                </Typography>
            </DialogTitle>
            <DialogContent sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <Alert icon={<InfoIcon fontSize="medium" />} severity="info">
                    <AlertTitle>Descripción del Addon</AlertTitle>
                    <Typography sx={{ height: "40px" }} variant="body2" color="text.primary">
                        Reemplazado y estandarizado con el 60 nueva versión multiexplorador en pedidos de almacén, es parametrizable con la encuesta de configuración inicial.
                    </Typography>
                    <Typography sx={{ height: "40px" }} variant="body2" color="text.primary">
                        Esta nueva funcionalidad exige a los usuarios diligenciar la fecha de requerimiento de un pedido de obra, para guardar el registro en el sistema.
                    </Typography>
                </Alert>
                <Divider />
                <Box>
                    <Typography variant="subtitle2" color="primary">Costos de instalación</Typography>
                    <Box sx={{ display: "flex", gap: "8px", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <Typography variant="subtitle2" color="text.primary">Horas instalación:</Typography>
                            <Typography variant="body2" color="text.primary"> 10hrs</Typography>
                        </Box>
                        <Divider orientation="vertical" sx={{ height: "18px" }} />
                        <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <Typography variant="subtitle2" color="text.primary">Horas base de datos:</Typography>
                            <Typography variant="body2" color="text.primary">10hrs</Typography>
                        </Box>
                        <Divider orientation="vertical" sx={{ height: "18px" }} />
                        <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <Typography variant="subtitle2" color="text.primary">Fecha publicación:</Typography>
                            <Typography variant="body2" color="text.primary">01/01/2023</Typography>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="text" onClick={handleCloseD}>Cerrar</Button>
            </DialogActions>
        </Dialog>

        <Dialog
            fullWidth
            open={openDD}
            onClose={handleCloseDD}
        >
            <DialogTitle>
                <Typography variant="h6" color="text.primary">
                    Historial
                </Typography>
            </DialogTitle>
            <DialogContent sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <Box sx={{ display: "flex", gap: "8px" }}>
                    <Typography variant="subtitle2" color="primary">Addon:</Typography>
                    <Typography variant="body2" color="text.primary">119 Insumo central</Typography>
                </Box>
                <Box sx={{ width: "552px", height: "289px", overflowY: "scroll" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <HistoryCard/>
                        <HistoryCardAlt/>
                        <HistoryCard/>
                        <HistoryCard/>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="text" onClick={handleCloseDD}>Cerrar</Button>
            </DialogActions>
        </Dialog >
    </>)
}