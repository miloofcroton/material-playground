import React from 'react';
import { withTheme } from '@material-ui/styles';
import {
  Typography,
  Grid,
  OutlinedInput,
  MenuItem,
  Select,
} from '@material-ui/core';
import {
  BigContainer,
  TopInfo,
  StyledFormControl,
  OutlinedButton,
  StyledPaper,
  BorderColumn,
  UpperTyp,
  BoldTyp,
} from './Styles'

const numeral = require('numeral');
numeral.defaultFormat('0,000');

const StepThree = ({ parsed, repaymentAccount, handleChange }) => {

  return (
    <BigContainer>
      <StyledPaper>
        <TopInfo>
          <div>
            <BoldTyp variant="subtitle1" gutterBottom>
              Details
            </BoldTyp>
            <Typography variant="body2" gutterBottom>
              We need some details about any information
            </Typography>
          </div>
          <div>
            <OutlinedButton variant="outlined" size="large">
              Edit
            </OutlinedButton>
          </div>
        </TopInfo>
        <BorderColumn>
          <Grid item container xs={12} style={{marginBottom: 32}}>
            <Grid item xs={6}>
              <UpperTyp color='secondary' gutterBottom>
                Amount
              </UpperTyp>
              <Typography variant="h5" gutterBottom>
                { parsed ? numeral(parsed.amount).format() : '75,000'} DKK
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <UpperTyp color='secondary' gutterBottom>
                Total fees
              </UpperTyp>
              <Typography variant="h5" gutterBottom>
                0 DKK
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={6}>
              <UpperTyp color='secondary' gutterBottom>
                Total price
              </UpperTyp>
              <Typography variant="h5" gutterBottom>
                { parsed ? numeral(parsed.interest).format() : '6,600'} USD
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <UpperTyp color='secondary' gutterBottom>
                Total cost
              </UpperTyp>
              <Typography variant="h5" gutterBottom>
                { parsed ? numeral(parsed.cost).format() : '81,600'} USD
              </Typography>
            </Grid>
          </Grid>
        </BorderColumn>
        <Grid item container xs={12}>
          <Grid item container xs={12} style={{marginBottom: 32}}>
            <Grid item xs={6}>
              <UpperTyp color='secondary' gutterBottom>
                How often
              </UpperTyp>
              <Typography variant="h5" gutterBottom>
                Once a month
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <UpperTyp color='secondary' gutterBottom>
              When to start
            </UpperTyp>
            <Typography variant="h5" gutterBottom>
              01 February 2019
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <UpperTyp color='secondary' gutterBottom>
              When it ends?
            </UpperTyp>
            <Typography variant="h5" gutterBottom>
              01 May 2019
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12} style={{marginTop: 24}}>
          <Grid item xs={6}>
            <Typography style={{textTransform: 'uppercase', marginBottom: 20}} color='secondary' gutterBottom>
              Destination account
            </Typography>
            <StyledFormControl variant="outlined">
              <Select
                value={repaymentAccount}
                onChange={handleChange}
                input={
                  <OutlinedInput
                    labelWidth={0}
                    name="repaymentAccount"
                  />
                }
              >
                <MenuItem value="">
                  <em></em>
                </MenuItem>
                <MenuItem value={'0297 00988200918'}>Account one</MenuItem>
                <MenuItem value={'0235 00235233332'}>Account two</MenuItem>
                <MenuItem value={'1256 00864222212'}>Other account</MenuItem>
              </Select>
            </StyledFormControl>
          </Grid>
        </Grid>
      </StyledPaper>
    </BigContainer>
  )
}

export default withTheme()(StepThree);
