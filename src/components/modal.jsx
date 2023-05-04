import { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Stack, TextField } from '@mui/material'

import { useGetColors } from '../hooks/useGetColors'

import PaletteIcon from '@mui/icons-material/Palette'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fit-content',
  bgcolor: '#fff',
  boxShadow: 24,
  p: 4
}

export const PaletteModal = () => {
  const { palette, getColors, handleWord } = useGetColors()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleGetColors = () => {
    getColors()
  }

  useEffect(() => {
    if (palette) handleClose()
  }, [palette])

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="primary"
        startIcon={<PaletteIcon />}
      >
        Create
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
              <Typography
                id="transition-modal-title"
                variant="h4"
                sx={{ fontWeight: '500' }}
              >
                Generate a new color palette
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="h6"
                sx={{ fontWeight: '300' }}
              >
                Enter a keyword of whatever and start creating
              </Typography>
            </Box>
            <Stack direction="column">
              <TextField
                onChange={handleWord}
                id="standard-basic"
                variant="standard"
                placeholder="Happy,ocean, etc. :)"
                fullWidth
                focused
                sx={{ color: '#fff', marginBottom: '1rem' }}
              />
              <Button
                onClick={handleGetColors}
                sx={{ width: '100%' }}
                variant="contained"
              >
                Generate
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}
