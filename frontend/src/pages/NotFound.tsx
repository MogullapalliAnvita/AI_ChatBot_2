import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "50vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        border: "1px dashed var(--stroke)",
        borderRadius: 16,
        bgcolor: "rgba(11,18,36,0.8)",
        boxShadow: "var(--shadow)",
      }}
    >
      <Box>
        <Typography variant="h3" fontWeight={700}>404</Typography>
        <Typography sx={{ color: "var(--muted)", mb: 2 }}>Page not found. Let us guide you back.</Typography>
        <Button component={Link} to="/" variant="contained" sx={{ bgcolor: "#22d3ee", color: "#0b1224", fontWeight: 700, textTransform: "none" }}>
          Return home
        </Button>
      </Box>
    </Box>
  )
}

export default NotFound