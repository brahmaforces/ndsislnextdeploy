
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Search from "./Search";

export default function Navbar({searchTerm, setSearchTerm}) {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            INDIAN SIGN LANGUAGE DICTIONARY
            </Typography>
            
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            
        </Toolbar>
        </AppBar>
        </Box>
    )
  }
