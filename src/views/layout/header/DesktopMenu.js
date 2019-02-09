import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';
import Menu from '../../routes/menu';

const DesktopMenu = ({ value, handleChange, current, location }) => {

  return (
    <Tabs
      value={current() || value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
    >
      {Menu.map((item, index) => (
        <Tab
          key={index}
          component={Link}
          to={{
            pathname: item.pathname,
            search: location.search
          }}
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            minWidth: 'auto'
          }}
          label={item.label}
        />
      ))}
    </Tabs>
  )
}

export default withRouter(DesktopMenu);
