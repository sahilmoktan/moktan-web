import { Box, Typography, Stack, Button, useMediaQuery } from "@mui/material";
import React from "react";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Topbar() {
  // const theme = useTheme();
  // const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            color: "black",
            alignItems: "center",
            maxheight: "2rem",
          }}
        >
          <PermContactCalendarOutlinedIcon sx={{ width: 15, height: 15 }} />
          <Typography variant="body2" sx={{ color: "blue" }}>
            +977-9863022025{" "}
          </Typography>
          <MailOutlineIcon sx={{ width: 15, height: 15, ml: "4px" }} />
          <Typography variant="body2" sx={{ color: "blue" }}>
            mail@moktan.com.np
          </Typography>
        </Box>
        <Box sx={{ display: "flex", color: "black", alignItems: "center" }}>
          <Stack spacing={2} direction="row">
            <Button variant="text" size="small">
              Sell content
            </Button>
            <Button variant="contained" size="small" height="5px">
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
