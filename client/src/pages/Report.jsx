import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Sector } from 'recharts';

// Sample random user data
const generateRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const healthMetrics = [
  { name: 'Heart Rate (Pulse)', unit: 'bpm', normal: [60, 100], userValue: generateRandomValue(50, 110) },
  { name: 'Blood Pressure (Systolic)', unit: 'mmHg', normal: [90, 120], userValue: generateRandomValue(80, 140) },
  { name: 'Blood Pressure (Diastolic)', unit: 'mmHg', normal: [60, 80], userValue: generateRandomValue(50, 90) },
  { name: 'Respiratory Rate', unit: 'breaths/min', normal: [12, 20], userValue: generateRandomValue(10, 25) },
  { name: 'Body Temperature', unit: '°F', normal: [97, 99], userValue: generateRandomValue(95, 102) },
  { name: 'Oxygen Saturation (SpO₂)', unit: '%', normal: [95, 100], userValue: generateRandomValue(85, 100) },
  { name: 'Blood Glucose Levels', unit: 'mg/dL', normal: [70, 99], userValue: generateRandomValue(60, 130) },
];

const getCategory = (value, normalRange) => {
  if (value < normalRange[0]) return 'Low';
  if (value > normalRange[1]) return 'High';
  return 'Normal';
};

const COLORS = {
  Normal: '#4CAF50',
  Low: '#FFCE56',
  High: '#FF6384'
};

function Report() {
  return (
    <Box p={3}>
      <Typography variant="h2" gutterBottom>Health Reports</Typography>
      
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Metric</strong></TableCell>
              <TableCell><strong>Unit</strong></TableCell>
              <TableCell><strong>Normal Range</strong></TableCell>
              <TableCell><strong>Your Value</strong></TableCell>
              <TableCell><strong>Category</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {healthMetrics.map((metric) => {
              const category = getCategory(metric.userValue, metric.normal);
              return (
                <TableRow key={metric.name}>
                  <TableCell>{metric.name}</TableCell>
                  <TableCell>{metric.unit}</TableCell>
                  <TableCell>{metric.normal.join(' - ')}</TableCell>
                  <TableCell>{metric.userValue}</TableCell>
                  <TableCell style={{ color: COLORS[category] }}>{category}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      
      {healthMetrics.map((metric) => {
        const category = getCategory(metric.userValue, metric.normal);
        const pieData = [
          { name: 'Low', value: Math.max(metric.normal[0] - 50, 0), color: COLORS['Low'] },
          { name: 'Normal', value: metric.normal[1] - metric.normal[0], color: COLORS['Normal'] },
          { name: 'High', value: 130 - metric.normal[1], color: COLORS['High'] }
        ];

        const indicatorAngle = 180 - ((metric.userValue - 50) / 80) * 180;

        return (
          <Box key={metric.name} mb={4}>
            <Typography variant="h5" gutterBottom>{metric.name}</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="100%"
                  startAngle={180}
                  endAngle={0}
                  innerRadius={50}
                  outerRadius={80}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Sector
                  cx="50%"
                  cy="100%"
                  innerRadius={40}
                  outerRadius={90}
                  startAngle={indicatorAngle - 2}
                  endAngle={indicatorAngle + 2}
                  fill="black"
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <Typography variant="body1" align="center" color={COLORS[category]}>
              Your Value: {metric.userValue} ({category})
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default Report;
