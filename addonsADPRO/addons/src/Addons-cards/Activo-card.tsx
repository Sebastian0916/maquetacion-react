import React from "react";
import { Box, Chip, IconButton, Typography, Accordion, AccordionSummary, AccordionDetails, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Badge } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import MoreVertMenu from "../components/more-vert-menu";

export default function ActivoCard() {

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
                    borderLeft: "10px solid #8FC93A"
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
                            width: "224px",
                            display: "flex",
                            gap: "4px",
                            alignItems: "center"
                        }}>
                            <Box sx={{
                                width: "196px",
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                            }}>
                                <Typography variant="subtitle2" color="text.primary">
                                    -119 Insumo Central
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
                            width: "24px",
                            display: "flex",
                            gap: "4px",
                            alignItems: "center"
                        }}>
                            <MoreVertMenu></MoreVertMenu>
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
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px"
                                }}>
                                    <Typography
                                        variant="subtitle2"
                                        color="text.primary">
                                        ADPConfig
                                    </Typography>
                                    <Badge sx={{
                                        left: "4px"
                                    }}
                                        variant="dot"
                                        badgeContent=" "
                                        color="success">
                                    </Badge>
                                </Box>
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
                                                <TableCell align="center"><CheckCircleRoundedIcon /></TableCell>
                                                <TableCell align="center"><WarningRoundedIcon /></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell sx={{ width: "571.15px" }}>ActivaPrePre&gt;--&gt;SinDescripción</TableCell>
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
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px"
                                }}>
                                    <Typography
                                        variant="subtitle2"
                                        color="text.primary">
                                        Menu
                                    </Typography>
                                    <Badge sx={{
                                        left: "4px"
                                    }}
                                        variant="dot"
                                        badgeContent=" "
                                        color="success">
                                    </Badge>
                                </Box>
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
                                                <TableCell align="center"><CheckCircleRoundedIcon /></TableCell>
                                                <TableCell align="center"><WarningRoundedIcon /></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell><Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                        <Badge
                                                            sx={{ right: "4px" }}
                                                            variant="dot"
                                                            badgeContent=" "
                                                            color="success">
                                                        </Badge>
                                                        <Typography variant="body2">
                                                            4902&gt;--&gt;ADPRO/Mantenimiento/Insumos/Centrales/INSUMOS/INSU...
                                                        </Typography>
                                                    </Box></TableCell>
                                                <TableCell align="center">1</TableCell>
                                                <TableCell align="center">0</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                        <Badge
                                                            sx={{ right: "4px" }}
                                                            variant="dot"
                                                            badgeContent=" "
                                                            color="success">
                                                        </Badge>
                                                        <Typography variant="body2">
                                                            4902&gt;--&gt;ADPRO/Mantenimiento/Insumos/Centrales
                                                        </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell align="center">1</TableCell>
                                                <TableCell align="center">0</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                        <Badge
                                                            sx={{ right: "4px" }}
                                                            variant="dot"
                                                            badgeContent=" "
                                                            color="success">
                                                        </Badge>
                                                        <Typography variant="body2">
                                                            4902&gt;--&gt;ADPRO/Mantenimiento/Insumos/Centrales
                                                        </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell align="center"><TextsmsOutlinedIcon/></TableCell>
                                                <TableCell align="center"><TextsmsOutlinedIcon/></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                        <Badge
                                                            sx={{ right: "4px" }}
                                                            variant="dot"
                                                            badgeContent=" "
                                                            color="success">
                                                        </Badge>
                                                        <Typography variant="body2">
                                                            4902&gt;--&gt;ADPRO/Mantenimiento/Insumos/Centrales
                                                        </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell align="center">1</TableCell>
                                                <TableCell align="center">0</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                        <Badge
                                                            sx={{ right: "4px" }}
                                                            variant="dot"
                                                            badgeContent=" "
                                                            color="success">
                                                        </Badge>
                                                        <Typography variant="body2">
                                                            4902&gt;--&gt;ADPRO/Mantenimiento/Insumos/Centrales
                                                        </Typography>
                                                    </Box>
                                                </TableCell>
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