import React from 'react'
import { Container, Box } from '@mui/material'
import { Header, Footer } from '../components'

const HomeLayout = ({ children }) => {
  return (
    <Container maxWidth="lg" cotainer="true">
      <Header />
      <Box component={'main'} sx={{ mt: 2 }}>
        {children}
      </Box>
      <Footer />
    </Container>
  )
}

export default HomeLayout
