import React from 'react';
import { withTheme } from '@material-ui/styles';
import { Typography, CircularProgress, Fade } from '@material-ui/core';
import { BigContainer, StyledPaper } from './Styles';

const StepFour = ({ loading }) => {

  return (
    <BigContainer>
      <StyledPaper>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{width: 380, textAlign: 'center'}}>
            <div style={{marginBottom: 32}}>
              <Typography variant="h6" style={{fontWeight: 'bold'}} gutterBottom>
                Collecting your data
              </Typography>
              <Typography variant="body2" gutterBottom>
                We are processing your request
              </Typography>
            </div>
            <div>
              <Fade
                in={loading}
                style={{
                  transitionDelay: loading ? '800ms' : '0ms',
                }}
                unmountOnExit
              >
                <CircularProgress style={{marginBottom: 32, width: 100, height: 100}} />
              </Fade>
            </div>
          </div>
        </div>
      </StyledPaper>
    </BigContainer>
  )
}

export default withTheme()(StepFour);
