import React, { useState } from "react";
import { TextField, Button, Container, Typography, Paper, Tab, Tabs, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";

const AuthForm = () => {
  const [tab, setTab] = useState(0);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, mt: 5 }}>
        <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} centered>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: 20 }}>
          {
            tab === 0 && (
              <>
                <TextField fullWidth label="Email" {...register("email", { required: "Email is required" })} error={!!errors.email} helperText={errors.email?.message} margin="normal" />
                <TextField fullWidth label="Password" type="password" {...register("password", { required: "Password is required" })} error={!!errors.password} helperText={errors.password?.message} margin="normal" />
              </>
            )
          }
          {tab === 1 && (
            <>
              <Typography variant="h6">Personal Information</Typography>
              <TextField fullWidth label="Full Name" {...register("name", { required: "Full Name is required" })} error={!!errors.name} helperText={errors.name?.message} margin="normal" />
              <TextField fullWidth label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} {...register("dob", { required: "DOB is required" })} error={!!errors.dob} helperText={errors.dob?.message} margin="normal" />
              <TextField select fullWidth label="Gender" {...register("gender", { required: "Gender is required" })} error={!!errors.gender} helperText={errors.gender?.message} margin="normal">
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Non-Binary">Non-Binary</MenuItem>
              </TextField>
              <TextField select fullWidth label="Marital Status" {...register("maritalStatus", { required: "Marital Status is required" })} error={!!errors.maritalStatus} helperText={errors.maritalStatus?.message} margin="normal">
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
                <MenuItem value="Divorced">Divorced</MenuItem>
                <MenuItem value="Widowed">Widowed</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>

              <Typography variant="h6">Contact Information</Typography>
              <TextField fullWidth label="Address" {...register("address", { required: "Address is required" })} error={!!errors.address} helperText={errors.address?.message} margin="normal" />
              <TextField fullWidth label="Phone Number" {...register("phone", { required: "Phone Number is required" })} error={!!errors.phone} helperText={errors.phone?.message} margin="normal" />

              <Typography variant="h6">Socioeconomic Data</Typography>
              <TextField select fullWidth label="Employment Status" {...register("employmentStatus", { required: "Employment Status is required" })} error={!!errors.employmentStatus} helperText={errors.employmentStatus?.message} margin="normal">
                <MenuItem value="Employed">Employed</MenuItem>
                <MenuItem value="Unemployed">Unemployed</MenuItem>
                <MenuItem value="Retired">Retired</MenuItem>
                <MenuItem value="Student">Student</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
              <TextField fullWidth label="Occupation/Job Title" {...register("occupation")} margin="normal" />
              <TextField select fullWidth label="Education Level" {...register("education", { required: "Education Level is required" })} error={!!errors.education} helperText={errors.education?.message} margin="normal">
                <MenuItem value="No Formal Education">No Formal Education</MenuItem>
                <MenuItem value="High School">High School</MenuItem>
                <MenuItem value="Bachelor’s Degree">Bachelor’s Degree</MenuItem>
                <MenuItem value="Master’s Degree">Master’s Degree</MenuItem>
                <MenuItem value="Doctorate">Doctorate</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>

              <Typography variant="h6">Cultural/Ethnic Background</Typography>
              <TextField select fullWidth label="Race/Ethnicity" {...register("ethnicity", { required: "Ethnicity is required" })} error={!!errors.ethnicity} helperText={errors.ethnicity?.message} margin="normal">
                <MenuItem value="White">White</MenuItem>
                <MenuItem value="Black/African American">Black/African American</MenuItem>
                <MenuItem value="Asian">Asian</MenuItem>
                <MenuItem value="Hispanic/Latino">Hispanic/Latino</MenuItem>
                <MenuItem value="Native American">Native American</MenuItem>
                <MenuItem value="Pacific Islander">Pacific Islander</MenuItem>
                <MenuItem value="Mixed">Mixed</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
              <TextField fullWidth label="Nationality/Citizenship" {...register("nationality")} margin="normal" />
              <TextField fullWidth label="Primary Language(s)" {...register("language")} margin="normal" />
            </>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            {tab === 0 ? "Login" : "Register"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AuthForm;