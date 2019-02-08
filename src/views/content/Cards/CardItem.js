import React from 'react';
import { styled } from '@material-ui/styles';
import muiTheme from '../../layout/theme/mui';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';
import ButtonBar from '../../lib/buttons/ButtonBar';

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing.unit * 3,
  textAlign: 'left',
  color: theme.palette.text.secondary
}), { defaultTheme: muiTheme });

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: 10,
  backgroundColor: theme.palette.grey['200'],
  color: theme.palette.text.primary,
}), { defaultTheme: muiTheme });

const AvatarContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    marginBottom: theme.spacing.unit * 4
  }
}), { defaultTheme: muiTheme });

const ItemContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}), { defaultTheme: muiTheme });

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
}), { defaultTheme: muiTheme });

const Inline = styled('div')(({ theme }) => ({
  display: 'inline-block',
  marginLeft: theme.spacing.unit * 4,
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0
  }
}), { defaultTheme: muiTheme });

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
}), { defaultTheme: muiTheme });

const UpperType = styled(Typography)({
  textTransform: 'uppercase'
});

const CardItem = () => {

  return (
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
              4 month(s)
            </Typography>
          </Inline>
          <Inline>
            <UpperType color='secondary' gutterBottom>
              Creation date
            </UpperType>
            <Typography variant="h6" gutterBottom>
              01 February 2019
            </Typography>
          </Inline>
          <Inline>
            <UpperType color='secondary' gutterBottom>
              Amount
            </UpperType>
            <Typography variant="h6" gutterBottom>
              6,600 USD
            </Typography>
          </Inline>
        </Baseline>

        <InlineRight>
          <UpperType color='secondary' gutterBottom>
            Other Amount
          </UpperType>
          <Typography variant="h4" gutterBottom>
            Once a month
          </Typography>
          <ButtonBar />
        </InlineRight>

      </ItemContainer>
    </PaperStyled>
  )
};

export default CardItem;
