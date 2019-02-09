import React from 'react';
import { withTheme } from '@material-ui/styles';
import {
  Typography,
  OutlinedInput,
  MenuItem,
  Select,
} from '@material-ui/core';
import {
  SmallContainer,
  StyledFormControl,
  StyledPaper,
  UpperTyp,
  BoldTyp,
} from './Styles'

const StepTwo = ({ receivingAccount, handleChange }) => {

  return (
    <SmallContainer>
      <StyledPaper>
        <div>
          <div style={{marginBottom: 32}}>
            <BoldTyp variant="subtitle1" gutterBottom>
              Bank information
            </BoldTyp>
            <Typography variant="body2" gutterBottom>
              Select account to receive the money
            </Typography>
          </div>
          <div style={{marginBottom: 32}}>
            <UpperTyp color='secondary' gutterBottom>
              Bank
            </UpperTyp>
            <Typography variant="h5" gutterBottom>
              N26
            </Typography>
          </div>
          <div>
            <UpperTyp style={{ marginBottom: 20 }} color='secondary' gutterBottom>
              Receiving account
            </UpperTyp>
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
                  <em></em>
                </MenuItem>
                <MenuItem value={'0297 00988200918'}>
                  First account
                </MenuItem>
                <MenuItem value={'0235 00235233332'}>
                  Second account
                </MenuItem>
                <MenuItem value={'1256 00864222212'}>
                  Third account
                </MenuItem>
              </Select>
            </StyledFormControl>
          </div>
        </div>
      </StyledPaper>
    </SmallContainer>
  )
}

export default withTheme()(StepTwo);
