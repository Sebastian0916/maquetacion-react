import React from "react";
import { Box, Chip, IconButton, Typography, Accordion, AccordionSummary, AccordionDetails, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

export default function DesactualizadoCard() {

    const [expand, setExpand] = React.useState(false);
    const toggleAccordion = () => {
        setExpand((prev) => !prev);
    };

    return (<>
        <Box>
            <Accordion
                expanded={expand}
                sx={{
                    width: "779,6px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    borderLeft: "10px solid #FFD25E"
                }}>
                {/* CardContent */}
                <AccordionSummary
                    sx={{
                        width: "757px",
                        display: "flex",
                        flexDirection: "row-reverse",
                        justifyContent: "space-between",
                        gap: "8px",
                        alignItems: "center"
                    }}
                    expandIcon={<ExpandMoreIcon
                        color="primary"
                        onClick={toggleAccordion}
                    />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Box sx={{
                        width: "716px",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "8px",
                        alignItems: "center",
                    }}>
                        <Box sx={{
                            width: "524px",
                            display: "flex",
                            gap: "4px",
                            alignItems: "center"
                        }}>
                            <Box sx={{
                                width: "496px",
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                            }}>
                                <Typography variant="subtitle2" color="text.primary">
                                -135 Observaciones por insumo en el formato de impresión de OC
                                </Typography>
                                <IconButton
                                    title="Addon no estándar, configurable desde encuestas de configuración, afecta procesos de integración contable y/o solo se activa para esquemas de negocio específicos."
                                ><InfoOutlinedIcon color="primary" />
                                </IconButton>
                                <Chip
                                    title="Módulo requerido"
                                    size="small"
                                    variant="outlined"
                                    label="A&F"
                                    color="primary"
                                />
                            </Box>
                        </Box>
                        <Box sx={{
                            width: "92px",
                            display: "flex",
                            gap: "4px",
                            alignItems: "center"
                        }}>
                            <Button variant="text">Activar</Button>
                            <IconButton>
                                <MoreVertOutlinedIcon color="primary" />
                            </IconButton>
                        </Box>
                    </Box>
                </AccordionSummary>
                <AccordionDetails sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px"
                }}>
                    <Box sx={{
                        width: "766px",
                        border: "1px solid rgba(16, 24, 64, 0.18)",
                        borderRadius: "4px"
                    }}>
                        <Accordion>
                            <AccordionSummary
                                sx={{
                                    "$.Mui-expanded": { height: "58px" },
                                    width: "757px",
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    justifyContent: "space-between",
                                    gap: "8px",
                                    alignItems: "center"
                                }}
                                expandIcon={<ExpandMoreIcon
                                    color="primary"

                                />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography
                                    variant="subtitle2"
                                    color="text.primary">
                                    ADPConfig
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{
                                "&.MuiAccordionDetails-root": { p: "0 16px 16px" }
                            }}>
                                <Box sx={{
                                    borderTop: "2px solid #f5f5f5",
                                    borderTopStyle: "dashed"
                                }}></Box>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{width:"571.15px"}}>Descripción</TableCell>
                                                <TableCell align="center"><CheckCircleRoundedIcon/></TableCell>
                                                <TableCell align="center"><WarningRoundedIcon/></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>ActivaPrePre -- SinDescripción</TableCell>
                                                <TableCell align="center">1</TableCell>
                                                <TableCell align="center">0</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box sx={{
                        width: "766px",
                        border: "1px solid rgba(16, 24, 64, 0.18)",
                        borderRadius: "4px"
                    }}>
                        <Accordion>
                            <AccordionSummary
                                sx={{
                                    width: "757px",
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    justifyContent: "space-between",
                                    gap: "8px",
                                    alignItems: "center"
                                }}
                                expandIcon={<ExpandMoreIcon
                                    color="primary"

                                />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography
                                    variant="subtitle2"
                                    color="text.primary">
                                    Menu
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{
                                "&.MuiAccordionDetails-root": { p: "0 16px 16px" }
                            }}>
                                <Box sx={{
                                    borderTop: "2px solid #f5f5f5",
                                    borderTopStyle: "dashed"
                                }}></Box>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Descripción</TableCell>
                                                <TableCell align="center"><CheckCircleRoundedIcon/></TableCell>
                                                <TableCell align="center"><WarningRoundedIcon/></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>4902 -- ADPRO/Mantenimiento/Insumos/Centrales/INSUMOS/INSU...</TableCell>
                                                <TableCell align="center">1</TableCell>
                                                <TableCell align="center">0</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>4902 -- ADPRO/Mantenimiento/Insumos/Centrales</TableCell>
                                                <TableCell align="center">1</TableCell>
                                                <TableCell align="center">0</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>4902 -- ADPRO/Mantenimiento/Insumos/Centrales</TableCell>
                                                <TableCell align="center">1</TableCell>
                                                <TableCell align="center">0</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>4902 -- ADPRO/Mantenimiento/Insumos/Centrales</TableCell>
                                                <TableCell align="center">1</TableCell>
                                                <TableCell align="center">0</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>4902 -- ADPRO/Mantenimiento/Insumos/Centrales</TableCell>
                                                <TableCell align="center">1</TableCell>
                                                <TableCell align="center">0</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    </>)
}