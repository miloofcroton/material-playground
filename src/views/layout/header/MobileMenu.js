import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { List, ListItem, ListItemText, SwipeableDrawer } from '@material-ui/core';
import Menu from '../../routes/menu';

const MobileMenu = ({ mobileMenuClose, mobileMenuOpen, menuDrawer, location }) => {

  return (
    <SwipeableDrawer
      anchor="right"
      open={menuDrawer}
      onOpen={mobileMenuOpen}
      onClose={mobileMenuClose}
    >
      <List>
        {Menu.map((item, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            to={{
              pathname: item.pathname,
              search: location.search
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )
}

export default withRouter(MobileMenu);
