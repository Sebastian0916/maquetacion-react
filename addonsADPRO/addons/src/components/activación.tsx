import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Divider, Alert, Checkbox, TextField, Chip } from "@mui/material"
import React from "react"
export default function ActivacionAddon() {

    const [openActivate, setOpenActivate] = React.useState(false)

    const handleOpenActivate = () => {
        setOpenActivate(true)
    }

    const handleCloseActivate = () => {
        setOpenActivate(false)
    }

    const [openActivate2, setOpenActivate2] = React.useState(false)

    const handleOpenActivate2 = () => {
        setOpenActivate2(true)
    }

    const handleCloseActivate2 = () => {
        setOpenActivate(false)
    }

    const [activateCheck1, setActivateCheck1] = React.useState(false)

    const handleCheck1 = () => {
        setActivateCheck1(true)
    }

    const handleDeactivateCheck1 = () => {
        setActivateCheck1(false)
    }

    const [activateCheck2, setActivateCheck2] = React.useState(false)

    const handleCheck2 = () => {
        setActivateCheck2(true)
    }
    const handleDeactivateCheck2 = () => {
        setActivateCheck2(false)
    }

    return (<>
        <Button variant="text" onClick={() => handleOpenActivate()}>Activar</Button>
        <Dialog
            fullWidth
            open={openActivate}
            onClose={handleCloseActivate}
        >
            <DialogTitle>
                <Typography variant="h6" color="text.primary">Activación</Typography>
            </DialogTitle>
            <DialogContent sx={{ display: "flex", flexDirection: "column", gap: "8px" }} >
                <Typography variant="subtitle2" color="primary">Modo de activación</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                            onChange={() => {
                                handleCheck1();
                                handleDeactivateCheck2()
                            }}
                            checked={
                                activateCheck1
                            } />
                        <Typography>MAC</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                            onChange={() => {
                                handleCheck2();
                                handleDeactivateCheck1()
                            }}
                            checked={
                                activateCheck2
                            } />
                        <Typography>DOA</Typography>
                    </Box>
                </Box>
                {activateCheck1 &&
                    <Alert severity="info">
                        <Typography variant="body2" color="text.primary">
                            Genera la migración inmediata de los accesos
                        </Typography>
                    </Alert>}
                {activateCheck2 &&
                    <Alert severity="warning">
                        <Typography variant="body2" color="text.primary">
                            Desactiva opciones antiguas y migra accesos
                        </Typography>
                    </Alert>}
                <Divider />
                <Typography variant="subtitle2" color="primary">Tipo de producción</Typography>
                <Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox />
                        <Typography>Sinco</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox />
                        <Typography>SincoConsolidacion</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox />
                        <Typography>SincoPrueba</Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="text" onClick={()=>setOpenActivate2(false)}>
                    Cancelar
                </Button>

                <Button variant="contained" onClick={() => { setOpenActivate(false); setOpenActivate2(true)}}>
                    Activar
                </Button>
            </DialogActions>
        </Dialog>
        <Dialog
            fullWidth
            open={openActivate2}
            onClose={()=>setOpenActivate2(false)}
        >
            <DialogTitle>
                <Typography variant="h6" color="text.primary">
                    Confirmación
                </Typography>
            </DialogTitle>
            <DialogActions>
                <Button onClick={()=>setOpenActivate2(false)} variant="text">Cancelar</Button>
                <Button onClick={()=>setOpenActivate2(false)} variant="contained">Aceptar</Button>
            </DialogActions>
        </Dialog>
    </>)
}