import React from 'react';
import { styled } from '@material-ui/styles';
import muiTheme from '../../layout/theme/mui';

import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

const SectionContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing.unit * 4,
  marginBottom: theme.spacing.unit * 4
}), { defaultTheme: muiTheme });

const Title = styled(Typography)({
  fontWeight: 'bold'
});

const SectionHeader = ({ title, subtitle }) => {

  return (
    <SectionContainer>
      <Title variant="subtitle1">
        {title}
      </Title>
      <Typography variant="body2" gutterBottom>
        {subtitle}
      </Typography>
    </SectionContainer>
  );
};

export default withRouter(SectionHeader);
