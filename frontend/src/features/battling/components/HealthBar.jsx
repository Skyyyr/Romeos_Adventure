import { Typography } from '@mui/material';
import '../styling/battle.css'

export const Bar = ({ value, label }) => (
  <div className='main'>
    <Typography variant="h4" className='label'>{label}</Typography>
    <div className='max' style={{color:"#808080" }}>
      <div
        className='value'
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);