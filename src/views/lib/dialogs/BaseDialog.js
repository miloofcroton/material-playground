import React from 'react';
import { styled } from '@material-ui/styles';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';

const Container = styled('div')({
  maxWidth: 600,
  flexGrow: 1,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
});

const BaseDialog = ({ open, onClose, children }) => {

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      scroll='body'
    >
      <DialogTitle id="alert-dialog-title">Hello</DialogTitle>
      <DialogContent>
        <Container>
          {children}
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default BaseDialog;
