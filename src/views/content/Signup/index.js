import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { styled, withTheme } from '@material-ui/styles';
import {
  Typography,
  Grid,
  Paper,
  Button,
  Stepper,
  Step,
  StepLabel,
  OutlinedInput,
  MenuItem,
  FormControl,
  Select,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Fade,
} from '@material-ui/core';
import { Done } from '@material-ui/icons';

import Back from '../../lib/navigation/Back';
const backgroundShape = require('../../../assets/images/shape.svg');
const logo = require('../../../assets/images/logo.svg');
const numeral = require('numeral');
numeral.defaultFormat('0');

const DivRoot = styled('div')(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.secondary['A100'],
  overflow: 'hidden',
  background: `url(${backgroundShape}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: '0 400px',
  marginTop: 10,
  padding: 20,
  paddingBottom: 500
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  margin: `0 ${theme.spacing.unit * 2}px`
}));

const SmallContainer = styled('div')({
  width: '60%'
});

const BigContainer = styled('div')({
  width: '80%'
});

const Logo = styled('div')({
  marginBottom: 24,
  display: 'flex',
  justifyContent: 'center'
});

const StepContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const StepGrid = styled('div')({
  width: '80%'
});

const ButtonBar = styled('div')({
  marginTop: 32,
  display: 'flex',
  justifyContent: 'center'
});

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary['A100']
}));

const BackButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing.unit,
}));

const StyledStepper = styled(Stepper)({
  backgroundColor: 'transparent'
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing.unit * 3,
  textAlign: 'left',
  color: theme.palette.text.secondary
}));

const StyledFormControl = styled(FormControl)({
  width: '100%'
});

const getSteps = () => {
  return [
    'User',
    'Signin',
    'Permission'
  ];
}

class Signup extends Component {

  state = {
    activeStep: 0,
    receivingAccount: '',
    termsChecked: false,
    loading: true
  }

  componentDidMount() {

  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
    if(this.state.activeStep === 2) {
      setTimeout(() => this.props.history.push('/dashboard'), 5000)
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleTerms = event => {
    this.setState({ termsChecked: event.target.checked });
  };

  stepActions() {
    if(this.state.activeStep === 0) {
      return 'Sign in';
    }
    if(this.state.activeStep === 1) {
      return 'Next';
    }
    if(this.state.activeStep === 2) {
      return 'Accept';
    }
    return 'Next';
  }

  render() {

    const steps = getSteps();
    const { activeStep, loading } = this.state;

    return (
      <DivRoot>
        <Back />
        <Grid container justify="center">
          <StyledGrid spacing={24} alignItems="center" justify="center" container>
            <Grid item xs={12}>
              <Logo>
                <img width={100} height={100} src={logo} alt="our-logo" />
              </Logo>
              <StepContainer>
                <StepGrid>
                  <StyledStepper activeStep={activeStep} alternativeLabel>
                    {steps.map(label => {
                      return (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      );
                    })}
                  </StyledStepper>
                </StepGrid>
                { activeStep === 0 && (
                <SmallContainer>
                  <StyledPaper>
                    <div>
                      <div style={{marginBottom: 32}}>
                        <Typography variant="subtitle1" style={{fontWeight: 'bold'}} gutterBottom>
                          Select
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          A item to select
                        </Typography>
                      </div>
                      <div>
                        <Typography style={{textTransform: 'uppercase', marginBottom: 20}} color='secondary' gutterBottom>
                          First options
                        </Typography>
                        <StyledFormControl variant="outlined">
                          <Select
                            value={this.state.receivingAccount}
                            onChange={this.handleChange}
                            input={
                              <OutlinedInput
                                labelWidth={0}
                                name="receivingAccount"
                              />
                            }
                          >
                            <MenuItem value="">
                              <em>Select some option</em>
                            </MenuItem>
                            <MenuItem value={'first'}>Option 1</MenuItem>
                            <MenuItem value={'second'}>Other option</MenuItem>
                          </Select>
                        </StyledFormControl>
                      </div>
                    </div>
                  </StyledPaper>
                </SmallContainer>
                )}
                { activeStep === 1 && (
                <SmallContainer>
                  <StyledPaper>
                    <Grid item container xs={12}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle1" gutterBottom>
                          Sign & confirm
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Sign and confirm loan agreement
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          One text to explain that
                        </Typography>
                      </Grid>
                    </Grid>
                  </StyledPaper>
                  </SmallContainer>
                )}
                { activeStep === 2 && (
                <SmallContainer>
                  <StyledPaper>
                    <div>
                      <div style={{marginBottom: 32}}>
                        <Typography variant="subtitle1" gutterBottom>
                          Permissions
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          We need some permissions to proceed.
                        </Typography>
                      </div>
                      <div>
                        <Typography color='secondary' gutterBottom>
                          Accounts
                        </Typography>
                        <List component="nav">
                          <ListItem>
                            <ListItemIcon>
                              <Done />
                            </ListItemIcon>
                            <ListItemText inset primary="0297 00988200918" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Done />
                            </ListItemIcon>
                            <ListItemText inset primary="0297 00988200920" />
                          </ListItem>
                        </List>
                      </div>
                    </div>
                  </StyledPaper>
                </SmallContainer>
                )}
                { activeStep === 3 && (
                <BigContainer>
                  <StyledPaper>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      <div style={{width: 380, textAlign: 'center'}}>
                        <div style={{marginBottom: 32}}>
                          <Typography variant="h6" style={{fontWeight: 'bold'}} gutterBottom>
                            Collecting your data
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            We are processing your request
                          </Typography>
                        </div>
                        <div>
                          <Fade
                            in={loading}
                            style={{
                              transitionDelay: loading ? '800ms' : '0ms',
                            }}
                            unmountOnExit
                          >
                            <CircularProgress style={{marginBottom: 32, width: 100, height: 100}} />
                          </Fade>
                        </div>
                      </div>
                    </div>
                  </StyledPaper>
                </BigContainer>
                )}
                { activeStep !== 3 && (
                    <ButtonBar>
                    { activeStep !== 2 ? (
                      <BackButton
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        size='large'
                      >
                        Back
                      </BackButton>
                    ) : (
                      <BackButton
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        size='large'
                      >
                        Cancel
                      </BackButton>
                    )}
                    <StyledButton
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      size='large'
                      style={this.state.receivingAccount.length ? { color: 'white' } : {}}
                      disabled={!this.state.receivingAccount.length}
                    >
                      {this.stepActions()}
                    </StyledButton>
                  </ButtonBar>
                )}

              </StepContainer>
            </Grid>
          </StyledGrid>
        </Grid>
      </DivRoot>
    )
  }
}

export default withRouter(withTheme()(Signup));
