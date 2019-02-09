import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { styled, withTheme } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import TopRow from './TopRow';
import BottomRow from './BottomRow';
import Dialog from './Dialog';

const backgroundShape = require('../../../assets/images/shape.svg');

const DivRoot = styled('div')(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.grey['100'],
  overflow: 'hidden',
  background: `url(${backgroundShape}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: '0 400px',
  paddingBottom: 200
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  width: 1200,
  marginTop: 40,
  [theme.breakpoints.down('sm')]: {
    width: 'calc(100% - 20px)'
  }
}));

class Home extends Component {

  state = {
    learnMoredialog: false,
    getStartedDialog: false
  };

  openLearnMoreDialog = (event) => {
    this.setState({learnMoredialog: true});
  }

  closeLearnMoreDialog = (event) => {
    this.setState({learnMoredialog: false});
  }

  openGetStartedDialog = (event) => {
    this.setState({getStartedDialog: true});
  }

  closeGetStartedDialog = (event) => {
    this.setState({getStartedDialog: false});
  }

  render() {
    return (
      <DivRoot>

      <Grid container justify="center">
          <StyledGrid container spacing={24} alignItems="center" justify="center">

            <TopRow
              openLearnMoreDialog={this.openLearnMoreDialog}
              openGetStartedDialog={this.openGetStartedDialog}
            />

            <BottomRow />

          </StyledGrid>
        </Grid>

        <Dialog
          learnMoredialog={this.state.learnMoredialog}
          closeLearnMoreDialog={this.closeLearnMoreDialog}
          getStartedDialog={this.state.getStartedDialog}
          closeGetStartedDialog={this.closeGetStartedDialog}
        />

      </DivRoot>
    )
  }
}

export default withRouter(withTheme()(Home));
