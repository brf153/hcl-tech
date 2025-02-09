import { Box, Button, Card, CardActions, CardContent, Dialog, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useEffect } from 'react'
import axiosInstance from '../api/axios';
import { useSelector } from 'react-redux';

function Schedule() {
    const [dialogOpen, setDialogOpen] = React.useState(false)
    const user = useSelector((state) => state.user);

    const sampleBookings = [
        { id: 1, date: "2024-02-10", time: "10:00 AM", appliedOn: "2024-02-05", status: "Ongoing", labResults: "In progress" },
        { id: 2, date: "2024-02-08", time: "2:30 PM", appliedOn: "2024-02-03", status: "Completed", labResults: "Review sent" },
        { id: 3, date: "2024-02-07", time: "5:00 PM", appliedOn: "2024-02-02", status: "Delayed", labResults: "Delayed due to technical issues" },
        {
        "participant": "67a8bc17f34621c078c40c74",
    "date": "2025-02-09T15:44:08.486Z",
    "sessionDate": "2025-02-11T08:20:00.000Z",
    "_id": "67a8cd48a018712f51d6e9b1",
  "status": "ongoing",
"labResults": "Ongoing",}
      ];

      const [bookings, setBookings] = React.useState(sampleBookings);

      const handleBookSession = async()=>{
        try{
          const response = await axiosInstance.post("/visits/new",{
            email: user.userData.email
          })
          if(response.status === 201){
            console.log("Booking Successful", response.data);
            setBookings([...bookings, response.data]);
            setDialogOpen(false);
          }
        }
        catch(error){
          console.error("Unexpected Error:", error);
        }
      }

      useEffect(()=>{
        const fetchBookings = async()=>{
          try{
            const response = await axiosInstance.get(`/visits/${user.userData._id}`);
            if(response.status === 200){
              console.log("Bookings Fetched", response.data);
              setBookings(response.data);
            }
          }
          catch(error){
            console.error("Unexpected Error:", error);
          }
        }
        fetchBookings();
      },[])
      
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
                <TableCell>Appointment Date</TableCell>
                <TableCell>Applied On</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Review</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking, index) => (
                <TableRow key={index}>
                  <TableCell>{index+1}</TableCell>
                  <TableCell>
  {new Date(booking.sessionDate).toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })}{" "}
  {new Date(booking.sessionDate).toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: true })}
</TableCell>
<TableCell>
  {new Date(booking.date).toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })}{" "}
  {new Date(booking.date).toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: true })}
</TableCell>


                  <TableCell>{booking.status}</TableCell>
                  <TableCell>{booking.labResults}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>

        <Box>
            <Button variant='contained' onClick={()=>setDialogOpen(true)}>Book a Session</Button>
            <Dialog
  open={dialogOpen}
  onClose={() => setDialogOpen(false)}
>
  <DialogTitle id="alert-dialog-title">
    Book a Session
  </DialogTitle>
  <DialogContent>
    <DialogContentText id="alert-dialog-description">
    Would you like to schedule an appointment at our clinic? Please confirm to proceed with the appointment booking.
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
    <Button autoFocus onClick={handleBookSession}>
      Confirm
    </Button>
  </DialogActions>
</Dialog>

        </Box>

    </Box>
  )
}

export default Schedule