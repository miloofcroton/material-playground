import { styled } from '@material-ui/styles';
import {
  Typography,
  Paper,
  Button,
  FormControl,
} from '@material-ui/core';

export const SmallContainer = styled('div')({
  width: '60%'
});

export const BigContainer = styled('div')({
  width: '80%'
});

export const TopInfo = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 42
});

export const ReadingBox = styled('div')({
  height: 330,
  padding: 16,
  border: '2px solid #ccc',
  borderRadius: '3px',
  overflowY: 'scroll'
});

export const StyledFormControl = styled(FormControl)({
  width: '100%'
});

export const FlexBar = styled('div')({
  marginTop: 32,
  display: 'flex',
  justifyContent: 'center'
});

export const OutlinedButton = styled(Button)(({ theme }) => ({
  textTransform: 'uppercase',
  margin: theme.spacing.unit
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing.unit * 3,
  textAlign: 'left',
  color: theme.palette.text.secondary
}));

export const BorderColumn = styled('div')(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey['100']}`,
  paddingBottom: 24,
  marginBottom: 24
}));

export const UpperTyp = styled(Typography)({
  textTransform: 'uppercase'
});

export const BoldTyp = styled(Typography)({
  fontWeight: 'bold'
});
