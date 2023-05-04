import { Box, Typography } from '@mui/material'

export const EmptyState = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: 'bold', opacity: '0.5' }}
        color="primary"
      >
        No
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: 'bold', opacity: '0.6' }}
        color="primary"
      >
        palettes
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: 'bold', opacity: '0.7' }}
        color="secondary"
      >
        generated
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: 'bold', opacity: '0.8' }}
        color="secondary"
      >
        yet
      </Typography>
    </Box>
  )
}
