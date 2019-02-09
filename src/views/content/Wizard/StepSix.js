import React from 'react';
import { withTheme } from '@material-ui/styles';
import {
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import {
  SmallContainer,
  StyledPaper,
} from './Styles'

const StepSix = () => {

  return (
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
  )
}

export default withTheme()(StepSix);
