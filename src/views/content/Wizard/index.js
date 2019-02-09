import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { styled, withTheme } from '@material-ui/styles';
import {
  Grid,
} from '@material-ui/core';

import Stepper from './Stepper'
import StepperNav from './StepperNav';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import StepSix from './StepSix';

import Back from '../../lib/navigation/Back'

const qs = require('query-string');
const backgroundShape = require('../../../assets/images/shape.svg');
const numeral = require('numeral');
numeral.defaultFormat('0,000');

const DivRoot = styled('div')(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.primary['A100'],
  overflow: 'hidden',
  background: `url(${backgroundShape}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: '0 400px',
  marginTop: 10,
  padding: 20,
  paddingBottom: 200
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  margin: `0 ${theme.spacing.unit * 2}px`
}));

const StepContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const getSteps = () => {
  return [
    'Info',
    'Bank',
    'Loan details',
    'Terms',
    'Confirm',
    'Done'
  ];
}

class Wizard extends Component {

  state = {
    activeStep: 0,
    receivingAccount: 'Home Account',
    repaymentAccount: 'Saving Account',
    termsChecked: false
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
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

  goToDashboard = event => {
    const queryString = this.props.location.search

    this.props.history.push({
      pathname: '/dashboard',
      search: queryString
    })
  }

  render() {

    const queryString = this.props.location.search
    const parsed = queryString ? qs.parse(queryString) : {}
    const steps = getSteps();
    const { activeStep, termsChecked, receivingAccount, repaymentAccount } = this.state;

    return (
      <DivRoot>
        <StyledGrid spacing={24} alignItems="center" justify="center" container>
          <Grid item xs={12}>

            <Back />

            <StepContainer>

              <Stepper
                steps={steps}
                activeStep={activeStep}
              />

              { activeStep === 0 && (
                <StepOne />
              )}
              { activeStep === 1 && (
                <StepTwo
                  receivingAccount={receivingAccount}
                  handleChange={this.handleChange}
                />
              )}
              { activeStep === 2 && (
                <StepThree
                  parsed={parsed}
                  repaymentAccount={repaymentAccount}
                  handleChange={this.handleChange}
                />
              )}
              { activeStep === 3 && (
                <StepFour
                  termsChecked={termsChecked}
                  handleTerms={this.handleTerms}
                />
              )}
              { activeStep === 4 && (
                <StepFive />
              )}
              { (activeStep === 5 || activeStep === 6) && (
                <StepSix />
              )}

              <StepperNav
                handleBack={this.handleBack}
                handleNext={this.handleNext}
                goToDashboard={this.goToDashboard}
                activeStep={activeStep}
                termsChecked={termsChecked}
              />

            </StepContainer>

          </Grid>
        </StyledGrid>
      </DivRoot>
    )
  }
}

export default withRouter(withTheme()(Wizard));
