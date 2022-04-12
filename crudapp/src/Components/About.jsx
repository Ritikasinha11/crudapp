import {Box,makeStyles,Typography} from '@material-ui/core';
import React from '../Assests/Images/React.png';
import User from '../Assests/Images/User.png';

const useStyle=makeStyles({
    image:{
        width:'50%',
        height:'50%'
    },
    component:{
        margin: 50
    }
})
const About=()=>{
    const classes=useStyle();
    return(
        <Box className={classes.component}>
            <Typography variant="h4" style={{marginBottom:50}}>About</Typography>
       <Box style={{display:'flex'}}>
           <img alt='' className={classes.image} src={React}/>
           <img alt=''  className={classes.image} src={User}/>
       </Box>
       </Box>
    )
}
export default About;