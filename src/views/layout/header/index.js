import React,  { Fragment, Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { styled, withTheme } from '@material-ui/styles';
import {
  Grid,
  Typography,
  Toolbar,
  AppBar,
  Tabs,
  Tab,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import Menu from '../../routes/menu';
const logo = require('../../../assets/images/logo.svg');

const RootAppBar = styled('div')(({ theme }) => ({
  position: 'relative',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.grey['100']}`,
  backgroundColor: 'white',
}));

const GridFlex = styled(Grid)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
}));

const InlineDiv = styled('div')({
  display: 'inline'
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit'
});

const ProductLogo = styled('div')(({ theme }) => ({
  display: 'inline-block',
  borderLeft: `1px solid ${theme.palette.grey['A100']}`,
  marginLeft: 32,
  paddingLeft: 24
}));

const Tagline = styled('span')({
  display: 'inline-block',
  marginLeft: 10
});

const IconContainer = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'block'
  }
}));

const StyledIconButton = styled(IconButton)({
  float: 'right'
});

const TabContainer = styled('div')(({ theme }) => ({
  marginLeft: 32,
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

class Header extends Component {

  state = {
    value: 0,
    menuDrawer: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  mobileMenuOpen = (event) => {
    this.setState({ menuDrawer: true });
  }

  mobileMenuClose = (event) => {
    this.setState({ menuDrawer: false });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  current = () => {
    if(this.props.location.pathname === '/home') {
      return 0
    }
    if(this.props.location.pathname === '/dashboard') {
      return 1
    }
    if(this.props.location.pathname === '/signup') {
      return 2
    }
    if(this.props.location.pathname === '/wizard') {
      return 3
    }
    if(this.props.location.pathname === '/cards') {
      return 4
    }

  }

  render() {

    return (
      <RootAppBar position="absolute" color="default">
        <Toolbar>
          <Grid container spacing={24} alignItems="baseline">

            <GridFlex item container xs={12} alignItems='baseline'>

              <InlineDiv>
                <Typography variant="h6" color="inherit" noWrap>
                  <StyledLink to='/'>
                    <img width={20} src={logo} alt="logo" />
                    <Tagline>React Starter</Tagline>
                  </StyledLink>
                </Typography>
              </InlineDiv>
              {!this.props.noTabs && (
                <Fragment>
                  <ProductLogo>
                    <Typography>
                      React/Apollo Boilerplate
                    </Typography>
                  </ProductLogo>
                  <IconContainer>
                    <StyledIconButton
                      onClick={this.mobileMenuOpen}
                      color="inherit"
                      aria-label="Menu"
                    >
                      <MenuIcon />
                    </StyledIconButton>
                  </IconContainer>
                  <TabContainer>
                    <SwipeableDrawer
                      anchor="right"
                      open={this.state.menuDrawer}
                      onOpen={this.mobileMenuOpen}
                      onClose={this.mobileMenuClose}
                    >
                      <AppBar title="Menu" />
                      <List>
                        {Menu.map((item, index) => (
                          <ListItem
                            button
                            key={index}
                            component={Link}
                            to={{
                              pathname: item.pathname,
                              search: this.props.location.search
                            }}
                          >
                            <ListItemText primary={item.label} />
                          </ListItem>
                        ))}
                      </List>
                    </SwipeableDrawer>
                    <Tabs
                      value={this.current() || this.state.value}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={this.handleChange}
                    >
                      {Menu.map((item, index) => (
                        <Tab
                          key={index}
                          component={Link}
                          to={{
                            pathname: item.pathname,
                            search: this.props.location.search
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
                  </TabContainer>
                </Fragment>
              )}
            </GridFlex>
          </Grid>
        </Toolbar>
      </RootAppBar>
    )
  }
}

export default withRouter(withTheme()(Header));
