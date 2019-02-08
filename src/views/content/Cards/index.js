import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import CardItem from './CardItem';
import SectionHeader from '../../lib/text/SectionHeader';
import { styled } from '@material-ui/styles';

const backgroundShape = require('../../../assets/images/shape.svg');

const RootDiv = styled('div')({
  flexGrow: 1,
  // backgroundColor: theme.palette.grey['A500'],
  overflow: 'hidden',
  background: `url(${backgroundShape}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: '0 400px',
  marginTop: 20,
  padding: 20,
  paddingBottom: 200
});

const StyledGrid = styled(Grid)({
  width: 1000
});

const Cards = ({ classes }) => {

  return (
    <RootDiv>
      <Grid container justify="center">
        <StyledGrid spacing={24} alignItems="center" justify="center" container>
          <Grid item xs={12}>
            <SectionHeader title="Cards" subtitle="One page with a list of a collection" />
            <CardItem />
          </Grid>
        </StyledGrid>
      </Grid>
    </RootDiv>
  );
};

export default Cards;
