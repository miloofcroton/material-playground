import React from 'react';
import { styled } from '@material-ui/styles';
import muiTheme from '../../layout/theme/mui';
import Button from '@material-ui/core/Button';

const Primary = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing.unit * 2
}), { defaultTheme: muiTheme });

const Secondary = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing.unit * 2
}), { defaultTheme: muiTheme });

const SpaceTop = styled('div')({
  marginTop: 20
});

const ButtonBar = () => {

  return (
    <SpaceTop>
      <Primary>Delete</Primary>
      <Secondary
        variant="contained"
        color="primary"
      >
        Edit
      </Secondary>
    </SpaceTop>
  );
}

export default ButtonBar;
