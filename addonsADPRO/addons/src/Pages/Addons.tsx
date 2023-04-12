import { Box, Card, CardContent, Radio, InputAdornment, FormControl, FormControlLabel, InputLabel, OutlinedInput, Divider, Checkbox, Badge, Typography } from "@mui/material";
import FiltrosVigentes from "../Addons-cards/filtros/todos";
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';

export default function Addons() {

    const [selectedValue, setSelectedValue] = React.useState('vigentes');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (<>
        <Box sx={{ width: "1224px", height: "578", display: "flex", ml: "21px", mt: "17px" }}>
            <Box sx={{
                float: "left",
                width: "820px",
                height: "578px",
                overflowY: "scroll",
                display: "flex",
                gap: "8px"
            }}>
                <Box sx={{
                    width: "798px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px"
                }}>
                    {/* Filters is going to set up here */}
                    <FiltrosVigentes />
                </Box>
            </Box>
            <Box sx={{ width: "351px", display: "flex", flexDirection: "column", gap: "8px", ml: "12px" }}>
                <Card sx={{
                    float: "right",
                    width: "351px",
                    height: "233px",
                }}>
                    <CardContent sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "8px"
                    }}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="buscar-addon">Buscar Addon</InputLabel>
                            <OutlinedInput
                                id="buscar-addon"
                                type='text'
                                endAdornment={
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                }
                                label="Buscar Addon"
                            />
                        </FormControl>
                        <Box>
                            <Box>
                                <FormControlLabel
                                    value="vigentes"
                                    control={<Radio
                                        checked={selectedValue === 'vigentes'}
                                        onChange={handleChange}
                                        value="vigentes"
                                        name="vigentes"
                                        inputProps={{ 'aria-label': 'Vigentes' }}
                                    />} label="Vigentes" />
                                <FormControlLabel
                                    value="female"
                                    control={<Radio
                                        checked={selectedValue === 'obsoletos'}
                                        onChange={handleChange}
                                        value="obsoletos"
                                        name="vigentes"
                                        inputProps={{ 'aria-label': 'Obsoletos' }}
                                    />} label="Obsoletos" />
                                <Divider/>
                                <Box sx={{width:"319px", height:"128px",display:"flex", flexDirection:"column", justifyContent:"center"}}>
                                    <Box sx={{display:"flex", alignItems:"center",width:"82px", height:"32px"}}>
                                        <Checkbox/>
                                        <Box sx={{display:"flex", alignItems:"center", gap:"8px"}}><Badge color="success" badgeContent=" " variant="dot" sx={{mr:"4px"}} /><Typography variant="body1" color="text.primary">Activo</Typography></Box>
                                    </Box>
                                    <Box sx={{display:"flex", alignItems:"center",width:"82px", height:"32px"}}>
                                        <Checkbox/>
                                        <Box sx={{display:"flex", alignItems:"center", gap:"8px"}}><Badge color="error" badgeContent=" " variant="dot" sx={{mr:"4px"}} /><Typography variant="body1" color="text.primary">Inactivo</Typography></Box>
                                    </Box>
                                    <Box sx={{display:"flex", alignItems:"center",width:"82px", height:"32px"}}>
                                        <Checkbox/>
                                        <Box sx={{display:"flex", alignItems:"center", gap:"8px"}}><Badge badgeContent=" " variant="dot" sx={{mr:"4px",".MuiBadge-badge": { backgroundColor: "#FFD25E!important" }}} /><Typography variant="body1" color="text.primary">Desactualizado</Typography></Box>
                                    </Box>
                                    <Box sx={{display:"flex", alignItems:"center",width:"82px", height:"32px"}}>
                                        <Checkbox/>
                                        <Box sx={{display:"flex", alignItems:"center", gap:"8px"}}><Badge badgeContent=" " variant="dot" sx={{mr:"4px",".MuiBadge-badge": { backgroundColor: "#B136B4!important" }}} /><Typography variant="body1" color="text.primary">Error</Typography></Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>

                <Card sx={{
                    float: "right",
                    width: "351px",
                    height: "65px",
                }}>

                </Card>

                <Card sx={{
                    float: "right",
                    width: "351px",
                    height: "106px",
                }}>

                </Card>
            </Box>
        </Box>
    </>)
}