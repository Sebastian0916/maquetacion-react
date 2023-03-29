import { Button, Menu, MenuItem, Radio, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import * as React from 'react';

export default function RelativeMenuMap2() {
    const [openMenu2, setOpenMenu2] = useState(false)

    const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    return (<>
        <Radio sx={{ position: "relative", top: "150px", color: "#fff", '&.Mui-checked': { color: "#fff" }, left: "218.12px" }} onMouseEnter={() => setOpenMenu2(true)}></Radio>
        {openMenu2 && <Box onMouseLeave={() => setOpenMenu2(false)}>
            <Button
                size="large"
                variant="text"
                sx={{
                    top: "113.5px", left: "286.12px", backgroundColor: "#fff",
                    boxShadow: "0px 1px 3px rgba(24, 39, 75, 0.12), 0px 1px 1px -1px rgba(24, 39, 75, 0.14), 0px 2px 1px -2px rgba(24, 39, 75, 0.2)",
                }}
                id="basic-button"
                aria-controls={open2 ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? 'true' : undefined}
                onClick={handleClick2}
            >
                <Typography variant="subtitle2" color="text.primary">
                    Chicala 2
                </Typography>
            </Button>
            <Menu
                sx={{ ".MuiMenu-list": { width: "367px" } }}
                id="basic-menu"
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose2}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem  onClick={handleClose2}>
                    <Typography  variant="subtitle2" color="text.primary">
                        Chicala 1
                    </Typography>
                </MenuItem>
                <MenuItem selected={true} onClick={handleClose2}>
                    <Typography sx={{ width: "311px" }} variant="subtitle2" color="text.primary">
                        Chicala 2
                    </Typography><CheckIcon color="info" />
                </MenuItem>
                <MenuItem onClick={handleClose2}>
                    <Typography variant="subtitle2" color="text.primary">
                        Chicala 3
                    </Typography>
                </MenuItem>
            </Menu>
        </Box>}
    </>)
}