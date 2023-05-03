import { Stack, Typography, Container, Button, Grid, Paper } from '@mui/material'
import PaletteIcon from '@mui/icons-material/Palette'
import TwitterIcon from '@mui/icons-material/Twitter'
import GithubrIcon from '@mui/icons-material/Github'
import IconButton from '@mui/material/IconButton'

import './App.css'

function App() {
  return (
    <>
      <Container
        disableGutters
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '10rem'
        }}
      >
        <Button variant="outlined" color="primary" startIcon={<PaletteIcon />}>
          Generate
        </Button>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold'
          }}
        >
          AIPalette
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="delete" disableRipple color="primary">
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="delete" color="primary">
            <GithubrIcon />
          </IconButton>
        </Stack>
      </Container>
      <Container disableGutters>
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
                    transition: 'all ease 0.5s',
                    '&:hover': {
                      backgroundColor: 'red'
                    }
                  }}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export default App
