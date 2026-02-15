import React from 'react'
import {Link} from 'react-router-dom';
import { Typography } from '@mui/material';

function Logo() {
  return (
    <div style={{
        display:"flex",
        marginRight:"auto",
        alignItems:"center",
        gap:"15px"
    }}>
        <Link to={"/"}>
            <img 
                src="openai.png" 
                alt="openai" 
                width={"30px"} 
                height={"30px"} 
                className='image-inverted' 
            />
        </Link>
        <div style={{display:"flex", flexDirection:"column", gap:2}}>
            <Typography sx={{
              display: {md:"block", sm:"none", xs:"none"}, 
              mr:"auto",
              fontWeight:"800", 
              textShadow:"0 10px 35px rgba(0,0,0,0.45)",
              letterSpacing: "0.08em",
              fontSize: "18px",
            }}>DeciZen AI</Typography>
            <Typography sx={{
              display: {md:"block", sm:"none", xs:"none"},
              color: "var(--muted)",
              fontSize: "11px",
              letterSpacing: "0.12em",
            }}>3D conversation studio</Typography>
        </div>
    </div>
  )
}

export default Logo