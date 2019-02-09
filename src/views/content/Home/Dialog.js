import React, { Fragment } from 'react';
import InstructionDialog from '../../lib/dialogs/InstructionDialog';
import SwipeDialog from '../../lib/dialogs/SwipeDialog';

const Dialog = ({
  learnMoredialog,
  closeLearnMoreDialog,
  getStartedDialog,
  closeGetStartedDialog
}) => {

    return (
      <Fragment>
        <SwipeDialog
          open={learnMoredialog}
          onClose={closeLearnMoreDialog}
        />
        <InstructionDialog
          open={getStartedDialog}
          onClose={closeGetStartedDialog}
        />
      </Fragment>
    )
};

export default Dialog;
