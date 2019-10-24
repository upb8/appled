import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    transition: "300ms",
    height: 300,
    boxSizing: "border-box",
    cursor: "pointer"
  }
}));

const Helper = props => {
  const classes = useStyles();
  return (
    <div className='helper'>
      <Grid container direction='row' justify='center'>
        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
        <Grid item xs={12} sm={10} md={10} lg={10}>
          {/* Inner Start  */}
          <Grid container direction='row' justify='center' spacing={2}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Paper className={`${classes.root} paper`}>
                <div className='paper-content'>
                  <div className='paper-icon'>
                    <i class='material-icons'>build</i>
                  </div>
                  <div className='paper-text'>
                    <h1>Build</h1>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Paper className={`${classes.root} paper`}>
                <div className='paper-content'>
                  <div className='paper-icon'>
                    <i class='material-icons'>search</i>
                  </div>
                  <div className='paper-text'>
                    <h1>Search</h1>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Paper className={`${classes.root} paper`}>
                <div className='paper-content'>
                  <div className='paper-icon'>
                    <i className='material-icons'>help</i>
                  </div>
                  <div className='paper-text'>
                    <h1>Help</h1>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>

          {/* Inner End */}
        </Grid>
        <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
      </Grid>
    </div>
  );
};

export default Helper;
