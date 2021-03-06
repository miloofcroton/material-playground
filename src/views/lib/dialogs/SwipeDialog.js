import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { styled } from '@material-ui/styles';
import { Typography, Button, MobileStepper } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import BaseDialog from './BaseDialog';

const logo = require('../../../assets/images/logo.svg');

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'A first label',
    description: 'This is the first item on the label',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'A second label',
    description: 'This is the second item on the label',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'A third label',
    description: 'This is the third item on the label',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    llabel: 'A fifth label',
    description: 'This is the fifth item on the label',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Other label',
    description: 'This is other label',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];


const Container = styled('div')({
  maxWidth: 600,
  flexGrow: 1,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
});

const StepsContainer = styled('div')({
  marginLeft: 72,
  textAlign: 'left',
  marginTop: 20,
  height: 65
});

const UpperTyp = styled(Typography)({
  textTransform: 'uppercase'
});

class SwipeDialog extends Component {

  state = {
    activeStep: 0
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const maxSteps = tutorialSteps.length;
    const { activeStep } = this.state;
    return (
      <BaseDialog {...this.props}>
        <Container>

          <div>
            <img width={100} src={logo} alt="alty" />
          </div>

          <div>
            <AutoPlaySwipeableViews
              axis='x'
              index={activeStep}
              onChangeIndex={this.handleStepChange}
              enableMouseEvents
            >
              {tutorialSteps.map((step, index) => (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img src={step.imgPath} alt={step.label} />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}y
              nextButton={
                <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                  Next
                </Button>
              }
              backButton={
                <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                  Back
                </Button>
              }
            />
          </div>

          <StepsContainer>
            <UpperTyp color='secondary' gutterBottom>
              {tutorialSteps[activeStep].label}
            </UpperTyp>
            <Typography variant="body1" gutterBottom>
              {tutorialSteps[activeStep].description}
            </Typography>
          </StepsContainer>

          <div>
            <Button component={Link} to='/dashboard' variant='contained' onClick={this.handleClose} color="primary" autoFocus>
                Getting started
            </Button>
          </div>

        </Container>
      </BaseDialog>
    )
  }
}

export default withRouter(SwipeDialog);
