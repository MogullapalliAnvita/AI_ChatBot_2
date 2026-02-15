import { TextField } from '@mui/material';
type Props = {
    name:string; 
    type:string;
    label:string;
}

function CustomizedInput(props:Props) {
  return (
    <TextField 
        margin='normal'
        InputLabelProps={{style:{color:"white"} }} 
        name={props.name} 
        type={props.type} 
        label={props.label} 
        fullWidth
        InputProps={{style:{ borderRadius: 12, fontSize:18, color:"white", paddingRight: 8 } }}
        />
  )
}

export default CustomizedInput