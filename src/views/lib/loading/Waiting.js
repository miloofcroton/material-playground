/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/styles';

const LoadingDiv = styled(Typography)(props => ({
  display: props.loading ? 'block' : 'none',
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
    <LoadingDiv loading={loading}>
      <EmojiSpan role='img' aria-label='emoji' >
        👋
      </EmojiSpan>
      <Typography variant="h6">
        Waiting for input
      </Typography>
    </LoadingDiv>
  );
}

export default Waiting;
