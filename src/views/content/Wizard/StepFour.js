import React from 'react';
import { withTheme } from '@material-ui/styles';
import {
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import {
  BigContainer,
  StyledPaper,
  BoldTyp,
  ReadingBox,
} from './Styles'


const agreement = `By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.`;

const privacy = `
Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.

By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.
`;

const notice = `PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.`;

const StepFour = ({ termsChecked, handleTerms }) => {

  return (
    <BigContainer>
      <StyledPaper>
        <div style={{marginBottom: 24}}>
          <BoldTyp variant="subtitle1" gutterBottom>
            Terms & Conditions
          </BoldTyp>
          <Typography variant="body2" gutterBottom>
            Please read through and accept the terms & conditions
          </Typography>
        </div>
        <ReadingBox>
          <BoldTyp variant="subtitle1" gutterBottom>
            1. Your agreement
          </BoldTyp>
          <Typography variant="body2" gutterBottom>
            {agreement}

            {notice}
          </Typography>
          <BoldTyp variant="subtitle1" gutterBottom>
            2. Privacy
          </BoldTyp>
          <Typography variant="body2" gutterBottom>
            {privacy}

            {notice}
          </Typography>
        </ReadingBox>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={termsChecked}
                onChange={handleTerms}
                value='check'
              />
            }
            label="I have read and understood the terms & conditions"
          />
        </FormGroup>
      </StyledPaper>
    </BigContainer>
  )
}

export default withTheme()(StepFour);
