import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { styled } from '@material-ui/styles';
import muiTheme from '../../layout/theme/mui';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BaseDialog from './BaseDialog';

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing.unit * 2
}), { defaultTheme: muiTheme });


// This should be applied, but there's a bug with Material-UI's CSS in JS

// const StyledButton = styled(DashButton)(props => ({
//   marginBottom: props.theme.spacing.unit * 2
// }), {
//   defaultTheme: muiTheme
// });


const InstructionDialog = ({ ...props }) => {

  const handleClose = () => console.log('Make me do something');

  return (
    <BaseDialog {...props} >
      <StyledTypography variant='body1' gutterBottom>
        This is a sample introduction
      </StyledTypography>
      <Button
        component={Link}
        to='/dashboard'
        variant='contained'
        onClick={handleClose}
        color='primary'
        autoFocus
      >
        Getting started
      </Button>
      <Button
        component={Link}
        to='/dashboard'
        variant='outlined'
        onClick={handleClose}
        color='primary'
        autoFocus
      >
        Dashboard
      </Button>
    </BaseDialog>
  )
}

export default withRouter(InstructionDialog);
