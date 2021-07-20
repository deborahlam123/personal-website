import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  aboutRoot: {
    textAlign: "center",
    margin: "5%",
    
  },
  content: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "center",
    },
  },aboutText: {
    margin: "10px",
    padding: "8px 5%",
    backgroundColor: "#ffcbf2",
    borderRadius: "10px",
  },
  aboutImage: {
    margin: "10px",
    padding: "8px 5%",
    backgroundColor: "#ffcbf2",
    borderRadius: "10px",
  },
 
}));

function About() {
  const classes = useStyles();
  return (
    <div className={classes.aboutRoot}>
      <h3>About me</h3>
      <div className={classes.content}>
        <Paper elevation={3} className={classes.aboutText}>
          <div>
          <p>Something about me</p>
          </div>
        </Paper>

        <Paper elevation={3} className={classes.aboutImage}>
          <h4>Pic of me?</h4>
        </Paper>
      </div>

    </div>
  );
}

export default About;
