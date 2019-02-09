import React from 'react';
import { withTheme } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { FlexBar } from './Styles';

const StepperNav = ({
  handleBack, handleNext, goToDashboard,
  activeStep, termsChecked,
  theme,
}) => {

  const stepActions = () => {
    if (activeStep === 3) {
      return 'Accept';
    }
    if (activeStep === 4) {
      return 'Send';
    }
    if (activeStep === 5) {
      return 'Done';
    }
    return 'Next';
  }

  return (
    <FlexBar>
      { activeStep !== 5 && (
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
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
        onClick={activeStep !== 5 ? handleNext : goToDashboard}
        size='large'
        disabled={activeStep === 3 && !termsChecked}
      >
        {stepActions()}
      </Button>
    </FlexBar>
  );
}

export default withTheme()(StepperNav);
