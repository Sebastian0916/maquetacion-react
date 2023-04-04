import React from "react";
import Marco from "../Marco";
import { Box, Button, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Navigate, useNavigate } from "react-router-dom";

const PlanoGeneral = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Marco />
      <Stack
        ml={18.9}
        position="fixed"
        flexDirection="column"
        sx={{
          zIndex: 1,
          backgroundColor: "white",
          marginTop: "102px",
          width: "-webkit-fill-available",
        }}
        py={"8px"}
        px={"24px"}
      >
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button
              variant="text"
              startIcon={<ChevronLeftIcon />}
              onClick={() => navigate(-1)}
            >
              Volver
            </Button>
            <Typography variant="h6" color="text.primary">
              Plano General
            </Typography>
          </Box>
          <Stack
            gap={1}
            justifyContent="flex-end"
            flexDirection="row"
            alignItems="center"
          >
            {/* <Autocomplete
            size="medium"
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Buscar" size="small" />
            )}
          />
          <FormControl variant="outlined" size="small">
            <InputLabel htmlFor="input-with-icon-adornment">
              Proyecto vendedor
            </InputLabel>
            <OutlinedInput
              label="Proyecto vendedor  "
              endAdornment={
                <InputAdornment position="end">
                  <ExpandMoreIcon />
                </InputAdornment>
              }
            />
          </FormControl> */}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default PlanoGeneral;
