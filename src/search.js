import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));


export default function Search() {
  const classes = useStyles()

  return (
  	<form className={classes.container} noValidate autoComplete="off">
    	<TextField
	        id="standard-full-width"
	        label="Search"
	        style={{ margin: 8 }}
	        placeholder="Enter station name"
	        helperText=""
	        fullWidth
	        margin="normal"
	        InputLabelProps={{
	          shrink: true,
	        }}
	      />

    </form>
  )
}