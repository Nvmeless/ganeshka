import React, { useState } from 'react'
import { Link } from '@mui/material'
import { makeStyles } from '@mui/styles'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const navigationLinks = [
    {name: 'Accueil', href: '/'},      
]

const navigationLinksLoggedIn = [
    {name: 'Messages', href: '/messages'},
]

const useStyle = makeStyles((theme) => ({
    link: {
        marginRight: 20
    },
    avatar: {
        marginLeft: "auto",
    },
    btnChevronLeft: { 
        float: "right"
    }
}))

export const Navbar = () => {
    let navigate = useNavigate()
    const { isLoggedIn } = useSelector((state) => state.auth);
    const styles = useStyle()
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        navigate("/login");
        window.location.reload();
    };

    return (
        <AppBar position='sticky' color='default'>
            <Container maxWidth="md">
                <Toolbar disableGutters>
                    <Hidden smDown>
                    {navigationLinks.map((item) => (
                        <Link 
                            className={styles.link} 
                            color='textPrimary' 
                            variant="button" 
                            underline='none' 
                            href={item.href}
                            key={item.name}
                        >
                            {item.name}
                        </Link>
                    ))}
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Avatar className={styles.avatar}>A</Avatar>
                </Toolbar>
            </Container>
            <SwipeableDrawer anchor='left' open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
                <div>
                    <IconButton className={styles.btnChevronLeft} onClick={() => setOpen(false)}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {navigationLinks.map((item) => (
                        <ListItem key={item.name}>
                            <Link 
                                className={styles.link} 
                                color='textPrimary' 
                                variant="button" 
                                underline='none' 
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        </ListItem>
                    ))}
                    {isLoggedIn ? (
                        <>
                            <ListItem>
                                {navigationLinksLoggedIn.map((item) => (
                                    <Link 
                                        className={styles.link} 
                                        color='textPrimary' 
                                        variant="button" 
                                        underline='none' 
                                        href={item.href}
                                        key={item.name}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </ListItem>
                            <ListItem>
                                <Link 
                                    className={styles.link} 
                                    color='textPrimary' 
                                    variant="button" 
                                    underline='none' 
                                    onClick={handleLogout}
                                >
                                    Déconnexion
                                </Link>
                            </ListItem> 
                        </> 
                    ) : (
                        <>
                            <ListItem>
                                <Link 
                                    className={styles.link} 
                                    color='textPrimary' 
                                    variant="button" 
                                    underline='none' 
                                    href="/login"
                                >
                                    Connexion
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link 
                                    className={styles.link} 
                                    color='textPrimary' 
                                    variant="button" 
                                    underline='none' 
                                    href="/register"
                                >
                                    Inscription
                                </Link>
                            </ListItem>
                        </>
                    )}
                </List>
            </SwipeableDrawer>
        </AppBar>
    )
}
