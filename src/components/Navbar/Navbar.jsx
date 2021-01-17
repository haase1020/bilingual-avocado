import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/avocado.png'
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Bilingual Avocado" height="25px" className={classes.image} />
                          Bilingual Avocado
                    </Typography>
                    <div className={classes.grow} />
                    <div classNames={classes.button}>
                        <IconButton aria-label="show cart item" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
