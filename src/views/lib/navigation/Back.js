import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { styled } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { KeyboardArrowLeft } from '@material-ui/icons';

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
