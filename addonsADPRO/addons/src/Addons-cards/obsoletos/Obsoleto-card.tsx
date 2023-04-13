import React from "react";
import { Box, Chip, IconButton, Typography, Accordion, AccordionSummary, AccordionDetails, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

export default function ObsoletoCard() {

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
                    borderLeft: "10px solid #1018402E"
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
                                <Typography variant="subtitle2" color="text.secondary">
                                -99 Nueva versión de informes de contratos
                                </Typography>
                            </Box>
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
                                    color="text.secondary">
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
                                                <TableCell sx={{width:"571.15px"}}><Typography variant="subtitle2" color="text.secondary">Descripción</Typography></TableCell>
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
                                    color="text.secondary">
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
                                                <TableCell sx={{width:"571.15px"}}><Typography variant="subtitle2" color="text.secondary">Descripción</Typography></TableCell>
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
                </AccordionDetails>
            </Accordion>
        </Box>
    </>)
}