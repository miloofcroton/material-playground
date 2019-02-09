import React from 'react';
import { styled, withTheme } from '@material-ui/styles';

import Button from '@material-ui/core/Button';

const Primary = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing.unit * 2
}));

const Secondary = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing.unit * 2
}));

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

export default withTheme()(ButtonBar);
