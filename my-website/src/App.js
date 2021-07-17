import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import {AppBar,Toolbar,Typography, Button} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  mobileTitle: {
    flexGrow: 1,
    display: 'block',
    textAlign: 'center',
    [
      theme.breakpoints.up('sm')]: {
        display: 'none',
    },
  },
 buttons: {
   justifyContent: 'center',
   [
    theme.breakpoints.up('sm')]: {
      justifyContent: 'left',
  },
 },
  title: {
    flexGrow: 1,
        display: 'none',
        [
          theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    
    <Router>
      <div className={classes.root}>
        <div className={classes.mobileTitle}>
          <h2>Welcome to Deb's mind</h2>
        </div>
      <AppBar position='static' style={{background: '#355070'}}>
      <Toolbar className={classes.buttons}>

        
    <Typography variant="h6" className={classes.title} noWrap>
    <Button href="/" color="inherit">
      Welcome to Deb's mind
      </Button>
    </Typography>

    

    <Button href="/about" color="inherit">About</Button>

    <Button href="/projects" color="inherit">Projects</Button>

    <Button href="/contact" color="inherit">Contact me</Button>

    
  </Toolbar>
      </AppBar>
      </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/contact">
            <Contact/>
          </Route>
          
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
 
    </Router>
  );
}