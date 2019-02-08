import React, { Component } from 'react';
import { styled } from '@material-ui/styles';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';
import ButtonBar from '../../lib/buttons/ButtonBar';

const RootDiv = styled('div')({
  flexGrow: 1,
  // backgroundColor: theme.palette.grey['A500'],
  overflow: 'hidden',
  // background: `url(${backgroundShape}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: '0 400px',
  marginTop: 20,
  padding: 20,
  paddingBottom: 200
});


const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  avatar: {
    margin: 10,
    backgroundColor: theme.palette.grey['200'],
    color: theme.palette.text.primary,
  },
  avatarContainer: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginBottom: theme.spacing.unit * 4
    }
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  baseline: {
    alignSelf: 'baseline',
    marginLeft: theme.spacing.unit * 4,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
      marginLeft: 0
    }
  },
  inline: {
    display: 'inline-block',
    marginLeft: theme.spacing.unit * 4,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  inlineRight: {
    width: '30%',
    textAlign: 'right',
    marginLeft: 50,
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 0,
      textAlign: 'center'
    }
  },
  backButton: {
    marginRight: theme.spacing.unit * 2
  }
})

class CardItem extends Component {

  render() {
    const { classes } = this.props;

    return (
      <RootDiv>
        <Paper className={classes.paper}>
          <div className={classes.itemContainer}>
            <div className={classes.avatarContainer}>
              <Avatar className={classes.avatar}>
                <DescriptionIcon />
              </Avatar>
            </div>
            <div className={classes.baseline}>
              <div className={classes.inline}>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  Months
                </Typography>
                <Typography variant="h6" gutterBottom>
                  4 month(s)
                </Typography>
              </div>
              <div className={classes.inline}>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  Creation date
                </Typography>
                <Typography variant="h6" gutterBottom>
                  01 February 2019
                </Typography>
              </div>
              <div className={classes.inline}>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  Amount
                </Typography>
                <Typography variant="h6" gutterBottom>
                  6,600 USD
                </Typography>
              </div>
            </div>
            <div className={classes.inlineRight}>
              <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                Other Amount
              </Typography>
              <Typography variant="h4" gutterBottom>
                Once a month
              </Typography>
              <ButtonBar />
            </div>
          </div>
        </Paper>
      </RootDiv>
    )
  }
}

export default withStyles(styles)(CardItem);
