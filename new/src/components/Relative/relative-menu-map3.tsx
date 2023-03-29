import { Button, Menu, MenuItem, Radio, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import * as React from 'react';

export default function RelativeMenuMap3() {
    const [openMenu3, setOpenMenu3] = useState(false)

    const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
    const open3 = Boolean(anchorEl3);
    const handleClick3 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl3(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl3(null);
    };
    return (<>
        <Radio sx={{ position: "relative", top: "210px", color: "#fff", '&.Mui-checked': { color: "#fff" }, left: "326.12px" }} onMouseEnter={() => setOpenMenu3(true)} ></Radio>
        {openMenu3 && <Box onMouseLeave={() => setOpenMenu3(false)}>
            <Button
                size="large"
                variant="text"
                sx={{
                    top: "172.5px", left: "432.12px", backgroundColor: "#fff",
                    boxShadow: "0px 1px 3px rgba(24, 39, 75, 0.12), 0px 1px 1px -1px rgba(24, 39, 75, 0.14), 0px 2px 1px -2px rgba(24, 39, 75, 0.2)",
                }}
                id="basic-button"
                aria-controls={open3 ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open3 ? 'true' : undefined}
                onClick={handleClick3}
            >
                <Typography variant="subtitle2" color="text.primary">
                    Chicala 3
                </Typography>
            </Button>
            <Menu
                sx={{ ".MuiMenu-list": { width: "367px" } }}
                id="basic-menu"
                anchorEl={anchorEl3}
                open={open3}
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