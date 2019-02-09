import React,  { Component } from 'react';
import { styled, withTheme } from '@material-ui/styles';
import { Typography, Grid } from '@material-ui/core';
import TopRow from './TopRow';
import BottomRow from './BottomRow';
import { TopBar, OutlinedButton, StyledGrid, Block } from './Styles';

import Months from '../../lib/datetime/Months';
const monthRange = Months;

const numeral = require('numeral');
numeral.defaultFormat('0,000');
const backgroundShape = require('../../../assets/images/shape.svg');

const DivRoot = styled('div')(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.grey['100'],
  overflow: 'hidden',
  background: `url(${backgroundShape}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: '0 400px',
  paddingBottom: 200
}));

class Dashboard extends Component {

  state = {
    loading: true,
    amount: 15000,
    period: 3,
    start: 0,
    monthlyInterest: 0,
    totalInterest: 0,
    monthlyPayment: 0,
    totalPayment: 0,
    data: []
  };

  updateValues() {
    const { amount, period, start } = this.state;
    const monthlyInterest = (amount)*(Math.pow(0.01*(1.01), period))/(Math.pow(0.01, period - 1))
    const totalInterest = monthlyInterest * (period + start);
    const totalPayment = amount + totalInterest;
    const monthlyPayment = period > start ? totalPayment/(period - start) : totalPayment/(period)

    const data = Array.from({length: period + start}, (value, i) => {
      const delayed = i < start;
      return {
        name: monthRange[i],
        'Type': delayed ? 0 : Math.ceil(monthlyPayment).toFixed(0),
        'OtherType': Math.ceil(monthlyInterest).toFixed(0)
      }
    })

    this.setState({monthlyInterest, totalInterest, totalPayment, monthlyPayment, data})
  }

  componentDidMount() {
    this.updateValues();
  }

  handleChangeAmount = (event, value) => {
    this.setState({amount: value, loading: false});
    this.updateValues();
  }

  handleChangePeriod = (event, value) => {
    this.setState({period: value, loading: false});
    this.updateValues();
  }

  handleChangeStart = (event, value) => {
    this.setState({start: value, loading: false});
    this.updateValues();
  }

  render() {
    const {
      amount,
      period,
      start,
      monthlyPayment,
      monthlyInterest,
      data,
      loading,
    } = this.state;

    return (
      <DivRoot>
        <Grid container justify="center">
          <StyledGrid spacing={24} alignItems="center" justify="center" container>

            <Grid item xs={12}>
              <TopBar>
                <Block>
                  <Typography variant="h6" gutterBottom>
                    Dashboard
                  </Typography>
                  <Typography variant="body2">
                    Adjust and play with our sliders.
                  </Typography>
                </Block>
                <OutlinedButton variant="outlined">Get help</OutlinedButton>
              </TopBar>
            </Grid>

            <TopRow
              monthRange={monthRange}
              amount={amount}
              period={period}
              start={start}
              handleChangeAmount={this.handleChangeAmount}
              handleChangePeriod={this.handleChangePeriod}
              handleChangeStart={this.handleChangeStart}
            />

            <BottomRow
              loading={loading}
              monthlyPayment={monthlyPayment}
              monthlyInterest={monthlyInterest}
              data={data}
            />

          </StyledGrid>
        </Grid>
      </DivRoot>
    )
  }
}

export default withTheme()(Dashboard);
