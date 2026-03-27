// Schedule.js
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

//images

// import ergsprints from '../images/ErgSprints.jpg';
//import ohio from '../images/ohio.jpg';
// import sju from '../images/sju.jpg';
import dadvail from '../images/dadvail.jpeg';
import mason from '../images/mason.png';
import vcu from '../images/vcu.jpeg';
// import psucrew from '../images/psu_crew_logo.png'
//import occoquan_chase from '../images/Occoquan Chase.png'
//import kerrcup from '../images/drexel.jpg';
import knecht from '../images/knecht.png'


const Schedule = () => {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (route) => {
    navigate(route);
    window.scrollTo(0, 0);
  };


  const scheduleData = [
    { id: 1, name: 'Commonwealth Sprints Regatta', date: 'Saturday, March 28th', location: 'Richmond, VA.', link: 'https://www.regattacentral.com/regatta/?job_id=10267&org_id=0', photo: vcu },
    { id: 2, name: 'Knecht Cup', date: 'Saturday, April 11th - Sunday, April 12th', location: 'Cooper River, N.J.', link: 'https://knechtcupregatta.com', photo: knecht },
    { id: 3, name: 'Mid Atlantic Collegiate Crew Championship', date: 'Sunday, April 26th', location: 'Occoquan, VA.', link: 'https://www.regattacentral.com/regatta/index.jsp?job_id=10125', photo: mason },
    { id: 4, name: 'Dad Vail Regatta', date: 'Friday, May 8th - Saturday, May 9th', location: 'Pennsauken, N.J. ', link: 'https://dadvail.org/', photo: dadvail }
    // { id: 5, name: 'Head of the Occoquan', date: 'Nov 2 (Sat)', location: 'Fairfax Station, Va.', link: 'https://www.rowobc.org/regattas-camps/hoto', photo: mason },
    // { id: 6, name: 'Philadelphia Frostbite Regatta', date: 'Nov 10 (Sun)', location: 'West Windsor, NJ.', link: 'https://pennsylvaniabargeclub.org/philadelphia-frostbite-regatta/', photo: frostbite },
  ];

  
  // const ResponsiveContainer = styled(Container)(({ theme }) => ({
  //   background: 'white',
  //   width: '80%',
  //   marginTop: '90px',
  //   marginBottom: '30px',
  //   borderRadius: '0',
  //   boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)',
  //   [theme.breakpoints.down('sm')]: {
  //     maxWidth: 'lg',
  //   },
  // }));
  

  const numRaces = scheduleData.length;
  const greyBackground = '#f0f0f0'
  const isXsScreen = useMediaQuery('(max-width:600px)');

  return (
    <div style={{ background: greyBackground, minHeight: '80vh', display: 'flex' }}>
      <Container 
        style={{ 
        background: 'white',  
        marginTop: '90px',
        marginBottom: '30px', 
        borderRadius: '0', 
        boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)' }}
        maxWidth="md"
      >
      {/* <ResponsiveContainer> */}
        <Typography variant="h6" style={{ 
          color: '#2c2a29',  
          marginBottom: '10px', 
          marginTop: '10px',
          fontFamily: '"source-sans-pro", sans-serif',
          fontWeight: '700',
          }}
          >Spring 2026 Schedule</Typography>
        
        <Divider></Divider>
        {scheduleData.map((race) => (
          <Card key={race.id} 
            style={{ background: race.id % 2 === 0 ? '#f0f0f0' : 'white', 
            marginBottom: race.id === numRaces ? '20px' : '0px', 
            display: 'flex', 
            alignItems: 'center', 
            boxShadow: '0 0px 5px rgba(0, 0, 0, 0)' }}>
              {/* <CardMedia
                component="img"
                alt={race.name}
              //   height="140"
                image={race.photo}
                style={{ width: '90px', objectFit: 'cover',  marginLeft: '20px', marginTop: '20px', marginBottom: '20px', marginRight: '20px' }}
              /> */}
              <CardMedia
                component="img"
                alt={race.name}
                image={race.photo}
                style={{
                  width: '100px', // Fixed width for all logos
                  height: '50px', // Fixed height for all logos
                  objectFit: 'contain', // Ensures the image is scaled properly without being cropped
                  marginLeft: '20px',
                  marginTop: '20px',
                  marginBottom: '20px',
                  marginRight: '20px'
                }}
              />

              


              {isXsScreen ? (
                <CardContent style={{alignItems: 'center' }}>
                  <Typography variant="body2" style={{ fontSize: '12px', color: '#2c2a29', fontFamily: '"source-sans-pro", sans-serif' }}>
                    {race.date}
                  </Typography>
                  <Link to={race.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", boxShadow: "none"}}>
                    <Typography variant="body1" style={{ fontSize: '18px',color: '#2c2a29', fontWeight: '700', fontFamily: '"source-sans-pro", sans-serif' }}>
                        {race.name}
                    </Typography>
                   </Link>
                  <Typography variant="body1" style={{ fontFamily: '"source-sans-pro", sans-serif', fontSize: '12px', color: '#2c2a29', width: '100%' }}>
                    {race.location}
                  </Typography>
                </CardContent>
              ) : (
                <><CardContent style={{}}>
                  <Typography variant="body2" style={{ fontSize: '12px', color: '#2c2a29', fontFamily: '"source-sans-pro", sans-serif' }}>
                    {race.date}
                  </Typography>
                  <Link to={race.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", boxShadow: "none"}}>
                    <Typography variant="body1" style={{ fontSize: '18px',color: '#2c2a29', fontWeight: '700', fontFamily: '"source-sans-pro", sans-serif' }}>
                        {race.name}
                    </Typography>
                   </Link>
                </CardContent>
                <CardContent style={{ marginLeft: 'auto', marginRight: '-50px', alignItems: 'center' }}>
                  <Typography>&nbsp;&nbsp;</Typography>
                  <Typography variant="body1" style={{ fontFamily: '"source-sans-pro", sans-serif', fontSize: '12px', color: '#2c2a29', width: '450px' }}>
                    {race.location}
                  </Typography>
                </CardContent></>
                
              )}
            
          </Card>
        ))}
        <Divider></Divider>
      </Container>
      
    </div>
  );
};


export default Schedule;