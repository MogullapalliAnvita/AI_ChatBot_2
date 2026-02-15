import React, { useEffect } from 'react'
import {Box, Typography, Button} from '@mui/material';
import CustomizedInput from '../components/shared/CustomizedInput';
import { IoMdLogIn } from "react-icons/io";
import {toast} from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { useNavigate} from 'react-router-dom';

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try{
      toast.loading("Signing In",{id:"login"});
      await auth?.login(email, password);
      toast.success("Signed In Successfully",{id:"login"});
    }catch(err) {
      console.log(err); 
      toast.error("Sign In Failed",{id:"login"});
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
          <img src="airobot.png" alt="Robot" style={{ width: "100%" }} />
          <Typography mt={2} color="var(--muted)">Securely authenticate to continue your session.</Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" px={{ xs: 1, md: 2 }}>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: 520,
            margin: "auto",
            padding: "32px",
            borderRadius: "18px",
            border: "1px solid var(--stroke)",
            background: "rgba(11,18,36,0.9)",
            boxShadow: "var(--shadow)",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography variant='h4' textAlign={"center"} mb={1} fontWeight={700}>
              Welcome back
            </Typography>
            <Typography textAlign="center" color="var(--muted)" mb={2}>
              Sign in to continue chatting with DeciZen AI.
            </Typography>
            <CustomizedInput type="email" name="email" label="Email" />
            <CustomizedInput type="password" name="password" label="Password" />
          </Box>
          <Button type='submit' 
            fullWidth
            sx={{
              px:2,
              py:1.5,
              mt:2,
              borderRadius: 12,
              bgcolor:"#38bdf8",
              color: "#05101c",
              fontWeight: 700,
              textTransform: "none",
              ":hover":{
                bgcolor:"#60a5fa",
              }
            }}
            endIcon={<IoMdLogIn />}
            >
            Login 
          </Button>
        </form>
      </Box>
    </Box>    
  )
}

export default Login