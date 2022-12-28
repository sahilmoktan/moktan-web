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
          <PermContactCalendarOutlinedIcon sx={{ width: 19, height: 19 }} />
          <Typography>+977-9863022025 </Typography>
          <MailOutlineIcon sx={{ width: 19, height: 19, ml: "4px" }} />
          <Typography>mail@moktan.com.np</Typography>
        </Box>
        <Box sx={{ display: "flex", color: "black", alignItems: "center" }}>
          <Stack spacing={2} direction="row">
            <Button variant="text" size="small">
              Sell content
            </Button>
            <Button variant="contained" size="small">
              Share
            </Button>
            <Button variant="contained" size="small">
              Pricing
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
