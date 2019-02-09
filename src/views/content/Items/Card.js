import React from 'react';
import { withTheme } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Description as DescriptionIcon } from '@material-ui/icons';
import ButtonBar from '../../lib/buttons/ButtonBar';
import {
  CardSpacing,
  PaperStyled,
  AvatarStyled,
  AvatarContainer,
  ItemContainer,
  Baseline,
  Inline,
  InlineRight,
  UpperType,
} from './Styles';

const Card = ({ months, creation, amount, frequency }) => {

  return (
    <CardSpacing>
      <PaperStyled>
        <ItemContainer>

          <AvatarContainer>
            <AvatarStyled>
              <DescriptionIcon/>
            </AvatarStyled>
          </AvatarContainer>

          <Baseline>
            <Inline>
              <UpperType color='secondary' gutterBottom>
                Months
              </UpperType>
              <Typography variant="h6" gutterBottom>
                {months}
              </Typography>
            </Inline>
            <Inline>
              <UpperType color='secondary' gutterBottom>
                Creation date
              </UpperType>
              <Typography variant="h6" gutterBottom>
                {creation}
              </Typography>
            </Inline>
            <Inline>
              <UpperType color='secondary' gutterBottom>
                Amount
              </UpperType>
              <Typography variant="h6" gutterBottom>
                {amount}
              </Typography>
            </Inline>
          </Baseline>

          <InlineRight>
            <UpperType color='secondary' gutterBottom>
              Frequency
            </UpperType>
            <Typography variant="h4" gutterBottom>
              {frequency}
            </Typography>
            <ButtonBar />
          </InlineRight>

        </ItemContainer>
      </PaperStyled>
    </CardSpacing>
  )
};

export default withTheme()(Card);
