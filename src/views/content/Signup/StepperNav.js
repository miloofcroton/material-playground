import React from 'react';
import { withTheme } from '@material-ui/styles';
import { ButtonBar, BackButton, StyledButton } from './Styles';

const StepperNav = ({
  handleBack, handleNext,
  activeStep,
  receivingAccount,
}) => {


  const stepActions = () => {
    if (activeStep === 0) {
      return 'Sign in';
    }
    if (activeStep === 1) {
      return 'Next';
    }
    if (activeStep === 2) {
      return 'Accept';
    }
    return 'Next';
  }

  return (
    <ButtonBar>
      { activeStep !== 2 ? (
        <BackButton
          disabled={activeStep === 0}
          onClick={handleBack}
          size='large'
        >
          Back
        </BackButton>
      ) : (
        <BackButton
          disabled={activeStep === 0}
          onClick={handleBack}
          size='large'
        >
          Cancel
        </BackButton>
      )}
      <StyledButton
        variant="contained"
        color="primary"
        onClick={handleNext}
        size='large'
        style={receivingAccount.length ? { color: 'white' } : {}}
        disabled={!receivingAccount.length}
      >
        {stepActions()}
      </StyledButton>
    </ButtonBar>
  );
}

export default withTheme()(StepperNav);
