import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FaNewspaper } from "react-icons/fa6";
import Button from '@mui/material/Button';

import './navbar.css'

function Navbar() {
  return (
    <AppBar position="static">
            <Container style={{ maxWidth: 1900 }}>
                <Toolbar disableGutters>
                    <FaNewspaper size={42} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h3"
                        noWrap
                        component="a"
                        href="#main-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 600,
                            letterSpacing: '.0rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Echoing Times
                    </Typography>
                    <div style={{ flexGrow: 1 }} />
                    <Button className="community" color="inherit">Join our Community</Button>
                    <Button className="about" color="inherit">About</Button>
                    
                </Toolbar>
            </Container>
        </AppBar>
  );
}

export default Navbar;