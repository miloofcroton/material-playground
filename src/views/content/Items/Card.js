import React from 'react';
import { styled, withTheme } from '@material-ui/styles';
import { Typography, Paper, Avatar } from '@material-ui/core';
import { Description as DescriptionIcon } from '@material-ui/icons';
import ButtonBar from '../../lib/buttons/ButtonBar';

const CardSpacing = styled('div')({
  marginTop: 20,
});

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing.unit * 3,
  textAlign: 'left',
  color: theme.palette.text.secondary
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: 10,
  backgroundColor: theme.palette.grey['200'],
  color: theme.palette.text.primary,
}));

const AvatarContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    marginBottom: theme.spacing.unit * 4
  }
}));

const ItemContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}));

const Baseline = styled('div')(({ theme }) => ({
  alignSelf: 'baseline',
  marginLeft: theme.spacing.unit * 4,
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    marginLeft: 0
  }
}));

const Inline = styled('div')(({ theme }) => ({
  display: 'inline-block',
  marginLeft: theme.spacing.unit * 4,
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0
  }
}));

const InlineRight = styled('div')(({ theme }) => ({
  width: '30%',
  textAlign: 'right',
  marginLeft: 50,
  alignSelf: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    margin: 0,
    textAlign: 'center'
  }
}));

const UpperType = styled(Typography)({
  textTransform: 'uppercase'
});

const Card = ({ months, creation, amount, frequency }) => {

  return (
    <CardSpacing>
      <PaperStyled>
        <ItemContainer>

          <AvatarContainer>
            <AvatarStyled>
              <DescriptionIcon/>
            </AvatarStyled>
          </AvatarContainer>

          <Baseline>
            <Inline>
              <UpperType color='secondary' gutterBottom>
                Months
              </UpperType>
              <Typography variant="h6" gutterBottom>
                {months}
              </Typography>
            </Inline>
            <Inline>
              <UpperType color='secondary' gutterBottom>
                Creation date
              </UpperType>
              <Typography variant="h6" gutterBottom>
                {creation}
              </Typography>
            </Inline>
            <Inline>
              <UpperType color='secondary' gutterBottom>
                Amount
              </UpperType>
              <Typography variant="h6" gutterBottom>
                {amount}
              </Typography>
            </Inline>
          </Baseline>

          <InlineRight>
            <UpperType color='secondary' gutterBottom>
              Frequency
            </UpperType>
            <Typography variant="h4" gutterBottom>
              {frequency}
            </Typography>
            <ButtonBar />
          </InlineRight>

        </ItemContainer>
      </PaperStyled>
    </CardSpacing>
  )
};

export default withTheme()(Card);