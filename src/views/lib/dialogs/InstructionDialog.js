// import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import withStyles from '@material-ui/core/styles/withStyles';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import BaseDialog from './BaseDialog';

// const styles = theme => ({
//   container: {
//     maxWidth: 600,
//     flexGrow: 1,
//     textAlign: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center'
//   },
//   bottomMargin: {
//     marginBottom: theme.spacing.unit * 2
//   }
// });

// class InstructionDialog extends Component {
//   render() {
//     const { classes } = this.props;
//     return (
//       <BaseDialog {...this.props} >
//         <div className={classes.bottomMargin}>
//           <Typography variant='body1' gutterBottom>
//             This is a sample introduction
//           </Typography>
//         </div>
//         <Button component={Link} to='/dashboard' className={classes.bottomMargin} variant='contained' onClick={this.handleClose} color='primary' autoFocus>
//           Getting started
//         </Button>
//         <Button component={Link} to='/dashboard' variant='outlined' onClick={this.handleClose} color='primary' autoFocus>
//           Dashboard
//         </Button>
//       </BaseDialog>
//     )
//   }
// }

// export default withRouter(withStyles(styles)(InstructionDialog));

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { styled } from '@material-ui/styles';
import muiTheme from '../../layout/theme/mui';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import BaseDialog from './BaseDialog';

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing.unit * 2
}), { defaultTheme: muiTheme });

const StyledButton = styled(ButtonBase)(props => ({
  marginBottom: props.theme.spacing.unit * 2
}), {
  defaultTheme: muiTheme
});

const InstructionDialog = ({ ...props }) => {

  const handleClose = () => console.log('Make me do something');

  return (
    <BaseDialog {...props} >
      <StyledTypography variant='body1' gutterBottom>
        This is a sample introduction
      </StyledTypography>
      <StyledButton
        component={'a'}
        to='/dashboard'
        variant='contained'
        onClick={handleClose}
        color='primary'
        autoFocus
      >
        Getting started
      </StyledButton>
      <Button
        component={Link}
        to='/dashboard'
        variant='outlined'
        onClick={handleClose}
        color='primary'
        autoFocus
      >
        Dashboard
      </Button>
    </BaseDialog>
  )
}

export default withRouter(InstructionDialog);
