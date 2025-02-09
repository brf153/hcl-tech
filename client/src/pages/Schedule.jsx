import { Box, Button, Card, CardActions, CardContent, Dialog, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import React from 'react'

function Schedule() {
    const [dialogOpen, setDialogOpen] = React.useState(false)
    const bookings = [
        { id: 1, date: "2024-02-10", time: "10:00 AM", appliedOn: "2024-02-05", status: "Ongoing", review: "In progress" },
        { id: 2, date: "2024-02-08", time: "2:30 PM", appliedOn: "2024-02-03", status: "Completed", review: "Review sent" },
        { id: 3, date: "2024-02-07", time: "5:00 PM", appliedOn: "2024-02-02", status: "Delayed", review: "Delayed due to technical issues" },
      ];
      
  return (
    <Box sx={{padding:3, display:"flex", flexDirection:"column", gap:4}}>
            <Box>
      <Typography variant="h2">Your Bookings</Typography>
      {bookings.length === 0 ? (
        <Typography variant="h5">You have no bookings yet</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Serial No.</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Applied On</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Review</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.id}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.time}</TableCell>
                  <TableCell>{booking.appliedOn}</TableCell>
                  <TableCell>{booking.status}</TableCell>
                  <TableCell>{booking.review}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>

        <Box>
            <Button variant='contained' onClick={()=>setDialogOpen(true)}>Book a Session</Button>
            <Dialog open={dialogOpen} onClose={()=>setDialogOpen}>
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