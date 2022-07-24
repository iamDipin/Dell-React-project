import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import {CardActionArea} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom';


const accessTaskCount =34;
const erasureTaskCount =89;

function DashBoard () {
  const navigate = useNavigate();
  return (
    <Box 
    sx={{
      width: '100%',
      height: '100%',
      paddingBottom:2,
      backgroundColor: ''
     
    }}
  >
    <Typography variant="h6"  sx={{ flexGrow: 1 , opacity: [0.9, 0.8, 0.7] }}>Pending Tasks</Typography>  


    <Card sx={{width:'80%' ,marginLeft:'10%' , marginTop:1, backgroundColor:'#a3cef152', color:'primary.dark'  }}>
    <CardActionArea onClick={()=>{navigate('/request-list/access')}}>  
      <CardContent sx={{padding:'6px'}}>
        <Typography sx={{ fontSize: 14 ,fontWeight:'400' ,color:'primary.dark'  }} gutterBottom>
          Access Requests
        </Typography>
        <Typography variant="h2" component="div">
          {accessTaskCount}
        </Typography>
      </CardContent >
      <CardActions  sx={{paddingTop:'0px'}}>
      <Typography sx={{ fontSize: 12 ,color:'primary.dark',fontWeight:'600' }}  gutterBottom>OPEN</Typography>
      </CardActions>
      </CardActionArea>  
    </Card>
    <Card  sx={{width:'80%', marginLeft:'10%' , marginTop:2 ,backgroundColor:'#4caf503d', color:'success.dark'}}>
     <CardActionArea  onClick={()=>{navigate('/request-list/erasure')}}>
      <CardContent sx={{padding:'6px'}}>
        <Typography sx={{ fontSize: 14 ,color:'success.dark' }}  gutterBottom>
          Erasure Requests
        </Typography>
        <Typography variant="h2" component="div">
          {erasureTaskCount}
        </Typography>
      </CardContent>
      <CardActions sx={{paddingTop:'0px'}}>
      <Typography sx={{ fontSize: 12 ,color:'success.dark',fontWeight:'600' }}  gutterBottom>OPEN</Typography>
      </CardActions>
      </CardActionArea> 
    </Card>
  </Box>
  )
}

export default DashBoard;
