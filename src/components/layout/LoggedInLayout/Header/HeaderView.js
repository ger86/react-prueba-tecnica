import React from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {USER_LIST, LOGOUT} from 'config/routing/paths/user';
import {default as userPropTypes} from 'propTypes/user';
import useStyles from './styles';

const menuAnchorOrigin = {
  vertical: 'bottom',
  horizontal: 'center'
};

const menuTransformOrigin = {
  vertical: 'top',
  horizontal: 'center'
};

HeaderView.propTypes = {
  userMenuElement: PropTypes.object,
  onClickUserName: PropTypes.func.isRequired,
  onCloseUserMenu: PropTypes.func.isRequired,
  user: userPropTypes.isRequired
};

HeaderView.defaultProps = {
  menuElement: null
};

function HeaderView({onClickUserName, userMenuElement, onCloseUserMenu, user}) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Grid container spacing={4} alignItems="center">
        <Grid item sm={6} xs={12}></Grid>
        <Grid item sm={6} xs={12}>
          <div className={classes.rightMenu}>
            <div>
              <NavLink className={classes.navLink} activeClassName="active" to={USER_LIST}>
                Lista de usuarios
              </NavLink>
            </div>
            <div>
              <ButtonBase onClick={onClickUserName}>
                <Typography variant="h4" component="p">
                  <strong>{`${user.first_name}`}</strong>
                </Typography>
                <KeyboardArrowDownIcon />
              </ButtonBase>
              <Menu
                id="user-menu"
                anchorEl={userMenuElement}
                keepMounted
                getContentAnchorEl={null}
                open={Boolean(userMenuElement)}
                onClose={onCloseUserMenu}
                anchorOrigin={menuAnchorOrigin}
                transformOrigin={menuTransformOrigin}
              >
                <MenuItem component={Link} to={LOGOUT} onClick={onCloseUserMenu}>
                  Cerrar sesión
                </MenuItem>
              </Menu>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HeaderView;
