import {
  Stack,
  Typography,
  Container,
  Button
} from '@mui/material'

import PaletteIcon from '@mui/icons-material/Palette'
import TwitterIcon from '@mui/icons-material/Twitter'
import GithubrIcon from '@mui/icons-material/Github'
import IconButton from '@mui/material/IconButton'

export const Header = () => {
  return (
    <Container
      disableGutters
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '5rem'
      }}
    >
      <Button variant="contained" color='primary' startIcon={<PaletteIcon />}>
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
  )
}
