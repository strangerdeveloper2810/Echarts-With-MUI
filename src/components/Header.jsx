import React from 'react'
import { Box, Typography } from '@mui/material'
const Header = () => {
  return (
    <Box component="header" sx={{ py: 6, px: 2 }}>
      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Echarts MUI
      </Typography>
    </Box>
  )
}

export default Header
