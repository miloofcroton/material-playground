import React, { Component } from 'react';
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
  FormGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';

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

const SmallContainer = styled('div')({
  width: '60%'
});

const BigContainer = styled('div')({
  width: '80%'
});

const StepContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const BoldTypography = styled(Typography)({
  fontWeight: 'bold'
});

const TopInfo = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 42
});

const StyledFormControl = styled(FormControl)({
  width: '100%'
});

const FlexBar = styled('div')({
  marginTop: 32,
  display: 'flex',
  justifyContent: 'center'
});

const OutlinedButton = styled(Button)(({ theme }) => ({
  textTransform: 'uppercase',
  margin: theme.spacing.unit
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing.unit * 3,
  textAlign: 'left',
  color: theme.palette.text.secondary
}));

const BorderColumn = styled('div')(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey['100']}`,
  paddingBottom: 24,
  marginBottom: 24
}));

const UpperTyp = styled(Typography)({
  textTransform: 'uppercase'
});

const BoldTyp = styled(Typography)({
  fontWeight: 'bold'
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
    repaimentAccount: 'Saving Account',
    termsChecked: false
  }

  componentDidMount() {

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

  stepActions() {
    if(this.state.activeStep === 3) {
      return 'Accept';
    }
    if(this.state.activeStep === 4) {
      return 'Send';
    }
    if(this.state.activeStep === 5) {
      return 'Done';
    }
    return 'Next';
  }

  goToDashboard = event => {
    const queryString = this.props.location.search

    this.props.history.push({
      pathname: '/dashboard',
      search: queryString
    })
  }

  render() {

    const { theme } = this.props;
    const queryString = this.props.location.search
    const parsed = queryString ? qs.parse(queryString) : {}
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <DivRoot>
        <StyledGrid spacing={24} alignItems="center" justify="center" container>
          <Grid item xs={12}>
            <Back />
            <StepContainer>
              <BigContainer>
                <Stepper
                  style={{ backgroundColor: 'transparent' }}
                  activeStep={activeStep}
                  alternativeLabel
                >
                  {steps.map(label => {
                    return (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
              </BigContainer>
              { activeStep === 0 && (
              <BigContainer>
                <StyledPaper>
                  <TopInfo>
                    <div>
                      <BoldTyp variant="subtitle1" gutterBottom>
                        Information
                      </BoldTyp>
                      <Typography variant="body2" gutterBottom>
                        General information about the service
                      </Typography>
                    </div>
                    <div>
                    <OutlinedButton
                      variant="outlined"
                      size="large"
                    >
                      Edit
                    </OutlinedButton>
                    </div>
                  </TopInfo>
                  <Grid item container xs={12}>
                    <Grid item xs={6}>
                      <UpperTyp color='secondary' gutterBottom>
                        User
                      </UpperTyp>
                      <Typography variant="h5" gutterBottom>
                        John Doe
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <UpperTyp color='secondary' gutterBottom>
                        City
                      </UpperTyp>
                      <Typography variant="h5" gutterBottom>
                        Tokyo
                      </Typography>
                    </Grid>
                  </Grid>
                </StyledPaper>
              </BigContainer>
              )}
              { activeStep === 1 && (
              <SmallContainer>
                <StyledPaper>
                  <div>
                    <div style={{marginBottom: 32}}>
                      <BoldTyp variant="subtitle1" gutterBottom>
                        Bank information
                      </BoldTyp>
                      <Typography variant="body2" gutterBottom>
                        Select account to receive the money
                      </Typography>
                    </div>
                    <div style={{marginBottom: 32}}>
                      <UpperTyp color='secondary' gutterBottom>
                        Bank
                      </UpperTyp>
                      <Typography variant="h5" gutterBottom>
                        N26
                      </Typography>
                    </div>
                    <div>
                      <UpperTyp style={{ marginBottom: 20 }} color='secondary' gutterBottom>
                        Receiving account
                      </UpperTyp>
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
                            <em></em>
                          </MenuItem>
                          <MenuItem value={'0297 00988200918'}>
                            First account
                          </MenuItem>
                          <MenuItem value={'0235 00235233332'}>
                            Second account
                          </MenuItem>
                          <MenuItem value={'1256 00864222212'}>
                            Third account
                          </MenuItem>
                        </Select>
                      </StyledFormControl>
                    </div>
                  </div>
                </StyledPaper>
              </SmallContainer>
              )}
              { activeStep === 2 && (
              <BigContainer>
                <StyledPaper>
                  <TopInfo>
                    <div>
                      <BoldTypography variant="subtitle1" gutterBottom>
                        Details
                      </BoldTypography>
                      <Typography variant="body2" gutterBottom>
                        We need some details about any information
                      </Typography>
                    </div>
                    <div>
                      <OutlinedButton variant="outlined" size="large">
                        Edit
                      </OutlinedButton>
                    </div>
                  </TopInfo>
                  <BorderColumn>
                    <Grid item container xs={12} style={{marginBottom: 32}}>
                      <Grid item xs={6}>
                        <UpperTyp color='secondary' gutterBottom>
                          Amount
                        </UpperTyp>
                        <Typography variant="h5" gutterBottom>
                          { parsed ? numeral(parsed.amount).format() : '75,000'} DKK
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <UpperTyp color='secondary' gutterBottom>
                          Total fees
                        </UpperTyp>
                        <Typography variant="h5" gutterBottom>
                          0 DKK
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                      <Grid item xs={6}>
                        <UpperTyp color='secondary' gutterBottom>
                          Total price
                        </UpperTyp>
                        <Typography variant="h5" gutterBottom>
                          { parsed ? numeral(parsed.interest).format() : '6,600'} USD
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <UpperTyp color='secondary' gutterBottom>
                          Total cost
                        </UpperTyp>
                        <Typography variant="h5" gutterBottom>
                          { parsed ? numeral(parsed.cost).format() : '81,600'} USD
                        </Typography>
                      </Grid>
                    </Grid>
                  </BorderColumn>
                  <Grid item container xs={12}>
                    <Grid item container xs={12} style={{marginBottom: 32}}>
                      <Grid item xs={6}>
                        <UpperTyp color='secondary' gutterBottom>
                          How often
                        </UpperTyp>
                        <Typography variant="h5" gutterBottom>
                          Once a month
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <UpperTyp color='secondary' gutterBottom>
                        When to start
                      </UpperTyp>
                      <Typography variant="h5" gutterBottom>
                        01 February 2019
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <UpperTyp color='secondary' gutterBottom>
                        When it ends?
                      </UpperTyp>
                      <Typography variant="h5" gutterBottom>
                        01 May 2019
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container xs={12} style={{marginTop: 24}}>
                    <Grid item xs={6}>
                      <Typography style={{textTransform: 'uppercase', marginBottom: 20}} color='secondary' gutterBottom>
                        Destination account
                      </Typography>
                      <StyledFormControl variant="outlined">
                        <Select
                          value={this.state.repaimentAccount}
                          onChange={this.handleChange}
                          input={
                            <OutlinedInput
                              labelWidth={0}
                              name="repaimentAccount"
                            />
                          }
                        >
                          <MenuItem value="">
                            <em></em>
                          </MenuItem>
                          <MenuItem value={'0297 00988200918'}>Account one</MenuItem>
                          <MenuItem value={'0235 00235233332'}>Account two</MenuItem>
                          <MenuItem value={'1256 00864222212'}>Other account</MenuItem>
                        </Select>
                      </StyledFormControl>
                    </Grid>
                  </Grid>
                </StyledPaper>
              </BigContainer>
              )}
              { activeStep === 3 && (
                <BigContainer>
                  <StyledPaper>
                    <div style={{marginBottom: 24}}>
                      <BoldTyp variant="subtitle1" gutterBottom>
                        Terms & Conditions
                      </BoldTyp>
                      <Typography variant="body2" gutterBottom>
                        Please read through and accept the terms & conditions
                      </Typography>
                    </div>
                    <div style={{ height: 330, padding: 16, border: '2px solid #ccc', borderRadius: '3px', overflowY: 'scroll' }}>
                      <BoldTyp variant="subtitle1" gutterBottom>
                        1. Your agreement
                      </BoldTyp>
                      <Typography variant="body2" gutterBottom>
                      By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.

PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.
                      </Typography>
                      <BoldTyp variant="subtitle1" gutterBottom>
                        2. Privacy
                      </BoldTyp>
                      <Typography variant="body2" gutterBottom>
                        Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.
                        By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.

PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.
                      </Typography>
                    </div>
                    <FormGroup row>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.termsChecked}
                            onChange={this.handleTerms}
                            value='check'
                          />
                        }
                        label="I have read and understood the terms & conditions"
                      />
                    </FormGroup>
                  </StyledPaper>
                </BigContainer>
              )}
              { activeStep === 4 && (
              <SmallContainer>
                <StyledPaper>
                  <Grid item container xs={12}>
                    <Grid item xs={12}>
                      <BoldTyp variant="subtitle1" gutterBottom>
                        Sign & confirm
                      </BoldTyp>
                      <Typography variant="body2" gutterBottom>
                        Sign and confirm your agreement
                      </Typography>
                    </Grid>
                  </Grid>
                </StyledPaper>
                </SmallContainer>
              )}
              { (activeStep === 5 || activeStep === 6) && (
              <SmallContainer>
                <StyledPaper>
                  <Grid item container xs={12}>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" gutterBottom>
                          Congratulations <span role="img" aria-label="party">🎉</span>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        We have now a positive response
                      </Typography>
                      <Button fullWidth variant='outlined'>
                        Download the service invoice or whatever
                      </Button>
                    </Grid>
                  </Grid>
                </StyledPaper>
              </SmallContainer>
              )}
              <FlexBar>
                { activeStep !== 5 && (
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    style={{
                      marginRight: theme.spacing.unit,
                    }}
                    size='large'
                  >
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={activeStep !== 5 ? this.handleNext : this.goToDashboard}
                  size='large'
                  disabled={this.state.activeStep === 3 && !this.state.termsChecked}
                >
                  {this.stepActions()}
                </Button>
              </FlexBar>
            </StepContainer>
          </Grid>
        </StyledGrid>
      </DivRoot>
    )
  }
}

export default withRouter(withTheme()(Wizard));
