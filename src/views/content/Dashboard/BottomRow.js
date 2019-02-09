import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { withTheme } from '@material-ui/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import { VerifiedUser } from '@material-ui/icons';
import SimpleLineChart from './SimpleLineChart';
import Waiting from '../../lib/loading/Waiting';
import {
  WithLoading,
  LoanAvatar,
  InterestAvatar,
  ButtonBar,
  StyledPaperRelative,
  MainBadge,
  InlineDiv,
  InlineTyp,
} from './Styles';

const numeral = require('numeral');
numeral.defaultFormat('0,000');

const BottomRow = ({
  theme, loading, monthlyPayment, monthlyInterest, data
}) => {

  return (
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
            <div style={{ marginTop: 14, marginBottom: 14 }}>
              <InlineDiv>
                <LoanAvatar/>
                <InlineTyp variant='subtitle2' gutterBottom>
                  Type
                </InlineTyp>
                <InlineTyp color='secondary' variant="h6" gutterBottom>
                  {numeral(monthlyPayment).format()} units
                </InlineTyp>
              </InlineDiv>
              <InlineDiv>
                <InterestAvatar/>
                <InlineTyp variant='subtitle2' gutterBottom>
                  Other type
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
                style={{ fontSize: 72 }}
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
  )
}

export default withRouter(withTheme()(BottomRow));
