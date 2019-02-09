import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { styled, withTheme } from '@material-ui/styles';
import { Paper, Typography, Grid, Button } from '@material-ui/core';

import InstructionDialog from '../../lib/dialogs/InstructionDialog';
import SwipeDialog from '../../lib/dialogs/SwipeDialog';
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

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing.unit * 3,
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const ActionButton = styled(Button)(({ theme }) => ({
  textTransform: 'uppercase',
  margin: theme.spacing.unit,
  width: 152
}));

const AlignRight = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end'
});

const Box = styled('div')({
  marginBottom: 40,
  height: 65
});


class Main extends Component {

  state = {
    learnMoredialog: false,
    getStartedDialog: false
  };

  componentDidMount() {}

  openDialog = (event) => {
    this.setState({learnMoredialog: true});
  }

  dialogClose = (event) => {
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
          <StyledGrid spacing={24} alignItems="center" justify="center" container>

            <Grid item xs={12} md={4}>
                <StyledPaper>
                  <Box>
                    <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                      About Us
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Our company is <br/> proud of our history
                    </Typography>
                  </Box>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <ActionButton color='primary' variant="contained">
                      Learn more
                    </ActionButton>
                  </div>
                </StyledPaper>
              </Grid>

              <Grid item xs={12} md={4}>
                <StyledPaper>
                  <Box>
                    <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                      Our Latest Offering
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Check it out!
                    </Typography>
                  </Box>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <ActionButton color='primary' variant="contained">
                      Learn more
                    </ActionButton>
                  </div>
                </StyledPaper>
              </Grid>

              <Grid item xs={12} md={4}>
                <StyledPaper>
                  <Box>
                    <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                      Our Blog
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      See where we've been, or get going!
                    </Typography>
                  </Box>
                  <AlignRight>
                    <ActionButton
                      onClick={this.openDialog}
                      variant="outlined"
                    >
                      Gallery
                    </ActionButton>
                    <ActionButton
                      onClick={this.openGetStartedDialog}
                      color='primary'
                      variant="contained"
                    >
                      Started
                    </ActionButton>
                  </AlignRight>
                </StyledPaper>
              </Grid>

            <Grid container item xs={12}>

              <Grid item xs={12}>
                <StyledPaper>
                  <Box>
                    <Typography color='secondary' gutterBottom>
                      Full box
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      This is an example of a full-width box
                    </Typography>
                  </Box>
                  <AlignRight>
                    <ActionButton color='primary' variant="contained">
                      Learn more
                    </ActionButton>
                  </AlignRight>
                </StyledPaper>
              </Grid>

            </Grid>

          </StyledGrid>
        </Grid>

        <SwipeDialog
          open={this.state.learnMoredialog}
          onClose={this.dialogClose} />
        <InstructionDialog
          open={this.state.getStartedDialog}
          onClose={this.closeGetStartedDialog}
        />

      </DivRoot>
    )
  }
}

export default withRouter(withTheme()(Main));
