import React from 'react';
import { Grid } from '@material-ui/core';
import { styled, withTheme } from '@material-ui/styles';

import Card from './Card';
import SectionHeader from '../../lib/text/SectionHeader';

const backgroundShape = require('../../../assets/images/shape.svg');

const RootDiv = styled('div')(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.grey['A500'],
  overflow: 'hidden',
  background: `url(${backgroundShape}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: '0 400px',
  marginTop: 20,
  padding: 20,
  paddingBottom: 200,
}));

const StyledGrid = styled(Grid)({
  width: 1000
});

const fakeData = [
  {
    months: '4 month(s)',
    creation: '01 February 2019',
    amount: '6,600 USD',
    frequency: 'Once a month'
  },
  {
    months: '8 month(s)',
    creation: '15 January 2019',
    amount: '3,100 USD',
    frequency: 'Once a month'
  },
  {
    months: '12 month(s)',
    creation: '01 December 2019',
    amount: '10,000 USD',
    frequency: 'Once a month'
  },
];

const Items = () => {

  return (
    <RootDiv>
      <Grid container justify="center">
        <StyledGrid spacing={24} alignItems="center" justify="center" container>
          <Grid item xs={12}>
            <SectionHeader
              title="Cards"
              subtitle="One page with a list of a collection"
            />

            {fakeData.map((item, index) => (
              <Card
                key={index}
                months={item.months}
                creation={item.creation}
                amount={item.amount}
                frequency={item.frequency}
              />
            ))}

          </Grid>
        </StyledGrid>
      </Grid>
    </RootDiv>
  );
};

export default withTheme()(Items);
