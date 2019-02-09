import React from 'react';
import { withTheme } from '@material-ui/styles';
import {
  Typography,
  Grid,
} from '@material-ui/core';
import {
  BigContainer,
  TopInfo,
  OutlinedButton,
  StyledPaper,
  UpperTyp,
  BoldTyp,
} from './Styles'

const StepOne = () => {

  return (
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
  )
}

export default withTheme()(StepOne);
