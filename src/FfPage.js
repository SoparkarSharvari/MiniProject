import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import cblogo from "./seedling.png";
import image from "./5104194.jpg";
import videoBackground from "/Users/sharvarisoparkar/Desktop/MiniProject/frontend/src/1055405060-preview_1703847604268.mp4"
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const useStyles = makeStyles((theme) => ({
  videoContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    overflow: "hidden",
  },

  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
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
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
function FfPage() {
    const classes = useStyles();
  return (
    <>
     <div className={classes.videoContainer}>
        <video className={classes.video} autoPlay loop muted>
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <video _ngcontent-hxp-c40="" src="assets/videos/home_bg.mp4" type="video/mp4" autoplay="" loop="" muted="" height="100%" width="100%"></video> */}
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

      <div className={classes.buttonGrid} style={{padding:'30px',marginLeft:'20px'}}>
          <Link to="/1" style={{padding:'10px',backgroundColor:'#33513F' ,borderRadius:'50px' }}>
            <button className={classes.button} style={{
                width:'400px', height:'50px', borderRadius:'5px' ,backgroundColor:'#33513F',textDecoration:'none',color:'white'
            }}>Go straight to detection ➡️ </button>
          </Link>
        </div>
     <div>
     <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
     <div style={{ display: 'flex', justifyContent: 'center', borderRadius: '50px',marginTop: '30px', height:'250px' }}>
        <div style={{ padding: '10px', backgroundColor: '#33513F', borderRadius: '30px', marginRight: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Link to="/1" style={{ textDecoration: 'none', color: 'white' }}>
        <button style={{ width: '400px', height: '50px', borderRadius: '5px', backgroundColor: '#33513F', color: 'white', border: 'none', cursor: 'pointer' }}>
          <p style={{ fontSize: '20px' }}>WANT HELP WITH SOMETHING SPECIFIC</p>
        </button>
      </Link>
      <p style={{ textAlign: 'justify', marginLeft: '40px', fontSize: '20px', marginRight: '40px', overflowY: 'auto', maxHeight: '200px' }}>
        <br></br> your virtual assistant in the world of
        <br></br> farming and agriculture! Our chatbot is
        <br></br> designed to assist farmers and agriculture
        <br></br> enthusiasts by providing valuable
        <br></br> information, guidance, and support.
      </p>
</div>
  
        <div style={{ padding: '5px', backgroundColor: '#33513F', borderRadius: '30px' }}>
        <p style={{ marginLeft:'100px',fontSize: '20px' , color:'white'}}>STATE GOV WEBSITES </p>
          <Link to="https://krishi.maharashtra.gov.in/" style={{ textDecoration: 'none', color: 'white' }}>
            <button style={{ width: '400px', height: '20px', borderRadius: '5px', backgroundColor: '#33513F', border: 'none', cursor: 'pointer' }}>
              <p style={{ fontSize: '20px' }}>Maharashtra ➡️</p>
            </button>
          </Link><br></br>
          <Link to="/https://agriharyana.gov.in/" style={{ textDecoration: 'none', color: 'white' }}>
            <button style={{ width: '400px', height: '20px', borderRadius: '5px', backgroundColor: '#33513F', border: 'none', cursor: 'pointer' }}>
            <p style={{ fontSize: '20px' }}>Haryana ➡️</p>
            </button>
          </Link>
          <br></br>
          <Link to="/https://raitamitra.karnataka.gov.in/english" style={{ textDecoration: 'none', color: 'white' }}>
            <button style={{ width: '400px', height: '20px', borderRadius: '5px', backgroundColor: '#33513F', border: 'none', cursor: 'pointer' }}>
            <p style={{ fontSize: '20px' }}>Karnataka ➡️</p>
            </button>
          </Link>
          <br></br>
          <Link to="/https://dbtagriculture.bihar.gov.in/" style={{ textDecoration: 'none', color: 'white' }}>
            <button style={{ width: '400px', height: '20px', borderRadius: '5px', backgroundColor: '#33513F', border: 'none', cursor: 'pointer' }}>
            <p style={{ fontSize: '20px' }}>Bihar ➡️</p> 
            </button>
          </Link>
          
        </div>
      </div>

   
</div>
    </>

  );
};

export default FfPage;