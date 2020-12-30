import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Button, IconButton, Toolbar, Typography } from '@material-ui/core/';

const Header = () => {
  return (
    <>
      <Toolbar>
        <Button size="medium">Nura's Blog</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap>
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        </Toolbar>
    </>
  )
}

export default Header
