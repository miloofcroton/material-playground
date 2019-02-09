import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { styled, withTheme } from '@material-ui/styles';
import { Paper, Typography, Grid, Button } from '@material-ui/core';

import withStyles from '@material-ui/core/styles/withStyles';

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

const styles = theme => ({
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.unit * 2
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit
  },
  actionButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit,
    width: 152
  },
  blockCenter: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  block: {
    padding: theme.spacing.unit * 2,
  },
  box: {
    marginBottom: 40,
    height: 65
  },
  inlining: {
    display: 'inline-block',
    marginRight: 10
  },
  buttonBar: {
    display: 'flex'
  },
  alignRight: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  noBorder: {
    borderBottomStyle: 'hidden'
  },
  loadingState: {
    opacity: 0.05
  },
  loadingMessage: {
    position: 'absolute',
    top: '40%',
    left: '40%'
  }
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
    const { classes } = this.props;
    return (
      <DivRoot className={classes.root}>

        <Grid container justify="center">

          <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>

          <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                    About Us
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Our company is <br/> proud of our history
                  </Typography>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                  <Button color='primary' variant="contained" className={classes.actionButtom}>
                    Learn more
                  </Button>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                    Our Latest Offering
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Check it out!
                  </Typography>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                  <Button color='primary' variant="contained" className={classes.actionButtom}>
                    Learn more
                  </Button>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                    Our Blog
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    See where we've been, or get going!
                  </Typography>
                </div>
                <div className={classes.alignRight}>
                  <Button onClick={this.openDialog}  variant="outlined" className={classes.actionButtom}>
                    Gallery
                  </Button>
                  <Button onClick={this.openGetStartedDialog} color='primary' variant="contained" className={classes.actionButtom}>
                    Started
                  </Button>
                </div>
              </Paper>
            </Grid>

            <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <div>
                      <div className={classes.box}>
                        <Typography color='secondary' gutterBottom>
                          Full box
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          This is an example of a full-width box
                        </Typography>
                      </div>
                      <div className={classes.alignRight}>
                        <Button color='primary' variant="contained" className={classes.actionButtom}>
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </Paper>
              </Grid>
            </Grid>

          </Grid>
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

export default withRouter(withStyles(styles)(withTheme()(Main)));
