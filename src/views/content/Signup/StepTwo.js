import React from 'react';
import { withTheme } from '@material-ui/styles';
import { Typography, Grid } from '@material-ui/core';
import { StyledPaper, SmallContainer } from './Styles';

const StepTwo = () => {

  return (
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
  )
}

export default withTheme()(StepTwo);
