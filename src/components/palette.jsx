import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

export const Palette = () => {
  return (
    <Container disableGutters>
      <Stack direction="row" sx={{ marginBottom: '2rem' }}>
        <Stack direction="column">
          <Typography variant="h6" sx={{ fontWeight: '500', color: '#eeea' }}>
            Generated palette
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <IconButton aria-label="decorative" disableRipple sx={{ color: 'white' }} edge='start'>
              <StarIcon />
            </IconButton>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Forest
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Grid container spacing={4} columns={5}>
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <Grid item xs={1} key={index}>
              <Paper
                elevation={0}
                sx={{
                  width: 'auto',
                  height: '400px',
                  backgroundColor: 'green',
                  gridTemplateColumns: { md: '1fr 1fr' },
                  transition: 'all ease 0.3s',
                  boxShadow: '0px 16px 24px -8px green',
                  '&:hover': {
                    transform: 'scale(0.98)'
                  }
                }}
              />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
