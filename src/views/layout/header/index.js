import React,  { Fragment, Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { styled, withTheme } from '@material-ui/styles';
import { Grid, Typography, Toolbar, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

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

                    <MobileMenu
                      mobileMenuClose={this.mobileMenuClose}
                      mobileMenuOpen={this.mobileMenuOpen}
                      menuDrawer={this.state.menuDrawer}
                      current={this.current}
                    />

                    <DesktopMenu
                      value={this.state.value}
                      handleChange={this.handleChange}
                      current={this.current}
                    />

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
