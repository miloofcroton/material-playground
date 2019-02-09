import { styled } from '@material-ui/styles';
import { Paper, Typography, Grid, Button, Avatar } from '@material-ui/core';

export const WithLoading = styled('div')(props => ({
  opacity: props.loading === 'true' ? 0.05 : 'inherit',
}));

export const LoanAvatar = styled(Avatar)(({ theme }) => ({
  display: 'inline-block',
  verticalAlign: 'center',
  width: 16,
  height: 16,
  marginRight: 10,
  marginBottom: -2,
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main
}));

export const InterestAvatar = styled(Avatar)(({ theme }) => ({
  display: 'inline-block',
  verticalAlign: 'center',
  width: 16,
  height: 16,
  marginRight: 10,
  marginBottom: -2,
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.light
}));

export const TopBar = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const OutlinedButton = styled(Button)(({ theme }) => ({
  textTransform: 'uppercase',
  margin: theme.spacing.unit
}));

export const ButtonBar = styled('div')({
  display: 'flex',
});

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing.unit * 3,
  textAlign: 'left',
  color: theme.palette.text.secondary
}));

export const StyledPaperRelative = styled(Paper)(({ theme }) => ({
  padding: theme.spacing.unit * 3,
  textAlign: 'left',
  color: theme.palette.text.secondary,
  position: 'relative'
}));

export const MainBadge = styled('div')(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing.unit * 4,
  marginBottom: theme.spacing.unit * 4
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  width: 1200,
  margin: `0 ${theme.spacing.unit * 2}px`,
  [theme.breakpoints.down('sm')]: {
    width: 'calc(100% - 20px)'
  }
}));

export const RangeLabel = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: theme.spacing.unit * 2
}));

export const BlockCenter = styled('div')(({ theme }) => ({
  padding: theme.spacing.unit * 2,
  textAlign: 'center'
}));

export const Block = styled('div')(({ theme }) => ({
  padding: theme.spacing.unit * 2,
}));

export const InlineDiv = styled('div')(({ theme }) => ({
  display: 'inline-block',
  marginRight: 10
}));

export const InlineTyp = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  marginRight: 10
}));
