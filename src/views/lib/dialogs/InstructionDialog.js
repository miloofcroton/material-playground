import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { styled, withTheme } from '@material-ui/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BaseDialog from './BaseDialog';

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing.unit * 2
}));

const InstructionDialog = (props) => {

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
        style={{
          marginBottom: props.theme.spacing.unit * 2
        }}
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

export default withRouter(withTheme()(InstructionDialog));
