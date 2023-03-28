import { Button, Menu, MenuItem, Radio, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import * as React from 'react';

export default function RelativeMenuMap1() {
    const [openMenu, setOpenMenu] = useState(false)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (<>
        <Radio sx={{ position: "relative", top: "50px", color: "#fff", '&.Mui-checked': { color: "#fff" }, left: "42.12px" }} onMouseEnter={() => setOpenMenu(true)}></Radio>
        {openMenu && <Box onMouseLeave={() => setOpenMenu(false)}>
            <Button
                size="large"
                variant="text"
                sx={{
                    top: "12.5px", left: "70.12px", backgroundColor: "#fff",
                    boxShadow: "0px 1px 3px rgba(24, 39, 75, 0.12), 0px 1px 1px -1px rgba(24, 39, 75, 0.14), 0px 2px 1px -2px rgba(24, 39, 75, 0.2)",
                }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Typography variant="subtitle2" color="text.primary">
                    Chicala 1
                </Typography>
            </Button>
            <Menu
                sx={{ ".MuiMenu-list": { width: "367px" } }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem selected={true} onClick={handleClose}>
                    <Typography sx={{ width: "311px" }} variant="subtitle2" color="text.primary">
                        Chicala 1
                    </Typography><CheckIcon color="info" />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Typography variant="subtitle2" color="text.primary">
                        Chicala 2
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Typography variant="subtitle2" color="text.primary">
                        Chicala 3
                    </Typography>
                </MenuItem>
            </Menu>
        </Box>}
    </>)
}