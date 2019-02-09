import { styled } from '@material-ui/styles';
import { Paper, Typography, Button } from '@material-ui/core';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing.unit * 3,
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export const ActionButton = styled(Button)(({ theme }) => ({
  textTransform: 'uppercase',
  margin: theme.spacing.unit,
  width: 152
}));

export const AlignRight = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end'
});

export const Box = styled('div')({
  marginBottom: 40,
  height: 65
});

export const UpperTyp = styled(Typography)({
  textTransform: 'uppercase'
});
