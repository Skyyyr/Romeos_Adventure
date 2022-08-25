import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import { Icon } from '@mui/material';
import {getCharacterData} from '../data/characterdata'
import { useState,useEffect } from 'react';



const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: 'rgb(8,39,73)',
  },
});

export default function StatBar({statName, val,stats, addStat, removeStat}) {

    const iconObj = {'strength':'swords','defense':'shield','accuracy':'gps_not_fixed','evasion':'double_arrow' }

    return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
    <Typography component="legend">{statName}:{stats[val]}</Typography>
        <Icon 
            component='a'
            style={{'color':'rgb(8,39,73)'}}
            onClick={()=>removeStat(val)}>
            <span class="material-symbols-outlined">remove</span>
        </Icon>
      <StyledRating
        name="customized-color"
        value={stats[val]}
        readOnly
        max={10}
        precision={1}
        icon={<Icon sx={{'transform':'scale(1.6)'}}><span class="material-symbols">stop</span></Icon>}
        emptyIcon={<Icon sx={{'transform':'scale(1.6)'}}><span sx={{'scale':'2'}} class="material-symbols-outlined">stop</span></Icon>}
      />
      <Icon 
        component='a'
        style={{'color':'rgb(8,39,73)'}}
        onClick={()=>addStat(val)}>
        <span class="material-symbols-outlined">add</span>
      </Icon>

    </Box>
  );
}
