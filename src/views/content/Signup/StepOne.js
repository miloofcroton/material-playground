import React from 'react';
import { withTheme } from '@material-ui/styles';
import { Typography, OutlinedInput, MenuItem, Select } from '@material-ui/core';
import { SmallContainer, StyledPaper, StyledFormControl } from './Styles'

const StepOne = ({ receivingAccount, handleChange }) => {

  return (
    <SmallContainer>
      <StyledPaper>
        <div>
          <div style={{marginBottom: 32}}>
            <Typography variant="subtitle1" style={{fontWeight: 'bold'}} gutterBottom>
              Select
            </Typography>
            <Typography variant="body2" gutterBottom>
              A item to select
            </Typography>
          </div>
          <div>
            <Typography style={{textTransform: 'uppercase', marginBottom: 20}} color='secondary' gutterBottom>
              First options
            </Typography>
            <StyledFormControl variant="outlined">
              <Select
                value={receivingAccount}
                onChange={handleChange}
                input={
                  <OutlinedInput
                    labelWidth={0}
                    name="receivingAccount"
                  />
                }
              >
                <MenuItem value="">
                  <em>Select some option</em>
                </MenuItem>
                <MenuItem value={'first'}>Option 1</MenuItem>
                <MenuItem value={'second'}>Other option</MenuItem>
              </Select>
            </StyledFormControl>
          </div>
        </div>
      </StyledPaper>
    </SmallContainer>
  )
}

export default withTheme()(StepOne);
