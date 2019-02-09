import React,  { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { styled, withTheme } from '@material-ui/styles';
import { Paper, Typography, Grid, Button, Avatar } from '@material-ui/core';
import { Slider } from '@material-ui/lab';
import { VerifiedUser } from '@material-ui/icons';
import SimpleLineChart from './SimpleLineChart';
import Months from '../../lib/datetime/Months';
import Waiting from '../../lib/loading/Waiting';
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

const WithLoading = styled('div')(props => ({
  opacity: props.loading === 'true' ? 0.05 : 'inherit',
}));

const LoanAvatar = styled(Avatar)(({ theme }) => ({
  display: 'inline-block',
  verticalAlign: 'center',
  width: 16,
  height: 16,
  marginRight: 10,
  marginBottom: -2,
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main
}));

const InterestAvatar = styled(Avatar)(({ theme }) => ({
  display: 'inline-block',
  verticalAlign: 'center',
  width: 16,
  height: 16,
  marginRight: 10,
  marginBottom: -2,
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.light
}));

const TopBar = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const ButtonBar = styled('div')({
  display: 'flex',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing.unit * 3,
  textAlign: 'left',
  color: theme.palette.text.secondary
}));

const StyledPaperRelative = styled(Paper)(({ theme }) => ({
  padding: theme.spacing.unit * 3,
  textAlign: 'left',
  color: theme.palette.text.secondary,
  position: 'relative'
}));

const MainBadge = styled('div')(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing.unit * 4,
  marginBottom: theme.spacing.unit * 4
}));

const OutlinedButton = styled(Button)(({ theme }) => ({
  textTransform: 'uppercase',
  margin: theme.spacing.unit
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  width: 1200,
  margin: `0 ${theme.spacing.unit * 2}px`,
  [theme.breakpoints.down('sm')]: {
    width: 'calc(100% - 20px)'
  }
}));

const RangeLabel = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: theme.spacing.unit * 2
}));

const BlockCenter = styled('div')(({ theme }) => ({
  padding: theme.spacing.unit * 2,
  textAlign: 'center'
}));

const Block = styled('div')(({ theme }) => ({
  padding: theme.spacing.unit * 2,
}));

const InlineDiv = styled('div')(({ theme }) => ({
  display: 'inline-block',
  marginRight: 10
}));

const InlineTyp = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  marginRight: 10
}));

const monthRange = Months;

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
    const { theme } = this.props;
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
                  onChange={this.handleChangeAmount}
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
                  onChange={this.handleChangePeriod}
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
                  onChange={this.handleChangeStart}
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

            <Grid container spacing={24} xs={12} justify="center">
              <Grid item xs={12} md={8} >
                <StyledPaperRelative>
                  <Waiting loading={loading} />
                  <WithLoading loading={loading.toString()}>
                    <Typography variant='subtitle1' gutterBottom>
                      Some details
                    </Typography>
                    <Typography variant='body2'>
                      Details about the graph
                    </Typography>
                    <div style={{marginTop: 14, marginBottom: 14}}>
                      <InlineDiv>
                        <LoanAvatar></LoanAvatar>
                        <InlineTyp variant='subtitle2' gutterBottom>
                          Type
                        </InlineTyp>
                        <InlineTyp color='secondary' variant="h6" gutterBottom>
                          {numeral(monthlyPayment).format()} units
                        </InlineTyp>
                      </InlineDiv>
                      <InlineDiv>
                        <InterestAvatar></InterestAvatar>
                        <InlineTyp variant='subtitle2' gutterBottom>
                          Othe type
                        </InlineTyp>
                        <InlineTyp color='secondary' variant="h6" gutterBottom>
                          {numeral(monthlyInterest).format()} units
                        </InlineTyp>
                      </InlineDiv>
                    </div>
                    <SimpleLineChart data={data} />
                  </WithLoading>
                </StyledPaperRelative>
              </Grid>

              <Grid item xs={12} md={4}>
                <StyledPaperRelative>
                  <Waiting loading={loading} />
                  <WithLoading loading={loading.toString()}>
                    <Typography variant="subtitle1" gutterBottom>
                      State
                    </Typography>
                    <MainBadge>
                      <VerifiedUser
                        style={{fontSize: 72}}
                        fontSize={'large'}
                        color={'secondary'}
                      />
                      <Typography
                        variant="h5"
                        color={'secondary'}
                        gutterBottom
                      >
                        Verified
                      </Typography>
                    </MainBadge>
                    <ButtonBar>
                      <Button
                        to={{ pathname: "/dashboard", search: `?type=save` }}
                        component={Link}
                        variant="outlined"
                        style={{
                          textTransform: 'uppercase',
                          margin: theme.spacing.unit,
                          width: 152,
                          height: 36
                        }}
                      >
                        Save
                      </Button>
                      <Button
                        to={{ pathname: "/dashboard", search: `?type=apply` }}
                        component={Link}
                        color='primary'
                        variant='contained'
                        style={{
                          textTransform: 'uppercase',
                          margin: theme.spacing.unit,
                          width: 152,
                          height: 36
                        }}
                      >
                        Apply
                      </Button>
                    </ButtonBar>
                  </WithLoading>
                </StyledPaperRelative>
              </Grid>
            </Grid>

          </StyledGrid>
        </Grid>
      </DivRoot>
    )
  }
}

export default withRouter(withTheme()(Dashboard));
