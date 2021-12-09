import React from 'react';
import { AppBar, Box, Container, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';

const pages = [
    { title: 'New Entry', id: 0 },
    { title: 'Reports', id: 3 },
    { title: 'Analysis', id: 4 },
    { title: 'About', id: 5 }
];

export default function MenuAppBar(props) {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleChange = (id) => {
        console.log(id)
        props.handlePageToggle(id);
        handleCloseNavMenu();
    }

    return (
        <AppBar style={{ height: 100, backgroundColor: 'white' }}>
            <Container maxWidth='none'>
                <Toolbar style={{ height: 100, width: '100%' }} disableGutters>
                    <InsertEmoticon style={{ fontSize: 50, color: 'black' }} onClick={handleOpenNavMenu} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            keepMounted
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.title} onClick={e => { handleChange(page.id) }}>
                                    <Typography textAlign='center'>{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );

}