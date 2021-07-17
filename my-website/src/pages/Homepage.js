import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  homepageRoot: {
    textAlign: "center",
    margin: "5%",
    
  },
  widgets: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "center",
    },
  },
  
  music: {
    margin: "10px",
    padding: "8px 5%",
    backgroundColor: "#ffcbf2",
    borderRadius: "10px",
  },
  movies: {
    margin: "10px",
    padding: "8px 5%",
    backgroundColor: "#ffcbf2",
    borderRadius: "10px",
  },
 
}));

function Homepage() {
  const classes = useStyles();
  return (
    <div className={classes.homepageRoot}>
      <h3>What's in my head most of the time...</h3>
      <div className={classes.widgets}>
        <Paper elevation={3} className={classes.music}>
        <h4>Recently liked music:</h4>
          <div>
          <iframe src="https://open.spotify.com/embed/playlist/0FNVPFheliKs4RYfiX4BR3" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        </Paper>

        <Paper elevation={3} className={classes.movies}>
          <h4>Recently watched films:</h4>
        </Paper>
      </div>

    </div>
  );
}

export default Homepage;
