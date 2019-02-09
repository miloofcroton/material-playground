/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { styled } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const WaitingDiv = styled('div')(props => ({
  display: props.loading === 'true' ? 'block' : 'none',
  position: 'absolute',
  top: '40%',
  left: '40%',
}));

const EmojiSpan = styled('span')({
  fontSize: 58,
  textAlign: 'center',
  display: 'inline-block',
  width: '100%'
});

const Waiting = ({ loading }) => {

  return (
    <WaitingDiv loading={loading.toString()}>
      <EmojiSpan role='img' aria-label='emoji' >
        👋
      </EmojiSpan>
      <Typography variant="h6">
        Waiting for input
      </Typography>
    </WaitingDiv>
  );
}

export default Waiting;
