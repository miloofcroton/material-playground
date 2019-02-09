import React from 'react';
import { withTheme } from '@material-ui/styles';
import {
  Typography,
  Grid,
} from '@material-ui/core';
import {
  SmallContainer,
  StyledPaper,
  BoldTyp,
} from './Styles'

const StepFive = () => {

  return (
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
  )
}

export default withTheme()(StepFive);
