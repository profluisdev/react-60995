import { Box, Button, Stack, Typography } from "@mui/material";

export const NavBar = () => {
  return (
    <Box sx={{ bgcolor: "gray", padding: 4 }}>
      <Stack spacing={2} flexDirection={"row"}>
        <Button variant="contained" color="secondary">
          Home
        </Button>
        <Button variant="contained" color="error">
          Home
        </Button>
        <Button variant="contained" color="warning">
          Home
        </Button>
      </Stack>
      <Typography fontSize={30} color={"white"}>
        App E-commerce
      </Typography>
    </Box>
  );
};
