import React, { Fragment } from 'react';
import { withTheme } from '@material-ui/styles';
import { Typography, Grid } from '@material-ui/core';
import { Slider } from '@material-ui/lab';
import { StyledPaper, RangeLabel, BlockCenter } from './Styles';

const numeral = require('numeral');
numeral.defaultFormat('0,000');

const TopRow = ({
  monthRange,
  amount, period, start,
  handleChangeAmount, handleChangePeriod, handleChangeStart,
}) => {

  return (
    <Fragment>
      <Grid item xs={12} md={4}>
        <StyledPaper>
          <Typography variant="subtitle1" gutterBottom>
            How much you want to transfer
          </Typography>
          <Typography variant="body2">
            Use slider to set the amount you need.
          </Typography>
          <BlockCenter>
            <Typography color='secondary' variant="h6" gutterBottom>
              {numeral(amount).format()} USD
            </Typography>
          </BlockCenter>
          <Slider
            value={amount}
            min={20000}
            max={150000}
            step={15000}
            onChange={handleChangeAmount}
          />
          <RangeLabel>
            <Typography variant="subtitle2">
              15,000 USD
            </Typography>
            <Typography variant="subtitle2">
              150,000 USD
            </Typography>
          </RangeLabel>
        </StyledPaper>
      </Grid>

      <Grid item xs={12} md={4}>
        <StyledPaper>
          <Typography variant="subtitle1" gutterBottom>
            Period
          </Typography>
          <Typography variant="body2">
            A sample period
          </Typography>
          <BlockCenter>
            <Typography color='secondary' variant="h6" gutterBottom>
              {period} months
            </Typography>
          </BlockCenter>
          <Slider
            value={period}
            min={1}
            max={6}
            step={1}
            onChange={handleChangePeriod}
          />
          <RangeLabel>
            <Typography variant="subtitle2">
              1 month
            </Typography>
            <Typography variant="subtitle2">
              6 months
            </Typography>
          </RangeLabel>
        </StyledPaper>
      </Grid>

      <Grid item xs={12} md={4}>
        <StyledPaper>
          <Typography variant="subtitle1" gutterBottom>
            Start date
          </Typography>
          <Typography variant="body2">
            Set your preferred start date.
                </Typography>
          <BlockCenter>
            <Typography color='secondary' variant="h6" gutterBottom>
              {monthRange[start]}
            </Typography>
          </BlockCenter>
          <Slider
            value={start}
            min={0}
            max={5}
            step={1}
            onChange={handleChangeStart}
          />
          <RangeLabel>
            <Typography variant="subtitle2">
              Dec 2018
            </Typography>
            <Typography variant="subtitle2">
              May 2019
            </Typography>
          </RangeLabel>
        </StyledPaper>
      </Grid>
    </Fragment>
  );
};

export default withTheme()(TopRow);
