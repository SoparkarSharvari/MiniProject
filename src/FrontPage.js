import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import cblogo from "./seedling.png";
import image from "./5104194.jpg";

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    clearButton: {
      width: "-webkit-fill-available",
      borderRadius: "15px",
      padding: "15px 22px",
      color: "#000000a6",
      fontSize: "20px",
      fontWeight: 900,
    },
    root: {
      maxWidth: 345,
      flexGrow: 1,
    },
    media: {
      height: 400,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    gridContainer: {
      justifyContent: "center",
      padding: "4em 1em 0 1em",
    },
    mainContainer: {
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: "93vh",
      marginTop: "0px",
    },
    imageCard: {
      margin: "auto",
      maxWidth: 500,
      height: 500,
      color:'black !important',
      backgroundColor: 'transparent',
      boxShadow: '0px 9px 70px 0px rgb(0 0 0 / 30%) !important',
      borderRadius: '15px',
    },
    imageCardEmpty: {
      color:'black !important',
      height: 'auto',
    },
    noImage: {
      margin: "auto",
      width: 400,
      height: "400 !important",
    },
    input: {
      display: 'none',
    },
    uploadIcon: {
      background: 'white',
    },
    tableContainer: {
      backgroundColor: 'transparent !important',
      boxShadow: 'none !important',
    },
    table: {
      backgroundColor: 'transparent !important',
    },
    tableHead: {
      backgroundColor: 'transparent !important',
    },
    tableRow: {
      backgroundColor: 'transparent !important',
    },
    tableCell: {
      fontSize: '22px',
      backgroundColor: 'transparent !important',
      borderColor: 'transparent !important',
      color: '#000000a6 !important',
      fontWeight: 'bolder',
      padding: '1px 24px 1px 16px',
    },
    tableCell1: {
      fontSize: '14px',
      backgroundColor: 'transparent !important',
      borderColor: 'transparent !important',
      color: '#000000a6 !important',
      fontWeight: 'bolder',
      padding: '1px 24px 1px 16px',
    },
    tableBody: {
      backgroundColor: 'transparent !important',
    },
    text: {
      color: 'white !important',
      textAlign: 'center',
    },
    buttonGrid: {
        borderRadius:'50px',
        maxWidth: "91%",
        width: "100%",
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
      },
      button: {
        borderRadius:'50px',
        border: 'none', // Remove the border
        background: 'none', // Ensure no background color
        cursor: 'pointer',
        fontSize: 'inherit',
        color: 'black',
      },
    detail: {
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
    appbar: {
      background: '#be6a77',
      boxShadow: 'none',
      color: 'white',
      
    },
    loader: {
      color: '#be6a77 !important',
    }
  }));

function FrontPage() {
    const classes = useStyles();
  return (
    <>
    <AppBar position="static" className={classes.appbar}>
        <Toolbar style={{backgroundColor:'#213A2A'}}>   <br></br>
    <br></br>

          <Typography className={classes.title} variant="h2" noWrap style={{marginLeft:'35%',fontWeight:'bold',color:'#F5E0C0'}}>
           AGRII VISION
          </Typography>

          <div className={classes.grow} />
          <Avatar src={cblogo}></Avatar>
        </Toolbar>
      </AppBar>
      
     
      <div className={classes.mainContainer}>
      <div style={{ padding: '50px', alignContent: 'center', width: '100%', height: '100%' }}>
        <div className={classes.buttonGrid}>
          <Link to="/Predict" style={{padding:'10px',backgroundColor:'#33513F' ,borderRadius:'50px' }}>
            <button className={classes.button} style={{
                width:'400px', height:'50px', borderRadius:'5px' ,backgroundColor:'#33513F',textDecoration:'none',color:'white'
            }}>PLANT DISEASE DETECTION</button>
          </Link>
        </div>
        <br></br>
        <div className={classes.buttonGrid}>
          <Link to="/weedPredict" style={{padding:'10px',backgroundColor:'#33513F' ,borderRadius:'50px' }}>
            <button className={classes.button} style={{
                width:'400px', height:'50px', borderRadius:'5px' ,backgroundColor:'#33513F',textDecoration:'none',color:'white'
            }}>WEED DETECTION</button>
          </Link>
        </div>
      </div>
    </div> </>
  );
}

export default FrontPage;
