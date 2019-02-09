import React, { Fragment } from 'react';
import { withTheme } from '@material-ui/styles';
import { Typography, Grid } from '@material-ui/core';
import { StyledPaper, ActionButton, AlignRight, Box, UpperTyp } from './Styles';

const TopRow = ({ openLearnMoreDialog, openGetStartedDialog }) => {

    return (
      <Fragment>
        <Grid item xs={12} md={4}>
          <StyledPaper>
            <Box>
              <UpperTyp color='secondary' gutterBottom>
                About Us
              </UpperTyp>
              <Typography variant="body1" gutterBottom>
                Our company is <br/> proud of our history
              </Typography>
            </Box>
            <AlignRight>
              <ActionButton color='primary' variant="contained">
                Learn more
              </ActionButton>
            </AlignRight>
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={4}>
          <StyledPaper>
            <Box>
              <UpperTyp color='secondary' gutterBottom>
                Our Latest Offering
              </UpperTyp>
              <Typography variant="body1" gutterBottom>
                Check it out!
              </Typography>
            </Box>
            <AlignRight>
              <ActionButton color='primary' variant="contained">
                Learn more
              </ActionButton>
            </AlignRight>
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={4}>
          <StyledPaper>
            <Box>
              <UpperTyp color='secondary' gutterBottom>
                Our Blog
              </UpperTyp>
              <Typography variant="body1" gutterBottom>
                See where we've been, or get going!
              </Typography>
            </Box>
            <AlignRight>
              <ActionButton
                onClick={openLearnMoreDialog}
                variant="outlined"
              >
                Gallery
              </ActionButton>
              <ActionButton
                onClick={openGetStartedDialog}
                color='primary'
                variant="contained"
              >
                Started
              </ActionButton>
            </AlignRight>
          </StyledPaper>
        </Grid>
      </Fragment>
    )
}

export default withTheme()(TopRow);
