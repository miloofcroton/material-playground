import { styled } from '@material-ui/styles';
import { Typography, Paper, Avatar } from '@material-ui/core';

export const CardSpacing = styled('div')({
  marginTop: 20,
});

export const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing.unit * 3,
  textAlign: 'left',
  color: theme.palette.text.secondary
}));

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: 10,
  backgroundColor: theme.palette.grey['200'],
  color: theme.palette.text.primary,
}));

export const AvatarContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    marginBottom: theme.spacing.unit * 4
  }
}));

export const ItemContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}));

export const Baseline = styled('div')(({ theme }) => ({
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

export const Inline = styled('div')(({ theme }) => ({
  display: 'inline-block',
  marginLeft: theme.spacing.unit * 4,
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0
  }
}));

export const InlineRight = styled('div')(({ theme }) => ({
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

export const UpperType = styled(Typography)({
  textTransform: 'uppercase'
});
