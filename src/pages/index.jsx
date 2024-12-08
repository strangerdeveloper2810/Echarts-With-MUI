import React from 'react'
import { Box, Grid2 as Grid } from '@mui/material'
import { RecipeReviewCard } from '../components'
import { TotalRiskChart } from '../components/charts'
const HomePage = () => {
  return (
    <Box component={'section'}>
      {/* Card chart */}
      <Box component="section" sx={{ my: 2 }}>
        <Grid cotainer spacing={2}>
          <Grid size={4}>
            <TotalRiskChart />
          </Grid>

          <Grid size={4}>
            <TotalRiskChart />
          </Grid>

          <Grid size={4}>
            <TotalRiskChart />
          </Grid>
        </Grid>
      </Box>

      {/* Card assets */}
      <Box component="section">
        <RecipeReviewCard />
      </Box>
    </Box>
  )
}

export default HomePage
