import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 6, px: 2 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Copyright © 2020 Lowkey Developer
      </Typography>
    </Box>
  )
}

export default Footer
