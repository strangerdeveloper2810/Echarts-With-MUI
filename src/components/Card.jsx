import React from 'react'
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import { get, map, truncate } from 'lodash'
import { assetsList } from '../data'

export default function RecipeReviewCard() {
  const renderCardAssets = () =>
    map(assetsList, (item) => (
      <Grid size={4} key={get(item, 'id', '')}>
        <Card sx={{ maxWidth: 345, height: 250 }} key={get(item, 'id', '')}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {get(item, 'title', '')}
              </Avatar>
            }
            title={get(item, 'title', '')}
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {truncate(get(item, 'description', ''), {
                length: 200, // Giới hạn 200 ký tự
                omission: '...', // Thêm "..." nếu bị cắt
              })}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    ))
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {renderCardAssets()}
      </Grid>
    </Box>
  )
}
