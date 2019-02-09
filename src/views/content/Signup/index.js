import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { styled, withTheme } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import Stepper from './Stepper';
import StepperNav from './StepperNav';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

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

  render() {

    const steps = getSteps();
    const { activeStep, loading, receivingAccount } = this.state;

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

                <Stepper
                  steps={steps}
                  activeStep={activeStep}
                />

                { activeStep === 0 && (
                  <StepOne
                    receivingAccount={receivingAccount}
                    handleChange={this.handleChange}
                  />
                )}
                { activeStep === 1 && (
                  <StepTwo />
                )}
                { activeStep === 2 && (
                  <StepThree />
                )}
                { activeStep === 3 && (
                  <StepFour
                    loading={loading}
                  />
                )}
                { activeStep !== 3 && (
                  <StepperNav
                    handleBack={this.handleBack}
                    handleNext={this.handleNext}
                    activeStep={activeStep}
                    receivingAccount={receivingAccount}
                  />
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
