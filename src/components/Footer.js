import React from 'react'
import { AppBar, Toolbar, Typography, Container, Link } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight:100,
    background: '#9D9695',
    position: "sticky"
  },
  fancy:{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 100,
      padding: '0 30px',
      margin: '10px 10px 10px 10px',
      flexGrow:1
  }
}));

export default function Header(props){
    const classes = useStyles()

    return (
        <AppBar position="sticky" className={classes.root}>
            <Container maxWidth="md">
                <Typography> MTG Pro Plays Terminal - <Link color="inherit" href="https://github.com/ChrisWeldon/MTG-Database-API"> MTG API </Link> </Typography>
                <Typography> <span class="iconify" data-icon="cib:react" data-inline="false"></span> React + <span class="iconify" data-icon="simple-icons:redux" data-inline="false"></span> Redux + <span class="iconify" data-icon="cib:flask" data-inline="false"></span> Flask + <span class="iconify" data-icon="whh:mysqltwo" data-inline="false"></span> MySQL</Typography>
                <Typography> &copy; Christopher W. Evans, <Link href="https://github.com/ChrisWeldon/MTG-Plays-Frontend"> MIT License </Link></Typography>
                <Typography>
                    <Link color="inherit" href="https://github.com/ChrisWeldon/MTG-Plays-Frontend">
                        <GitHubIcon />
                    </Link>
                    <Link color="inherit" href="https://www.linkedin.com/in/chrisweldonevans/">
                        <LinkedInIcon />
                    </Link>
                </Typography>
            </Container>
        </AppBar>
    )

}
