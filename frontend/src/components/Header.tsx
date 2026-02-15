import AppBar from '@mui/material/AppBar';
import { Box, Toolbar } from '@mui/material';
import Logo from '../components/shared/Logo'; 
import { useAuth } from '../context/AuthContext';
import NavigationLink from './shared/NavigationLink';

function Header() {
  const auth = useAuth();
  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: "transparent", boxShadow: "none", pt: 1 }}>
      <Toolbar
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "rgba(11,18,36,0.85)",
          border: "1px solid var(--stroke)",
          backdropFilter: "blur(14px)",
          borderRadius: "18px",
          px: { xs: 2, md: 3 },
          py: { xs: 1.25, md: 1.5 },
          boxShadow: "var(--shadow)",
        }}
      >
        <Logo />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink bg="#38bdf8" to="/chat" text="Go To Chat" textColor="#05101c" />
              <NavigationLink bg="#0b1224" to="/" text="Logout" textColor="white" onClick={auth.logout} />
            </>
          ) : (
            <>
              <NavigationLink bg="#38bdf8" to="/login" text="Login" textColor="#05101c" />
              <NavigationLink bg="#0b1224" to="/signup" text="Signup" textColor="white" />
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header