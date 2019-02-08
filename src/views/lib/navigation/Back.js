import React, { Component } from 'react';
import { styled } from '@material-ui/styles';

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Typography from '@material-ui/core/Typography';
import { Link, withRouter } from 'react-router-dom';


const Text = styled('span')({
  display: 'inline-block',
  verticalAlign: 'text-bottom'
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit'
});

class Back extends Component {
  render() {

    return (
      <div>
        <Typography variant="h6" gutterBottom>
          <StyledLink to={{ pathname: "/dashboard" }}>
            <KeyboardArrowLeft />
            <Text>Back to Dashboard</Text>
          </StyledLink>
        </Typography>
      </div>
    )
  }
}

export default withRouter(Back);
