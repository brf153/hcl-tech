import { Box, Button, Card, CardActions, CardContent, Dialog, Typography } from '@mui/material'
import React from 'react'

function Schedule() {
    const [dialogOpen, setDialogOpen] = React.useState(false)
  return (
    <Box>
        <Box>
        <Typography variant="h2">Your Bookings</Typography>
<Typography variant="h5">You have no bookings yet</Typography>
        </Box>
        <Box>
            <Button variant='contained' onClick={()=>setDialogOpen(true)}>Book a Session</Button>
            <Dialog open={dialogOpen} onClose={()=>setDialogOpen(false)}>
                <Card>
<CardContent>

                    <Typography variant='h4'>Do you want to book a session?</Typography>
</CardContent>
<CardActions>
    <Button>Yes</Button>
    <Button>No</Button>
</CardActions>
                </Card>
            
            </Dialog>
        </Box>

    </Box>
  )
}

export default Schedule