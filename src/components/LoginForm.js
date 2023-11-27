import React from 'react'
import {Grid,Paper,Avatar, TextField,Button,Typography} from '@mui/material'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

const Login =()=>{
    const paperstyle={padding:20,height:'60vh',width:350,margin:"100px auto",background:"rgb(201, 214, 226)"}
    const avatarstyle={background:"black"}
    return (
<div className='loginpage'>
        <div>
        <Grid style={{xs: '480px',sm: '576px',md: '768px',lg: '992px', xl: '1200px',xxl: '1600px',}}>
            <Paper elevation={10} style={paperstyle} >
                <Grid align='center'>
                <Avatar style={avatarstyle}><VpnKeyIcon/></Avatar>
                <Typography color="black">SignIn</Typography>
                </Grid>
                <TextField margin='normal'  label='email/Username' placeholder='Enter here' fullWidth required  style={{color:"white"}}/>
                <TextField margin='normal' type="password" label='Password'  placeholder='Enter Password' fullWidth required  style={{color:"white"}}/>
                <FormControlLabel
        control={
          <Checkbox name="checkedB" style={{color:"black"}}/>
               }
              label="Remember me"
               /><br></br>
               <Button type="submit" style={{color:"white" ,backgroundColor:"black"}} variant='contained' fullWidth
               component={RouterLink} to="/home">Log In</Button><br></br><br></br>
               <Typography>
                <Link href="#" style={{color:"black"}}>Forget password?</Link>
                </Typography>
            
            </Paper>
        </Grid>
        </div>
        </div>
    );
}
export default Login;