import '../../assets/character.css'
import { List, ListItemText, Typography } from '@mui/material';
import  Slider  from '@mui/material/Slider'


function CreateCharacter() {
    const statType = ['attack','defense','accuracy','evasion','wisdom','spirit']


    return (
        <div className='row'>
            <h1>
                Create Character
            </h1>
            <div className='dispFighter col-md-6'></div>
            <div className='col-md-6'>
                <List>
                    {statType.map((val, ind)=>{
                        return <ListItemText key={ind}>  {val} <Slider size={'small'} min={0} max={10} valueLabelDisplay="auto"/></ListItemText>
                    })}
                </List>
            </div>
        </div>
    )
}

export default CreateCharacter