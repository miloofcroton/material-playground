import React from 'react';
import { withTheme } from '@material-ui/styles';
import { Step, StepLabel } from '@material-ui/core';
import { StepGrid, StyledStepper } from './Styles';

const StepperComponent = ({ steps, activeStep }) => {

  return (
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
  )
}

export default withTheme()(StepperComponent);
