// Roster.js
import React, { useEffect, useState } from "react";
import logo from '../images/Maryland_logo.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';



const Roster = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (route) => {
    navigate(route);
    window.scrollTo(0, 0);
  };


  const rosterData = [
    { id: 1, name: 'Arjun Akkiraju', year: 'Senior', major: 'Computer Science', hometown: 'Saratoga, Calif.', highschool: 'The Harker School', height: "5'9\"", position: "Starboard", photo: logo },
    { id: 2, name: 'Dylan DeAngelo', year: 'Junior', major: 'Mechanical Engineering', hometown: 'Arnold, Md.', highschool: 'Broadneck', height: "6'0\"", position: "Starboard", photo: logo },
    { id: 3, name: 'Graham Elmore', year: 'Junior', major: 'Civil Engineering', hometown: 'Annapolis, Md.', highschool: 'Broadneck', height: "6'0\"", position: "Port", photo: logo },
    { id: 4, name: 'Will Fingles', year: 'Junior', major: 'Kinesiology', hometown: 'Ellicot City, Md.', highschool: 'River Hill', height: "5'11\"", position: "Port", photo: logo },
    { id: 5, name: 'Onur Gunduz', year: 'Junior', major: 'Computer Science', hometown: 'Fairfax, Va.', highschool: 'Thomas Jefferson', height: "5'11\"", position: "Port", photo: logo },
    { id: 6, name: 'Clint Hensley', year: 'Freshman', major: 'Economics', hometown: 'Silver Spring, Md.', highschool: 'Einstein', height: "5'9\"", position: "Starboard", photo: logo },
    { id: 7, name: 'Prabhat Jain', year: 'Sophomore', major: 'Computer Science', hometown: 'Sykesville, Md.', highschool: 'Century', height: "5'9\"", position: "Starboard", photo: logo },
    { id: 8, name: 'Derrick Jones', year: 'Sophomore', major: 'Aerospace Engineering', hometown: 'Upper Marlboro, Md.', highschool: 'Oxon Hill', height: "5'5\"", position: "Coxswain", photo: logo },
    { id: 9, name: 'Jason Kearns', year: 'Junior', major: 'Information Science', hometown: 'Arnold, Md.', highschool: 'Broadneck', height: "6'0\"", position: "Starboard", photo: logo },
    { id: 10, name: 'Justin Lee', year: 'Sophomore', major: 'Mechanical Engineering', hometown: 'McLean, Va.', highschool: 'McLean', height: "5'11\"", position: "Coxswain", photo: logo },
    { id: 11, name: 'Peter Micciche', year: 'Junior', major: 'Applied Physics & Economics', hometown: 'Lancaster, Pa.', highschool: 'Friends School of Baltimore', height: "6'0\"", position: "Port", photo: logo },
    { id: 12, name: 'Mike Montero', year: 'Junior', major: 'Public Health Science', hometown: 'Jarrettsville, Md.', highschool: 'Calvert Hall', height: "5'11\"", position: "Port", photo: logo },
    { id: 13, name: 'Shomit Nazare', year: 'Freshman', major: 'Neurobiology & Physiology', hometown: 'Boyds, Md.', highschool: 'Northwest', height: "5'11\"", position: "Port", photo: logo },
    { id: 14, name: 'Tejas Nazare', year: 'Senior', major: 'Mathematics', hometown: 'Boyds, Md.', highschool: 'Richard Montgomery', height: "5'5\"", position: "Starboard", photo: logo },
    { id: 15, name: 'Noah Ramos', year: 'Freshman', major: 'Physics', hometown: 'Preston, Md.', highschool: 'Easton', height: "5'5\"", position: "Port", photo: logo },
    { id: 16, name: 'AJ Robey', year: 'Sophomore', major: 'Physiology & Neurobiology', hometown: 'Poolesville, Md.', highschool: 'Poolesville', height: "5'5\"", position: "Coxswain", photo: logo },
    { id: 17, name: 'Pyotr Sergeevykh', year: 'Freshman', major: 'Economics', hometown: 'Baltimore, Md.', highschool: 'Baltmore School for the Arts', height: "6'2\"", position: "Starboard", photo: logo },
    { id: 18, name: 'Austin Schaeffer', year: 'Senior', major: 'Electrical Engineering', hometown: 'Annapolis, Md.', highschool: 'Old Mill', height: "6'2\"", position: "Starboard", photo: logo },
    { id: 19, name: 'Anthony van Rheenan', year: 'Sophomore', major: 'Computer Science', hometown: 'Vienna, Va.', highschool: 'Thomas Jefferson', height: "6'2\"", position: "Port", photo: logo },
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
  

  const numRowers = rosterData.length;
  const greyBackground = '#f0f0f0'
  const isXsScreen = useMediaQuery('(max-width:600px)');

  return (
    //<ThemeProvider theme={theme}>
    <div style={{ background: greyBackground, minHeight: '100vh', display: 'flex',  alignItems: 'center' }}>
      <Container 
        style={{ 
        background: 'white',  
        marginTop: '90px',
        marginBottom: '50px', 
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
          >Spring 2025 Roster</Typography>
        
        <Divider></Divider>
        {rosterData.map((rower) => (
          <Card key={rower.id} 
            style={{ background: rower.id % 2 === 0 ? '#f0f0f0' : 'white', 
            marginBottom: rower.id === numRowers ? '20px' : '0px', 
            display: 'flex', 
            alignItems: 'center', 
            boxShadow: '0 0px 5px rgba(0, 0, 0, 0)' }}>
              <CardMedia
                component="img"
                alt={rower.name}
              //   height="140"
                image={rower.photo}
                style={{ width: '60px', objectFit: 'cover',  marginLeft: '20px', marginTop: '20px', marginBottom: '20px', marginRight: '20px' }}
              />

              


              {isXsScreen ? (
                <CardContent style={{alignItems: 'center' }}>
                  <Typography variant="body2" style={{ fontSize: '12px', color: '#333', fontFamily: '"source-sans-pro", sans-serif' }}>
                    {rower.position}
                  </Typography>
                  <Typography variant="body1" style={{ fontSize: '18px',color: '#666666', fontWeight: '700', fontFamily: '"source-sans-pro", sans-serif' }}>
                    {rower.name}
                  </Typography>
                  <Typography variant="body1" style={{ fontFamily: '"source-sans-pro", sans-serif', fontSize: '12px', color: '#2c2a29', width: '100%' }}>
                    <span style={{ fontWeight: '700', fontStyle: 'italic' }}>{rower.year}&nbsp;</span>
                    / {rower.major} / {rower.hometown} / {rower.highschool}
                  </Typography>
                </CardContent>
              ) : (
                <><CardContent style={{}}>
                  <Typography variant="body2" style={{ fontSize: '12px', color: '#333', fontFamily: '"source-sans-pro", sans-serif' }}>
                    {rower.position}
                  </Typography>
                  <Typography variant="body1" style={{ fontSize: '18px', color: '#666666', fontWeight: '700', fontFamily: '"source-sans-pro", sans-serif' }}>
                    {rower.name}
                  </Typography>
                </CardContent>
                <CardContent style={{ marginLeft: 'auto', marginRight: '0px', alignItems: 'center' }}>
                  <Typography>&nbsp;&nbsp;</Typography>
                  <Typography variant="body1" style={{ fontFamily: '"source-sans-pro", sans-serif', fontSize: '12px', color: '#2c2a29', width: '450px' }}>
                    <span style={{ fontWeight: '700', fontStyle: 'italic' }}>{rower.year}&nbsp;</span>
                    /  {rower.major} / {rower.hometown} / {rower.highschool}
                  </Typography>
                </CardContent></>
                
              )}
            
          </Card>
        ))}
        <Divider></Divider>
      </Container>
      
    </div>
    //</ThemeProvider>
  );
};


export default Roster;