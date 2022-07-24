import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    textAlign: 'left',
    boxShadow:'none',
  }));
const style={ flexGrow: 1 ,opacity: [0.9, 0.8, 0.9] };

const summaryData={attr1:'1024' , attr2:'345' };

function Summary() {
  return (
    <Box
    sx={{
      width: '100%',
      height: '100%',
      backgroundColor: '',
      border:'none',
      
    }}
  >
     <Typography variant="h6"  sx={style}>Summary</Typography>
    
     <Grid container spacing={2} sx={{padding:'2rem' }} >
        
        <Grid item xs={6}  >
          <Item > <Typography  sx={style}>Automated Tasks Completed</Typography></Item>
        </Grid>
        <Grid item xs={6}  >
          <Item>  <Typography  sx={style}>{summaryData.attr1}</Typography></Item>
        </Grid>    
        <Grid item xs={6}  >
          <Item > <Typography  sx={style}>Manual Tasks Completed</Typography></Item>
        </Grid>
        <Grid item xs={6}  >
          <Item>  <Typography  sx={style}>{summaryData.attr2}</Typography></Item>
        </Grid> 
        <Grid item xs={6}  >
          <Item > <Typography  sx={style}>Tasks pending for manual review</Typography></Item>
        </Grid>
        <Grid item xs={6}  >
          <Item>  <Typography  sx={style}>{summaryData.attr2}</Typography></Item>
        </Grid> 
        <Grid item xs={6}  >
          <Item > <Typography  sx={style}>Other attribute 1</Typography></Item>
        </Grid>
        <Grid item xs={6}  >
          <Item>  <Typography  sx={style}>{summaryData.attr2}</Typography></Item>
        </Grid> 
        <Grid item xs={6}  >
          <Item > <Typography  sx={style}>Other attribute 2</Typography></Item>
        </Grid>
        <Grid item xs={6}  >
          <Item>  <Typography  sx={style}>{summaryData.attr2}</Typography></Item>
        </Grid> 
      </Grid>
  </Box>
  )
}

export default Summary;
