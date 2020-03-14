import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const Switcher = withStyles(theme => ({
    root: {
      width: 42*2,
      height: 37,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(46px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#000000',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 36,
      height: 36,
    },
    track: {
      borderRadius: 36 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: '#cccccc',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  export default Switcher