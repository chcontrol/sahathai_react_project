import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
// import Logo from 'src/components/Logo';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    height: 40
  },
  avatar: {
    width: 60,
    height: 60
  }
}));

const TopBar = ({
  Username,
  UserData,
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();
  const [notifications] = useState([]);
  const navigate = useNavigate();

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('username');
  }

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          {/* <Logo style={{marginBottom:25}} /> */}

          <Typography variant="h3" component="h2" style={{ paddingBottom: 25, color: '#FFFFFF' }}>
            SAHATHAI
          </Typography>

        </RouterLink>
        <Box flexGrow={1} />
        <Hidden xlUp>
          <Typography variant="h5" component="h5" style={{ paddingBottom: 25, color: '#FFFFFF' }}>
            {Username}
          </Typography>
          <IconButton color="inherit" style={{ marginBottom: 25 }}>
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" style={{ marginBottom: 25 }} onClick={logout}>
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden xlUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
            style={{ marginBottom: 25 }}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
