import React from 'react';
import { withTheme } from '@material-ui/styles';
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Done } from '@material-ui/icons';
import { SmallContainer, StyledPaper } from './Styles';

const StepThree = () => {

  return (
    <SmallContainer>
      <StyledPaper>
        <div>
          <div style={{marginBottom: 32}}>
            <Typography variant="subtitle1" gutterBottom>
              Permissions
            </Typography>
            <Typography variant="body2" gutterBottom>
              We need some permissions to proceed.
            </Typography>
          </div>
          <div>
            <Typography color='secondary' gutterBottom>
              Accounts
            </Typography>
            <List component="nav">
              <ListItem>
                <ListItemIcon>
                  <Done />
                </ListItemIcon>
                <ListItemText inset primary="0297 00988200918" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Done />
                </ListItemIcon>
                <ListItemText inset primary="0297 00988200920" />
              </ListItem>
            </List>
          </div>
        </div>
      </StyledPaper>
    </SmallContainer>
  )
}

export default withTheme()(StepThree);
