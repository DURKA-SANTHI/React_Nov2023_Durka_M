import * as React from 'react';
import Button from '@mui/material/Button';

export default function DisableElevation() {


    const dis = ()=>{
        window.alert("Your elevation is Disabled");
    }
  return (
    <Button onClick={dis} variant="contained" disableElevation>
      Disable elevation
    </Button>
  );
}
