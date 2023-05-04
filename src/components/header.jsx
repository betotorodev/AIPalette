import {
  Stack,
  Typography,
  Container,
  Divider
} from '@mui/material'

import TwitterIcon from '@mui/icons-material/Twitter'
import GithubrIcon from '@mui/icons-material/Github'
import IconButton from '@mui/material/IconButton'
import { PaletteModal } from './modal'

export const Header = () => {
  return (
    <Container disableGutters sx={{ marginBottom: '5rem' }}>
      <Container
        disableGutters
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem'
        }}
      >
        <PaletteModal />
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold'
          }}
        >
          AIPalette
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton
            aria-label="delete"
            disableRipple
            sx={{ color: '#3C424D' }}
            href="https://twitter.com/betotorodev"
            target="_blanck"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            sx={{ color: '#3C424D' }}
            href="https://github.com/betotorodev"
            target="_blanck"
            rel="noopener noreferrer"
          >
            <GithubrIcon />
          </IconButton>
        </Stack>
      </Container>
      <Divider />
    </Container>
  )
}
