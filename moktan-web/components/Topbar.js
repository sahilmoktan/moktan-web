import { Box, Typography, Stack, Button } from "@mui/material";
import React from "react";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Topbar() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Box sx={{ display: "flex", color: "black", alignItems: "center" }}>
          <PermContactCalendarOutlinedIcon sx={{ width: 20, height: 20 }} />
          <Typography>+977-9863022025 </Typography>
          <MailOutlineIcon sx={{ width: 20, height: 20, ml: "4px" }} />
          <Typography>mail@moktan.com.np</Typography>
        </Box>
        <Box sx={{ display: "flex", color: "black", alignItems: "center" }}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" size="small">
              Log in
            </Button>
            <Button variant="contained" size="small">
              Sign in
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
