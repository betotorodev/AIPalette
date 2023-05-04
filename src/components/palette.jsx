import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { useGetColors } from '../hooks/useGetColors'
import { EmptyState } from './emptyState'

export const Palette = () => {
  const { palette, word } = useGetColors()
  return (
    <Container disableGutters>
      {!palette && <EmptyState />}
      {palette && (
        <>
          <Stack direction="row" sx={{ marginBottom: '2rem' }}>
            <Stack direction="column">
              <Typography variant="h6" sx={{ fontWeight: '500' }}>
                Generated palette
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <IconButton
                  aria-label="decorative"
                  disableRipple
                  sx={{ color: '#333' }}
                  edge="start"
                >
                  <StarIcon />
                </IconButton>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  {word}
                </Typography>
              </Box>
            </Stack>
          </Stack>
          <Grid container spacing={4} columns={5}>
            {palette.palette.map((item, index) => {
              return (
                <Grid item xs={1} key={index}>
                  <Card
                    className="scale-up-center"
                    sx={{
                      boxShadow: `0px 16px 24px -8px rgb(${item.rgb})`,
                      transition: 'all ease 0.3s',
                      '&:hover': {
                        transform: 'scale(0.98)'
                      }
                    }}
                  >
                    <CardContent>
                      <Paper
                        elevation={0}
                        sx={{
                          width: '100%',
                          height: '400px',
                          backgroundColor: `${item.hex}`,
                          gridTemplateColumns: { md: '1fr 1fr' }
                        }}
                      />
                    </CardContent>
                    <CardActions>
                      <IconButton aria-label="add to favorites">
                        <ContentCopyIcon />
                      </IconButton>
                      <Typography>{item.hex}</Typography>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </>
      )}
    </Container>
  )
}
