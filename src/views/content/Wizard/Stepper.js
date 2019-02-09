import React from 'react';
import { withTheme } from '@material-ui/styles';
import { Step, Stepper, StepLabel } from '@material-ui/core';
import { BigContainer } from './Styles';

const StepperComponent = ({ steps, activeStep }) => {

  return (
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
  )
}

export default withTheme()(StepperComponent);
