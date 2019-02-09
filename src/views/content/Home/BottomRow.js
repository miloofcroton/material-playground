import React from 'react';
import { withTheme } from '@material-ui/styles';
import { Typography, Grid } from '@material-ui/core';
import { StyledPaper, ActionButton, AlignRight, Box, UpperTyp } from './Styles';

const BottomRow = () => {

  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <StyledPaper>
          <Box>
            <UpperTyp color='secondary' gutterBottom>
              Full box
            </UpperTyp>
            <Typography variant="body1" gutterBottom>
              This is an example of a full-width box
            </Typography>
          </Box>
          <AlignRight>
            <ActionButton color='primary' variant="contained">
              Learn more
            </ActionButton>
          </AlignRight>
        </StyledPaper>
      </Grid>
    </Grid>
  )
}

export default withTheme()(BottomRow);
