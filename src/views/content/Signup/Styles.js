import { styled } from '@material-ui/styles';
import {
  Paper,
  Button,
  Stepper,
  FormControl,
} from '@material-ui/core';

export const SmallContainer = styled('div')({
  width: '60%'
});

export const BigContainer = styled('div')({
  width: '80%'
});

export const StepGrid = styled('div')({
  width: '80%'
});

export const ButtonBar = styled('div')({
  marginTop: 32,
  display: 'flex',
  justifyContent: 'center'
});

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary['A100']
}));

export const BackButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing.unit,
}));

export const StyledStepper = styled(Stepper)({
  backgroundColor: 'transparent'
});

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing.unit * 3,
  textAlign: 'left',
  color: theme.palette.text.secondary
}));

export const StyledFormControl = styled(FormControl)({
  width: '100%'
});
