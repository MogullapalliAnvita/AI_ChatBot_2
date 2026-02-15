import React, { useEffect } from 'react'
import {Box, Typography, Button} from '@mui/material';
import CustomizedInput from '../components/shared/CustomizedInput';
import { IoMdLogIn } from "react-icons/io";
import {toast} from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { useNavigate} from 'react-router-dom';

function Signup() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try{
      toast.loading("Signing Up",{id:"signup"});
      await auth?.signup(name,email, password);
      toast.success("Signed Up Successfully",{id:"signup"});
    }catch(err) {
      console.log(err); 
      toast.error("Signing Up Failed",{id:"signup"});
    }
    console.log(email, password);
  }

  useEffect(() => {
    if(auth?.user){
      navigate("/chat");
    }
  },[auth]);



  return (
    <Box
      width="100%"
      minHeight="70vh"
      display="grid"
      gridTemplateColumns={{ md: "1fr 1fr", xs: "1fr" }}
      gap={4}
      alignItems="center"
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none" },
          justifyContent: "center",
          alignItems: "center",
          p: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 460,
            p: 3,
            borderRadius: 20,
            border: "1px solid var(--stroke)",
            bgcolor: "rgba(11,18,36,0.85)",
            boxShadow: "var(--shadow)",
            textAlign: "center",
          }}
        >
          <img src="airobot.png" alt="Robot" style={{width:"100%"}}/>
          <Typography mt={2} color="var(--muted)">Spin up your account to keep chats synced.</Typography>
        </Box>
      </Box>

      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} px={{ xs: 1, md: 2 }}>
        <form 
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: 520,
          margin: "auto",
          padding: "32px",
          borderRadius:"18px",
          border:"1px solid var(--stroke)",
          background:"rgba(11,18,36,0.9)",
          boxShadow:"var(--shadow)"
        }}>
        <Box sx={{display:"flex", flexDirection:"column",justifyContent:"center"}}>
          <Typography variant='h4' textAlign={"center"} mb={1} fontWeight={700}>
            Create account
          </Typography>
          <Typography textAlign="center" color="var(--muted)" mb={2}>
            Join DeciZen AI and keep your conversations flowing.
          </Typography>
          <CustomizedInput type="text" name="name" label="Name" />
          <CustomizedInput type="email" name="email" label="Email" />
          <CustomizedInput type="password" name="password" label="Password" />
        </Box>
        <Button type='submit' 
          fullWidth
          sx={{
            px:2,
            py:1.5,
            mt:2,
            borderRadius:12,
            bgcolor:"#f97316",
            color:"#0b0b0f",
            fontWeight:700,
            textTransform:"none",
            ":hover":{
              bgcolor:"#fb923c",
            }
          }}
          endIcon={<IoMdLogIn />}
          >
          Signup 
        </Button>
        </form>
      </Box>
    </Box>    
  )
}

export default Signup;