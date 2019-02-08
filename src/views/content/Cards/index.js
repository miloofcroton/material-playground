import React from 'react';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/styles';

import CardItem from './CardItem';
import SectionHeader from '../../lib/text/SectionHeader';

import Button from "@material-ui/core/Button";


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
  paddingBottom: 200,
},{
  withTheme: true
});

const StyledGrid = styled(Grid)({
  width: 1000
});


const StyledButton = styled(Button)(() => ({
  backgroundColor: 'black'
}));


const Cards = () => {

  return (
    <RootDiv>
      <Grid container justify="center">
        <StyledGrid spacing={24} alignItems="center" justify="center" container>
          <Grid item xs={12}>
            <SectionHeader
              title="Cards"
              subtitle="One page with a list of a collection" />
            <CardItem />
            <StyledButton>sdf</StyledButton>
          </Grid>
        </StyledGrid>
      </Grid>
    </RootDiv>
  );
};

export default Cards;
