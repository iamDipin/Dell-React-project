
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DashBoard from '../../components/DashBoard';
import  Summary  from '../../components/Summary';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function HomePage() {

    return(
        <>
         <Box sx={{ flexGrow: 1 , padding: '1rem' }}>
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm={8} >
          <Item sx={{boxShadow:'0px 0px 0px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'}}> <Summary/> </Item>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Item> <DashBoard/> </Item>
        </Grid>    
      </Grid>
    </Box>
        </>
       
    )
    
}
export default HomePage