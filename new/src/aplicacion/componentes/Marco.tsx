import {
  Box,
  IconButton,
  Stack,
  ListItem,
  ListItemIcon,
  Divider,
  Typography,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Products from "../../assets/Products.png";
import { Outlet, Link } from "react-router-dom";

import React from "react";

const Marco = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        position="fixed"
        sx={{ width: "-webkit-fill-available", zIndex: 1 }}
      >
        <Stack
          sx={{ backgroundColor: "#ffffff", width: "76px" }}
          flexDirection="column"
          gap="12px"
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBlock: "8px",
              paddingInline: 0,
            }}
          >
            <Stack alignItems="center">
              <Stack justifyContent="center" alignContent="center">
                <IconButton color="primary">
                  <MenuIcon />
                </IconButton>
              </Stack>
              <Stack flexDirection="column">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => {
                  return (
                    <ListItem>
                      <ListItemIcon sx={{ justifyContent: "center" }}>
                        <img src={Products} alt="" />
                      </ListItemIcon>
                    </ListItem>
                  );
                })}
                <Box mt={3.5} display="flex" justifyContent="center">
                  <IconButton size="medium" color="primary">
                    <ExpandMoreIcon />
                  </IconButton>
                </Box>
              </Stack>
            </Stack>
          </ul>
        </Stack>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          sx={{
            backgroundColor: "#1E62A1",
            width: "-webkit-fill-available",
            height: "78px",
          }}
          gap="8px"
          py="12px"
          pl="24px"
          pr="12px"
        >
          <Stack flexDirection="column" justifyContent="center">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              gap={3}
            >
              <Stack flexDirection="column" alignItems="end">
                <Typography variant="body1" color="secondary.contrastText">
                  Sincosoft S.A.S
                </Typography>
                <Typography color="secondary.contrastText" variant="body2">
                  Nogal Etapa I
                </Typography>
              </Stack>
              <Divider
                orientation="vertical"
                sx={{ borderBottomWidth: 40, background: "#ffffff" }}
              />
              <Stack flexDirection="row">
                <Avatar color="text.secondary">OP</Avatar>
                <IconButton>
                  <ExpandMoreIcon sx={{ color: "#ffffff" }} />
                </IconButton>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default Marco;
